泛型组件
获取泛型组件 ref 时，xxx 不满足约束“abstract new (...args: any) => any”。

在全局 types 上引入
type GenericComponentExports<D extends (...p: any[]) => any> = import("vue").ComponentPublicInstance &
Parameters<NonNullable<NonNullable<ReturnType<D>["__ctx"]>["expose"]>>[0];

const tableRef = ref<GenericComponentExports<typeof BasicTable>>();

Support for the experimental syntax ‘jsx‘ isn‘t currently enabled
在.babelrc 文件中添加@vue/babel-preset-jsx，如下代码：
presets: ['@vue/babel-preset-jsx'],

路由 import 问题
可使用 simple-progress-webpack-plugin 查看是到哪里卡顿了
const SimpleProgressWebpackPlugin = require("simple-progress-webpack-plugin");
config.plugin("simple-progress-webpack-plugin").use(SimpleProgressWebpackPlugin, [
{
format: "minimal" // options are minimal, compact, expanded, verbose
}
]);

当 import 语法导致加载慢的时候https://github.com/yuxino/blog/issues/87
babel-plugin-dynamic-import-node
env: {
development: {
plugins: ["dynamic-import-node"]
}
}
