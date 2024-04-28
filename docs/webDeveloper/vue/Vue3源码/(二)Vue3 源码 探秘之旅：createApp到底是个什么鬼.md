你是否曾经想过 Vue3 是如何从根本上创建和管理你的应用的呢？这篇文章将带你深入理解 createApp 的工作机制。

## 1. 初步探索 Vue3 源码的目录结构

```js
├── packages
│   ├── compiler-core     // 与平台无关的编译器实现的核心函数包
│   ├── compiler-dom      // 浏览器相关的编译器上层内容
│   ├── compiler-sfc      // 单文件组件的编译器
│   ├── compiler-ssr      // 服务端渲染相关的编译器实现
│   ├── global.d.ts       // ts 相关一些声明文件
│   ├── reactivity        // 响应式核心包
│   ├── runtime-core      // 与平台无关的渲染器相关的核心包
│   ├── runtime-dom       // 浏览器相关的渲染器部分
│   ├── runtime-test      // 渲染器测试相关代码
│   ├── server-renderer   // 服务端渲染相关的包
│   ├── sfc-playground    // 单文件组件演练场
│   ├── shared            // 工具库相关
│   ├── size-check        // 检测代码体积相关
│   ├── template-explorer // 演示模板编译成渲染函数相关的包
│   └── vue               // 包含编译时和运行时的发布包
```

## 2. 调试方式：

1. 在 packages/vue/examples 下新建 learn 文件夹并新建 index.html 文件，新建一段示例代码用于调试使用：

```vue
<div id="root"></div>

<script type="module">
import { h, ref, createApp } from "../../dist/vue.runtime.esm-bundler.js"

const count = ref(0)

const HelloWorld = {
  name: "HelloWorld",
  render() {
    return h("div", { tId: "hello-world" }, `hello world: count: ${count.value}`)
  }
}

const App = {
  name: "App",
  render() {
    return h("div", { tId: 1 }, [h("p", {}, "主页"), h(HelloWorld)])
  }
}

createApp(App).mount(document.querySelector("#root"))
</script>
```

2. 在终端中执行 pnpm run dev-esm 实时的编译源码
3. 新建一个终端执行 pnpm run serve，访问起的服务，进入 packages/vue/examples/learn/index.html
4. 要调试首先要确定源码的位置 F12 打开控制台，打开网络->全部->/packages/vue/examples/learn/,鼠标右击找到“在来源面板打开”点击进入源码，在 createApp 打上断点，刷新页面
5. 点击单步进入或者 F9，这样就可以看到 createApp 的执行步骤了

## 3. createApp 源码分析

至此，我们已经完成了准备工作，接下来开始探讨 createApp 到底在做什么。你可以先一直点击单步进入，会发现 createApp 源码大致的执行步骤如下:

1. 进入 runtime-dom/src/index.ts 中的 createApp 函数
2. 进入 ensureRenderer 函数 -> createRenderer 函数 -> baseCreateRenderer 函数这个函数非常多代码,但本篇文章暂时只看和 createApp 相关的部分,也就是最下面的 createApp: createAppAPI(render, hydrate)
3. 进入 createAppAPI 这个就是我们最主要需要看的

接下来会对 createAppAPI 进行较为详细分析,说清楚每行代码大致做了什么,如果自己有比较好的基础,可以参考上面的执行流程,自行看代码总结:

