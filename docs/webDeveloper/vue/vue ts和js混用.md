# vue-cli ts 和 js 混用

## 操作

## 报错

```
  ./src/main.ts in multi (webpack)-dev-server/client?http://172.18.1.102:9909&sockPath=/sockjs-node (webpack)/hot/dev-server.js ./src/main.ts
```

原因：webpack.config.js 中的 entry 中的 main.ts 文件，但是因为混用 ts 和 js，main 写为 main.js 文件，导致报错
解决：将 main.ts 改为 main.js

```
pages: {
  index: {
    entry: "src/main.js",
    template: "public/index.html",
    filename: "index.html"
  }
}
```
