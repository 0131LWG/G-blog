// 清理缓存
$ yarn cache clean
$ npm cache clean -f
$ pnpm store prune

// 设置新的缓存地址
$ npm config set global-folder "E:/npm/global"
$ pnpm config set global-folder "E:/yarn/global"
$ pnpm config set "E:/pnpm/global"

pnpm add @dvs/ui-lib@\* --filter dvs-main

https://pnpm.io/zh/cli/config#--location

一、什么是幽灵依赖？
“幽灵依赖” 就是：未在项目 package.json 中声明的依赖，但在项目中依然可以意外的被正确引用。

原因就是 npm v5 只后，把所有的依赖全部拍平整理到项目的 node_modules 之中，才导致了上面说的这种情况。（yarn 也一样，都存在幽灵依赖）

我们可以看到，在 express 的 package.json 中，他声明的依赖项并不是项目的依赖项，但也被拍平到 node_modules 文件夹中。所以有时候我们可能会不小心引用到这个依赖，开发者会误判，以为是项目自己的依赖，导致某些玄学的报错。

pnpm 解决的方法是软硬链接结合

https://sakina.blog.csdn.net/?type=blog 星野睡不醒
Monorepo 设计思路 https://sakina.blog.csdn.net/article/details/123872033?spm=1001.2014.3001.5502
Monorepo 管理方法论和依赖安全 https://blog.csdn.net/qq_21567385/article/details/125583482

使用 workspace:_ 协议关联子包
子包间相互引用代码时，应该使用 workspace:_ 的写法来链接子包，而不是具体的版本号，这可以防止多人协作时修改版本的遗漏和冲突。

如果有发包场景，应该使用 changesets 来发包，该工具会帮你自动升级版本、产生 CHANGELOG 、自动替换 workspace:\* 为具体版本、自动保持版本一致性，对标最佳实践。

关于 changesets 的基础内容可自行搜索学习，进阶内容可参考：

《 monorepo 工作流基础之 changesets 打开与进阶（Speeches） 》https://blog.csdn.net/qq_21567385/article/details/122361591

使用 turborepo 避免循环依赖
在构建子包时，为了达到按需、最优的构建路径，应该使用 turborepo 定向构建，turbo 会自动帮你检查有无循环依赖，若有会报错退出。

需要注意的是 pnpm 原生支持的定向构建 pnpm -r --filter 检测不到循环依赖。

另外，由于 turbo 执行命令不方便携带额外参数（一个经典的场景是本地构建需要包的 declarationMap 方便定位，而云不需要），所以可以编写一个脚本判断 process.env.CI 是否存在（需要构建环境的镜像支持该变量），然后本地用 pnpm -r --filter 构建预依赖，云用 turbo 构建。

关于 turborepo 的相关参考可见：

《 使用 Turborepo 进行复杂拓扑关系的 monorepo 最优构建 》

《 turborepo v1.2.0 版本升级指南（–filter 过滤范围） 》

https://blog.csdn.net/qq_21567385/article/details/125357074《 Monorepo 丝滑方法论：引用模块热更新 》

monorepo 同时编译 vue2 和 vue3 项目 https://blog.axiu.me/vue2-and-vue3-build-in-monorepo/
{
"pnpm": {
"packageExtensions": {
"vue-template-compiler": {
"peerDependencies": {
"vue": "2.7.14"
}
}
}
}
}

tsc-alias

升级版本报错:Unable to find the global bin directory

先执行 pnpm setup 找到目录
pnpm setup

设置环境变量
$env:PNPM_HOME="C:\Users\EDY\AppData\Local\pnpm\"
$env:PATH+=$env:PNPM_HOME

升级
pnpm add -g pnpm