```apiCreateApp.ts
// 工厂函数
export function createAppAPI<HostElement>(
  render: RootRenderFunction<HostElement>,
  hydrate?: RootHydrateFunction,
): CreateAppFunction<HostElement> {
  // rootComponent根节点,它是我们在调用 createApp 时传入的根 Vue 组件，这个组件通常是我们整个 Vue 应用的入口组件。
  return function createApp(rootComponent, rootProps = null) {
    // 这里可以看出rootComponent可以传递对象或者函数
    if (!isFunction(rootComponent)) {
      // 为对象时进行拷贝，避免修改根组件导致原对象改变
      rootComponent = extend({}, rootComponent)
    }

    if (rootProps != null && !isObject(rootProps)) {
      __DEV__ && warn(`root props passed to app.mount() must be an object.`)
      rootProps = null
    }

    // 创建应用上下文对象,用于存储应用相关配置,单例模式
    const context = createAppContext()

    // TODO remove in 3.4
    if (__DEV__) {
      Object.defineProperty(context.config, 'unwrapInjectedRef', {
        get() {
          return true
        },
        set() {
          warn(
            `app.config.unwrapInjectedRef has been deprecated. ` +
              `3.3 now always unwraps injected refs in Options API.`,
          )
        },
      })
    }

    // 使用Set来添加插件,这样可以避免重复,Set自带唯一性
    const installedPlugins = new Set()

    // 用于判断是否已经挂载
    let isMounted = false

    // context.app放在上下文中
    const app: App = (context.app = {
      _uid: uid++,
      _component: rootComponent as ConcreteComponent,
      _props: rootProps,
      _container: null,
      _context: context,
      _instance: null,

      version,

      // 获取上下文配置
      get config() {
        return context.config
      },

      set config(v) {
        if (__DEV__) {
          warn(
            `app.config cannot be replaced. Modify individual options instead.`,
          )
        }
      },

      // app.use(),装饰器模式
      use(plugin: Plugin, ...options: any[]) {
        if (installedPlugins.has(plugin)) {
          // 判断是否已经安装过该插件
          __DEV__ && warn(`Plugin has already been applied to target app.`)
        } else if (plugin && isFunction(plugin.install)) {
          // 添加插件
          installedPlugins.add(plugin)
          // 其实就是一个调用插件对象中的 install 方法将app 示例传递出去的过程
          plugin.install(app, ...options)
        } else if (isFunction(plugin)) {
          installedPlugins.add(plugin)
          // 函数也可以注册为一个插件
          plugin(app, ...options)
        } else if (__DEV__) {
          warn(
            `A plugin must either be a function or an object with an "install" ` +
              `function.`,
          )
        }
        return app
      },

      // 全局 mixin
      mixin(mixin: ComponentOptions) {
        // 判断是否为options api模式
        if (__FEATURE_OPTIONS_API__) {
          if (!context.mixins.includes(mixin)) {
            context.mixins.push(mixin)
          } else if (__DEV__) {
            warn(
              'Mixin has already been applied to target app' +
                (mixin.name ? `: ${mixin.name}` : ''),
            )
          }
        } else if (__DEV__) {
          warn('Mixins are only available in builds supporting Options API')
        }
        return app
      },

      // 全局注册组件
      component(name: string, component?: Component): any {
        if (__DEV__) {
          // 判断组件名称，使其不使用内置或保留的 HTML 元素作为组件
          validateComponentName(name, context.config)
        }
        if (!component) {
          // 没有传递组件的话就将该组件从全局组件中获取返回
          return context.components[name]
        }
        // 判断是否存在
        if (__DEV__ && context.components[name]) {
          warn(`Component "${name}" has already been registered in target app.`)
        }
        // 注册
        context.components[name] = component
        return app
      },

      // 注册自定义指令
      directive(name: string, directive?: Directive) {
        if (__DEV__) {
          // 判断指令名称，使其不使用内置指令做为自定义指令名称
          validateDirectiveName(name)
        }

        if (!directive) {
          // 没有传递指令的话就将该指令从全局指令中获取返回
          return context.directives[name] as any
        }
        // 判断是否存在
        if (__DEV__ && context.directives[name]) {
          warn(`Directive "${name}" has already been registered in target app.`)
        }
        // 注册
        context.directives[name] = directive
        return app
      },

      // 挂载,这里也就是我们常用到的createApp(App).mount(document.querySelector('#root'))中的mount
      mount(
        rootContainer: HostElement,
        isHydrate?: boolean,
        isSVG?: boolean,
      ): any {
        // 判断是否挂载过
        if (!isMounted) {
          // #5571
          // 判断当前的根容器是否已经有app实例，如果有则报错
          if (__DEV__ && (rootContainer as any).__vue_app__) {
            warn(
              `There is already an app instance mounted on the host container.\n` +
                ` If you want to mount another app on the same host container,` +
                ` you need to unmount the previous app by calling \`app.unmount()\` first.`,
            )
          }

          // 创建根节点的vnode，虚拟dom
          const vnode = createVNode(rootComponent, rootProps)
          // store app context on the root VNode.
          // this will be set on the root instance on initial mount.
          // 将组件的上下文关系保存在属性 appContext 上
          vnode.appContext = context

          // HMR root reload
          if (__DEV__) {
            // 当模块改变时，重新渲染
            context.reload = () => {
              render(cloneVNode(vnode), rootContainer, isSVG)
            }
          }

          if (isHydrate && hydrate) {
            // ssr hydrate这里先不考虑
            hydrate(vnode as VNode<Node, Element>, rootContainer as any)
          } else {
            // 渲染
            render(vnode, rootContainer, isSVG)
          }
          // 标记挂载
          isMounted = true
          app._container = rootContainer
          // for devtools and telemetry
          ;(rootContainer as any).__vue_app__ = app

          if (__DEV__ || __FEATURE_PROD_DEVTOOLS__) {
            // 在开发模式下或启用了开发工具的特性时，将根组件实例保存在 app._instance 上，然后初始化开发工具。
            app._instance = vnode.component
            devtoolsInitApp(app, version)
          }

          // vnode.component!这里的!是 ts 中的非空断言符，即代表不是 null 或者 undefined
          return getExposeProxy(vnode.component!) || vnode.component!.proxy
        } else if (__DEV__) {
          warn(
            `App has already been mounted.\n` +
              `If you want to remount the same app, move your app creation logic ` +
              `into a factory function and create fresh app instances for each ` +
              `mount - e.g. \`const createMyApp = () => createApp(App)\``,
          )
        }
      },

      // 卸载
      unmount() {
        if (isMounted) {
          render(null, app._container)
          if (__DEV__ || __FEATURE_PROD_DEVTOOLS__) {
            app._instance = null
            devtoolsUnmountApp(app)
          }
          delete app._container.__vue_app__
        } else if (__DEV__) {
          warn(`Cannot unmount an app that is not mounted.`)
        }
      },

      // 注入
      provide(key, value) {
        if (__DEV__ && (key as string | symbol) in context.provides) {
          warn(
            `App already provides property with key "${String(key)}". ` +
              `It will be overwritten with the new value.`,
          )
        }

        context.provides[key as string | symbol] = value

        return app
      },

      // 使用 app 的上下文执行回调函数
      runWithContext(fn) {
        currentApp = app
        try {
          return fn()
        } finally {
          currentApp = null
        }
      },
    })

    // 是否使用@vue/compat构建迁移版本，方便vue2 迁移 vue3，不需要过多深究，如果有迁移需求可以阅读
    if (__COMPAT__) {
      installAppCompatProperties(app, context, render)
    }

    // 返回app,构建流程完成
    return app
  }
}
```

## 4. 结束

在这篇文章中，我们深入理解 createApp 的工作原理和其在 Vue3 源码中的实现。也清楚的知道 createApp 到底是做了什么,但是还是有很多我们省略掉的,这是为了不让阅读的难度提升,否则很容易会看不下去
,阅读源码时我们也会接触到一下设计模式,这些不会赘述,但希望在看到后没有理解的童鞋,可以进行深入的理解,之后我们也会其他部分的源码,注意看源码最重要的是沉得住气
