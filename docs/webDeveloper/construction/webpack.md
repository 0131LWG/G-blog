# webpack 初识

## 为什么需要构建工具

1. 模块化打包：Webpack 能够处理 JavaScript 模块的打包问题，它能够将项目中分散的、彼此依赖的模块按照依赖关系打包成一个或多个静态资源。这解决了在浏览器端加载多个模块文件时遇到的性能问题，使得前端代码的组织和管理更加高效。

2. 资源处理：除了 JavaScript，Webpack 还能够处理项目中的其他资源，如 CSS、图片、字体等。通过配置相应的加载器（loader），Webpack 可以将这些资源转换为浏览器可识别的格式，并自动处理资源之间的依赖关系。

3. 优化性能：Webpack 提供了多种性能优化手段，如代码分割（code splitting）、按需加载（lazy loading）、树摇（tree shaking）等。这些优化手段可以帮助减少首次加载时间，提高应用的响应速度，从而提升用户体验。

4. 插件扩展性：Webpack 拥有一个强大的插件系统，开发者可以通过编写插件来扩展 Webpack 的功能。这使得 Webpack 能够满足各种复杂的项目需求，如构建过程的自定义、代码质量检查、环境变量注入等。

5. 开发体验：Webpack 与开发服务器（如 webpack-dev-server）结合使用，可以实现热更新（Hot Module Replacement，HMR）等功能，使得开发者在开发过程中无需手动刷新页面即可看到代码更改的效果，大大提高了开发效率。

6. 跨平台兼容性：Webpack 可以在多种环境下运行，无论是浏览器还是 Node.js，都能够实现代码的打包和优化。这使得 Webpack 成为前端项目构建的不二选择。

综上所述，Webpack 构建工具的出现解决了前端开发中模块化、资源处理、性能优化、插件扩展性、开发体验和跨平台兼容性等问题，使得前端开发变得更加高效和便捷。

## 配置文件名称

通过 webpack --config 指定配置文件,默认: webpack.config.js

## 初识 webpack 配置的组成

```js
module.exports = {
  // 打包的入口文件，默认src/index.js
  entry: "./src/index.js",
  // 打包的输出,默认dist/main.js
  output: "./dist/main.js",
  // 环境
  mode: "production",
  module: {
    // loader配置
    rules: [{ test: /\.txt$/, use: "raw-loader" }]
  },
  // 插件配置
  plugins: [
    new HtmlwebpackPlugin({
      template: "./src/index.html"
    })
  ]
}
```

## entry 入口文件

指定 webpack 打包入口文件

```js
// 单入口
module.exports = {
  entry: "./src/index.js"
}

// 多入口
module.exports = {
  entry: {
    app: "./app/src/index.js",
    mainApp: "./mainApp/src/index.js"
  }
}
```

## output 输出地址

指定 webpack 如何将编译后的文件输出到磁盘的指定位置

```js
// 单出口
module.exports = {
  output: "./dist/main.js"
}

module.exports = {
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist"
  }
}
// 多出口
module.exports = {
  entry: {
    app: "./app/src/index.js",
    mainApp: "./mainApp/src/index.js"
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/dist"
  }
}
```

## loaders

webpack 开箱即用只支持 JS 和 JSON 两种文件类型，通过 Loaders 去支持其他文件类型并转化为有效模块，并可以添加到依赖图中，本身为函数，接受源文件作为参数，返回转换结果

1. 常见的 loaders

| 名称          | 描述                           |
| ------------- | ------------------------------ |
| babel-loader  | 转换 ES6、ES7 等 JS 新特征语法 |
| css-loader    | 支持.css 文件的解析和加载      |
| less-loader   | 将 less 转为 css               |
| ts-loader     | 将 ts 转为 js                  |
| file-loader   | 进行图片、字体等的打包         |
| raw-loader    | 将文件以字符串的形式导入       |
| thread-loader | 多进程打包 js 和 css           |

2. loaders 的⽤法

```js
const path = require("path")

module.exports = {
  output: {
    filename: "bundle.js"
  },
  module: {
    rules: [
      // test 指定匹配的规则
      // use 指定使用的loader名称
      { test: /\.txt$/, use: "raw-loader" }
    ]
  }
}
```

## plugins 插件

插件用于 bundle 文件的优化，资源管理和环境变量注入，作用于整个构建过程

1. 常见 Plugins

| 名称                         | 描述                                             |
| ---------------------------- | ------------------------------------------------ |
| CommonsChunkPlugin           | 将 chunks 相同的模块代码提取成公共的 js          |
| CleanWebpackPlugin           | 清理构建目录                                     |
| ExtractTextWebpackPlugin     | 将 css 从 bundle 文件里提取成一个独立的 css 文件 |
| CopyWebpackPlugin            | 将文件或文件夹拷贝到构建的输出目录               |
| HtmlWebpackPlugin            | 创建 html 文件去承载输出的 bundle                |
| UglifyjsWebpackPlugin        | 压缩 js                                          |
| ZipWebpackPlugin             | 将打包出的资源生成一个 Zip 包                    |
| speed-measure-webpack-plugin | 查看编译时间                                     |
| webpack-bundle-analyzer      | 查看编译后的体积                                 |
| hard-source-webpack-plugin   | webpack4 下缓存配置                              |

## mode 环境

配置当前构建环境，可选：production、development、none,默认 production
