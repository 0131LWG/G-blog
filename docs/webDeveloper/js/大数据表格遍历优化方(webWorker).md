# 大数据表格遍历优化方案（webWorker）

## 1. 背景

在 web 开发中，通常需要处理大量数据，例如表格数据。当数据量较大时，通常需要使用分页、排序等操作，这些操作需要耗费大量的时间，影响用户体验。为了解决这个问题，我们可以使用 webWorker 来优化表格数据的处理。而我的 table 需求是：
（1）表头由接口提供，表头中的字段有些需要前端进行统计，如省份、城市、地区等，里面的人口，上报数等这些字段需要通过接口获取数据，然后进行统计，而统计的方式就是通过村的汇总给镇以此类推，为了使数据统计等更加灵活适应其他的需求，我们在后端配置好计算函数（计算函数在表头会给）通过入参和浅拷贝的方式修改当前行的数据，这样也就导致了每个单元格的数据中如果由 render 字段则需要数据处理统计
（2）不能进行分页获取，因为要统计所有需要拿到所有数据，分页获取数据就无法统计了
（3）接口因为设计原因，只能拆开给予多个请求，不能合并请求，也就是先获取到所有的城市地区，然后根据城市地区的 id 去获取数据，并且数据是由多个接口获取的，也就是说一行数据需要同时获取多个接口的数据，获取后进行数据合并
（4）如果按全国的话则大约是 66 万行的数据（66 万村）
每个需求都会有所不同这里

## 2.方案思考

（1）首先我们请求和数据统计等需要使用 webWorker，因为密集型任务，主线程会阻塞
（2）因为数据是平铺的，如果一起遍历请求那么服务压力太大，所以需要将数组改为多维数组，然后通过一个村进行遍历请求，而且这样也方便后面的统计
（3）分步加载数据，一个村的数据放进去表格（这样就优化了要等很久才能看到数据的问题），然后统计给镇，以此类推
（3）数据量很大，则需要做虚拟表格，否则浏览器会崩溃渲染不了那么多的 dom

## 3.webWorker 是什么

webWorker 是 web 标准中新增的一个功能，允许我们创建一个独立于主线程的线程，用于执行一些计算密集型任务，以避免阻塞主线程。

## 4.webWorker 的使用

我的项目环境如下：vue3，webpack4.46.0，TS, qiankun 微前端，这个需要根据每个人的不同进行配置，不同的可 google 一下
（1）安装 worker-loader，进行配置 npm install worker-loader --save-dev

```vue.config.js
chainWebpack: (config) => {
    ...
    config.module
      .rule("worker-loader")
      .test(/\.worker\.js$/)
      .use("worker-loader")
      .loader("worker-loader")
      .options({
        inline: "fallback", // 这里如果是微前端是需要配置内联的，因为微前端是不同的端口，而webWorker是需要同源
      })
      .end();
```

(2)编写 worker.ts
(3)引入 worker.ts 进行使用

```ts
// 注意：这是坑， 如果使用内联，需要配置inline=no-fallback，这在文档中没有提及，可以看github的issue
// https://github.com/webpack-contrib/worker-loader/issues/282
// https://github.com/webarkit/ARnft/pull/167
import Worker from "worker-loader?inline=no-fallback!./worker"

// 创建worker
const worker = ref(new Worker())
// 然后就是监听
worker.value.onmessage
// 发起消息
worker.value.postMessage
// 具体可以看下官方文档，这里就不赘述了
```

(4)添加 worker.d.ts，保证类型正确

```ts
declare module "worker-loader*" {
  // You need to change `Worker`, if you specified a different value for the `workerType` option
  class WebpackWorker extends Worker {
    constructor()
  }

  // Uncomment this if you set the `esModule` option to `false`
  // export = WebpackWorker;
  export default WebpackWorker
}
```

## table 的选择

使用的是[vxetable](https://vxetable.cn/#/grid/api)中的 grid
原因：因为原本使用的就是 vxetable，并且通过之需要通过配置即可完成虚拟表格和导出表格等，满足功能需求，这个部分可自行选择

## 结语

此篇文章主要是提供思路，和说一下 webWorker 的坑，业务每个人都会不一样，则不在赘述，通过使用 webWorker 和虚拟表格技术，我们成功地解决了大数据表格遍历优化的问题。在实际应用中，这种方法可以显著提高用户体验，减少页面加载时间。同时，我们也需要注意 webWorker 的使用场景和限制，避免滥用导致其他问题。至此，我们已经完成了大数据表格遍历优化方案的设计与实现。希望这个方案能对大家有所启发，帮助大家更好地处理大数据问题，提高应用的性能和用户体验。
