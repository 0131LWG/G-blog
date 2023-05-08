import{_ as e,o,c as a,O as d}from"./chunks/framework.b9480850.js";const u=JSON.parse('{"title":"vue3执行原理流程","description":"","frontmatter":{},"headers":[],"relativePath":"javascript/2022-08-26-vue3原理.md","filePath":"javascript/2022-08-26-vue3原理.md","lastUpdated":1683513669000}'),t={name:"javascript/2022-08-26-vue3原理.md"},c=d('<h1 id="vue3执行原理流程" tabindex="-1">vue3执行原理流程 <a class="header-anchor" href="#vue3执行原理流程" aria-label="Permalink to &quot;vue3执行原理流程&quot;">​</a></h1><h2 id="_1-初始化流程" tabindex="-1">1.初始化流程 <a class="header-anchor" href="#_1-初始化流程" aria-label="Permalink to &quot;1.初始化流程&quot;">​</a></h2><p>创建app进行初始化根据根节点生成vnode，调用render进行组件patch阶段</p><h2 id="_2-组件初始化" tabindex="-1">2.组件初始化 <a class="header-anchor" href="#_2-组件初始化" aria-label="Permalink to &quot;2.组件初始化&quot;">​</a></h2><p>==在组件进行patch时，根据vnode类型做处理，如果是component类型便做component组件初始化，如果是element类型做element初始化==，下面分两种不同的类型进行讲解初始化过程。</p><h3 id="_2-1-component组件初始化" tabindex="-1">2.1 <code>component</code>组件初始化 <a class="header-anchor" href="#_2-1-component组件初始化" aria-label="Permalink to &quot;2.1 `component`组件初始化&quot;">​</a></h3><p>1.创建组件实例</p><p>2.初始化<code>props</code>、<code>slot</code>并调用<code>setup</code>函数，将返回值结果添加到组件原型上。</p><p>3.如果查询到组件实例上没有<code>render</code>并且<code>template</code>有值，接下来便对<code>template</code>进行编译，最后将编译后的函数赋值给组件<code>render</code></p><p>4.初始化阶段调用<code>setupRenderEffect</code>是第一次调用，那么直接调用<code>render</code>函数获取子组件，触发<code>beforeMount</code>钩子，而后重新进行<code>patch</code>，全部<code>patch</code>完了之后才会调用<code>mount</code>钩子函数</p><h3 id="_2-2-element组件初始化" tabindex="-1">2.2 <code>Element</code>组件初始化 <a class="header-anchor" href="#_2-2-element组件初始化" aria-label="Permalink to &quot;2.2 `Element`组件初始化&quot;">​</a></h3><p>1.通过<code>vnode.type</code>创建对应真实元素</p><p>2.对<code>vnode</code>类型进行判断如果是文本直接渲染即可；如果是数组进行遍历对每个元素进行<code>patch</code></p><p>3.将<code>vnode</code>的<code>props</code>绑定到元素的真实<code>DOM</code>上</p><p>4.触发<code>beforeMount</code>钩子</p><p>5.将创建的元素进行插入</p><p>6.最后触发<code>mount</code>钩子函数</p><h2 id="_3-组件更新" tabindex="-1">3.组件更新 <a class="header-anchor" href="#_3-组件更新" aria-label="Permalink to &quot;3.组件更新&quot;">​</a></h2><p>在组件初始化过程当中，调用<code>setupRenderEffect</code>在内部创建组件更新函数，而后使用effect函数将更新函数放到调度函数当中，往后内部对响应式数据进行更新后，都会触发修改函数调用，将每次修改动作放到微任务队列里，待轮到微任务执行的时候，全部执行这样不会导致每次调用update函数带来</p><h3 id="_3-1-component组件更新" tabindex="-1">3.1 <code>component</code>组件更新 <a class="header-anchor" href="#_3-1-component组件更新" aria-label="Permalink to &quot;3.1 `component`组件更新&quot;">​</a></h3><p>1.触发当前组件的执行update后重新执行render函数获取最新vnode</p><p>2.触发beforeUpdate钩子与onVnodeBeforeUpdate钩子</p><p>3.将vnode传进patch，照样会进行类型判断(本小节讲解组件更新流程)</p><p>4.通过检测props判断是否需要更新组件，如果需要重新调用patch（这边是递归patch）</p><p>5.整个递归patch完成之后执行updated钩子函数</p><h3 id="_3-2-element组件更新" tabindex="-1">3.2 <code>Element</code>组件更新 <a class="header-anchor" href="#_3-2-element组件更新" aria-label="Permalink to &quot;3.2  `Element`组件更新&quot;">​</a></h3><p>1.触发当前组件的执行update后重新执行render函数获取最新vnode</p><p>2.触发beforeUpdate钩子与onVnodeBeforeUpdate钩子</p><p>3.执行patch，进入Element组件更新流程</p><p>4.对比新旧节点的props，如果不一致则更新dom的props</p><p>5.对比children，如果新vnode的children与旧vnode的children都是数组类型那么便进行diff算法比对，如果不是进行判断更新即可</p>',31),p=[c];function n(r,h,l,i,s,_){return o(),a("div",null,p)}const f=e(t,[["render",n]]);export{u as __pageData,f as default};
