---
theme: cyanosis
---

# Gulp 进阶之路：从任务创建到高效管理的秘诀

## 1. 什么是 Gulp

Gulp 是一个前端开发过程中的自动化构建工具，基于 Node.js 的流。它使用流来处理文件，使构建过程更为高效。Gulp 的核心理念是“代码优于配置”，通过最少的 API 让任务编写变得简单，同时使得复杂的任务也可管理。利用 Gulp，开发者可以自动化完成前端代码的测试、检查、合并、压缩、格式化、浏览器自动刷新、部署文件生成，并监听文件在改动后重复指定的这些步骤。

在 Gulp 中，每个功能都被视为一个任务，如压缩 CSS 的任务或合并文件的任务，这些任务被写在一个叫做 gulpfile.js 的文件中。这个文件用于配置所有任务，其中导出的任务被称为公开任务，可以通过 gulp 命令直接调用，Gulp 是一个强大的工具，可以大大提高前端开发的工作效率

## 2. Gulp 可以做什么

它是基于 Nodejs，自动化地完成 javascript、coffee、sass、less、html/image、css 等文件的测试、检查、合并、压缩、格式化、浏览器自动刷新、部署文件生成，并监听文件在改动后重复指定的这些步骤。

### 2.1 缺点

- 不支持 tree-shaking、热更新、代码分割等；
- gulp 对 js 模块化方案无能为力，只是对静态资源做流式处理，处理之后并未做有效的优化整合。

## 3. Gulp 安装

1. 必要环境：Node，npm, npx 这里就不在赘述如何安装
2. 安装 gulp：npm install --save-dev gulp

## 4. js 和 gulp

(1) 你可以使用 JavaScript 的知识来编写 gulpfile
(2) 可以使用转译语言编写 gulpfile
使用 TypeScript 则文件为 gulpfile.ts，然后安装 ts-node 模块
使用 Babel 则文件为 gulpfile.babel.js，然后安装 @babel/register 模块
(3) gulpfile 可以分割为多个文件，将每个任务拆开，然后再导入带 gulpfile 中，这可以避免单个文件非常的大。

## 5. 如何创建任务

gulp 任务都是异步 js 函数，接受错误回调，streams，promise，event emitter，子进程或可观察的函数（watch）,所以当你完成任务后需要返回的类型需要注意，这里给个简单的例子：

```gulpfile.js
const { src, dest } = require('gulp');

function streamTask() {
  return src('*.js')
  // 管道将 src 读取的文件Vinyl 对象的流传递给 dest()
    .pipe(dest('output'));
}

exports.default = streamTask;
```

要知道如何创建任务首先需要了解任务类型： gulp 的任务类型分为公共任务和私有任务，公共任务和私有任务的主要区别在于它们的可访问性和使用方式。

(1) 公共任务（Public Tasks）：

- 公共任务是从 gulpfile.js 文件中通过 exports 导出的任务。由于它们被导出，因此可以在命令行中直接通过 gulp 命令调用。
- 这些任务通常用于那些需要用户直接执行或作为构建过程的一部分经常调用的任务，如编译 SASS、压缩图片等。
- 公共任务的编写和导出使得它们对于使用 Gulp 的用户来说是可见的，并且可以通过简单的命令执行。

(2) 私有任务（Private Tasks）：

- 私有任务是在 gulpfile.js 中定义但未被直接导出的任务。它们通常作为 series()或 parallel()组合的组成部分，用于构建更复杂的任务流。
- 私有任务在外观和行为上与公共任务相同，但用户不能直接通过命令行调用它们。它们主要在内部被其他任务调用，以执行特定的构建步骤或操作。
- 私有任务的存在允许开发者将复杂的构建逻辑分解为更小、更易于管理的部分，并在需要时组合这些部分来创建更复杂的构建任务。

公共任务是那些可以从命令行直接调用的任务，而私有任务则是作为其他任务组成部分的内部任务，不能直接从命令行调用。这种区分使得开发者能够更灵活地组织和管理他们的构建过程，同时保持命令行接口的简洁和清晰。

```gulpfile.js
const { series } = require("gulp");

// 私有任务，没有导出
function clean(cb) {
  cb();
}

// 共有任务
function build(cb) {
  cb();
}

export.build = build;
// 可以理解为进行一系列的操作，不是并行的，按顺序执行
export.default = series(clean, build);
```

### 5.1 一些常用的 api

(1) series 串行执行  
(2) parallel 并行执行  
(3) src 读取文件  
(4) dest 写入文件  
(5) task 创建任务  
(6) watch 监听文件  
详细的 api 解释和更多请看[这里](https://gulpjs.com/docs/en/api/src)
