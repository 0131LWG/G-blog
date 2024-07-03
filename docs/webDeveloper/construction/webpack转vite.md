安装工具
npm install @originjs/webpack-to-vite -g

dotenv
import dotenv from "dotenv";、
dotenv.config({
path: path.resolve("../../packages/config/src/env/", envFile)
});

TypeError [ERR_UNKNOWN_FILE_EXTENSION]: Unknown file extension ".ts"
看到很多帖子会说：在 package.json 中删除"type": "module"，但是在 Vite5 中会提示会提示：The CJS build of Vite's Node API is deprecated，答案在https://vitejs.dev/guide/troubleshooting，也就是说在 Vite6 中你需要在 package.json 中配置"type": "module"
如果你是使用的 monorepo 这种方式，那你需要注意，在 vite.config.ts 中不要直接的去引入其他仓库中的 ts 模块，因为此时的 vite 并不会像 webpack 一样在启动时进行编译打包，所以识别不了 ts 文件，所以如果想要识别需要将引入的仓库进行打包

"import.meta" is not available with the "cjs" output format and will be empty [empty-import-meta]
vite.config.ts:14:23
proxy: createProxy(import.meta.env.VUE_APP_PROXY)
https://cn.vitejs.dev/config/#using-environment-variables-in-config

报错：Unexpected token 'export'
添加 package.json 中配置"type": "module"

自动引入模块改变
const moduleFiles = require.context('./modules', false, /\.ts$/)
const files= import.meta.globEager('./modules/\*.ts')

类型“ImportMeta”上不存在属性“glob”
tsconfig.json
{
"compilerOptions": {
"types": ["vite/client"]
}
}
