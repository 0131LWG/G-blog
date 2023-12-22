import{_ as e,o as t,c as p,O as o}from"./chunks/framework.fb7bb97b.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"webDeveloper/construction/pnpm.md","filePath":"webDeveloper/construction/pnpm.md","lastUpdated":1703249357000}'),r={name:"webDeveloper/construction/pnpm.md"},n=o('<p>// 清理缓存 $ yarn cache clean $ npm cache clean -f $ pnpm store prune</p><p>// 设置新的缓存地址 $ npm config set global-folder &quot;E:/npm/global&quot; $ pnpm config set global-folder &quot;E:/yarn/global&quot; $ pnpm config set &quot;E:/pnpm/global&quot;</p><p>pnpm add @dvs/ui-lib@* --filter dvs-main</p><p><a href="https://pnpm.io/zh/cli/config#--location" target="_blank" rel="noreferrer">https://pnpm.io/zh/cli/config#--location</a></p><p>一、什么是幽灵依赖？ “幽灵依赖” 就是：未在项目 package.json 中声明的依赖，但在项目中依然可以意外的被正确引用。</p><p>原因就是 npm v5 只后，把所有的依赖全部拍平整理到项目的 node_modules 之中，才导致了上面说的这种情况。（yarn 也一样，都存在幽灵依赖）</p><p>我们可以看到，在 express 的 package.json 中，他声明的依赖项并不是项目的依赖项，但也被拍平到 node_modules 文件夹中。所以有时候我们可能会不小心引用到这个依赖，开发者会误判，以为是项目自己的依赖，导致某些玄学的报错。</p><p>pnpm 解决的方法是软硬链接结合</p><p><a href="https://sakina.blog.csdn.net/?type=blog" target="_blank" rel="noreferrer">https://sakina.blog.csdn.net/?type=blog</a> 星野睡不醒 Monorepo 设计思路 <a href="https://sakina.blog.csdn.net/article/details/123872033?spm=1001.2014.3001.5502" target="_blank" rel="noreferrer">https://sakina.blog.csdn.net/article/details/123872033?spm=1001.2014.3001.5502</a> Monorepo 管理方法论和依赖安全 <a href="https://blog.csdn.net/qq_21567385/article/details/125583482" target="_blank" rel="noreferrer">https://blog.csdn.net/qq_21567385/article/details/125583482</a></p><p>使用 workspace:_ 协议关联子包 子包间相互引用代码时，应该使用 workspace:_ 的写法来链接子包，而不是具体的版本号，这可以防止多人协作时修改版本的遗漏和冲突。</p><p>如果有发包场景，应该使用 changesets 来发包，该工具会帮你自动升级版本、产生 CHANGELOG 、自动替换 workspace:* 为具体版本、自动保持版本一致性，对标最佳实践。</p><p>关于 changesets 的基础内容可自行搜索学习，进阶内容可参考：</p><p>《 monorepo 工作流基础之 changesets 打开与进阶（Speeches） 》<a href="https://blog.csdn.net/qq_21567385/article/details/122361591" target="_blank" rel="noreferrer">https://blog.csdn.net/qq_21567385/article/details/122361591</a></p><p>使用 turborepo 避免循环依赖 在构建子包时，为了达到按需、最优的构建路径，应该使用 turborepo 定向构建，turbo 会自动帮你检查有无循环依赖，若有会报错退出。</p><p>需要注意的是 pnpm 原生支持的定向构建 pnpm -r --filter 检测不到循环依赖。</p><p>另外，由于 turbo 执行命令不方便携带额外参数（一个经典的场景是本地构建需要包的 declarationMap 方便定位，而云不需要），所以可以编写一个脚本判断 p<wbr>rocess.env.CI 是否存在（需要构建环境的镜像支持该变量），然后本地用 pnpm -r --filter 构建预依赖，云用 turbo 构建。</p><p>关于 turborepo 的相关参考可见：</p><p>《 使用 Turborepo 进行复杂拓扑关系的 monorepo 最优构建 》</p><p>《 turborepo v1.2.0 版本升级指南（–filter 过滤范围） 》</p><p><a href="https://blog.csdn.net/qq_21567385/article/details/125357074%E3%80%8A" target="_blank" rel="noreferrer">https://blog.csdn.net/qq_21567385/article/details/125357074《</a> Monorepo 丝滑方法论：引用模块热更新 》</p>',20),a=[n];function s(l,c,i,d,_,b){return t(),p("div",null,a)}const f=e(r,[["render",s]]);export{g as __pageData,f as default};
