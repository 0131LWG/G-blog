// (二)Vue3 源码 探秘之旅：createApp 到底是个什么鬼

首先先看看 Vue3 源码的目录结构

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

在 packages/vue/examples 下新建 learn 文件夹并新建 index.html 文件，新建一段示例代码用于调试使用：

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

调试方式：
在终端中执行 pnpm run dev-esm 实时的编译源码
新建一个终端执行 pnpm run serve，访问起的服务，进入 packages/vue/examples/learn/index.html
F12 打开控制台，打开网络->全部->/packages/vue/examples/learn/,鼠标右击找到“在来源面板打开”点击进入源码，在 createApp 打上断点，刷新页面
点击单步进入或者 F9，这样就可以看到 createApp 的执行步骤了
