import{_ as e,o as l,c as a,O as t}from"./chunks/framework.fb7bb97b.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"aehyok/daily/2022-09.md","filePath":"aehyok/daily/2022-09.md","lastUpdated":1684202565000}'),r={name:"aehyok/daily/2022-09.md"},n=t(`<h2 id="_9月30日" tabindex="-1">9月30日 <a class="header-anchor" href="#_9月30日" aria-label="Permalink to &quot;9月30日&quot;">​</a></h2><ul><li>nginx 路由跳转 <ul><li><a href="https://juejin.cn/post/6844903479463378951" target="_blank" rel="noreferrer">https://juejin.cn/post/6844903479463378951</a></li></ul></li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// https://aehyok.com/wechat/miniprogram/company?id=xxx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// https://aehyok.com/app/#/ffp-app/company?cid=xxx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    location </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">wechat</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">miniprogram</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">company </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">302</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">/</span><span style="color:#F07178;">#</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">ffp</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">company</span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;">cid</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">$arg_id</span><span style="color:#F07178;">;</span></span>
<span class="line"><span style="color:#F07178;">    }</span></span></code></pre></div><h2 id="_9月28日" tabindex="-1">9月28日 <a class="header-anchor" href="#_9月28日" aria-label="Permalink to &quot;9月28日&quot;">​</a></h2><ul><li>typescript 中使用require.context <ul><li><a href="http://www.javashuo.com/article/p-hxyrulyc-ny.html" target="_blank" rel="noreferrer">http://www.javashuo.com/article/p-hxyrulyc-ny.html</a></li></ul></li><li>图片压缩 <ul><li><a href="https://github.com/fengyuanchen/compressorjs" target="_blank" rel="noreferrer">https://github.com/fengyuanchen/compressorjs</a></li></ul></li></ul><h2 id="_9月26日" tabindex="-1">9月26日 <a class="header-anchor" href="#_9月26日" aria-label="Permalink to &quot;9月26日&quot;">​</a></h2><ul><li>canvas 电子签名 <ul><li><a href="https://juejin.cn/post/7146598432285655054" target="_blank" rel="noreferrer">https://juejin.cn/post/7146598432285655054</a></li></ul></li></ul><h2 id="_9月24日" tabindex="-1">9月24日 <a class="header-anchor" href="#_9月24日" aria-label="Permalink to &quot;9月24日&quot;">​</a></h2><ul><li>window.navigator 包含浏览器应用程序的相关信息 <ul><li><a href="https://juejin.cn/post/6844904142163427341" target="_blank" rel="noreferrer">https://juejin.cn/post/6844904142163427341</a></li><li>判断浏览器环境</li></ul></li><li>地理坐标拾取 <ul><li><a href="https://tool.lu/coordinate/" target="_blank" rel="noreferrer">https://tool.lu/coordinate/</a></li></ul></li></ul><h2 id="_9月23日" tabindex="-1">9月23日 <a class="header-anchor" href="#_9月23日" aria-label="Permalink to &quot;9月23日&quot;">​</a></h2><ul><li>cookie <ul><li><a href="https://juejin.cn/post/6926807331602694152" target="_blank" rel="noreferrer">https://juejin.cn/post/6926807331602694152</a></li></ul></li><li>charles 代理设置 <ul><li><a href="https://juejin.cn/post/7141225075155435551" target="_blank" rel="noreferrer">https://juejin.cn/post/7141225075155435551</a></li></ul></li></ul><h2 id="_9月21日" tabindex="-1">9月21日 <a class="header-anchor" href="#_9月21日" aria-label="Permalink to &quot;9月21日&quot;">​</a></h2><ul><li>列出远程nodejs版本列表<div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">nvm list available</span></span></code></pre></div></li><li>nvm下的nodejs不能使用npm 命令的解决方案 <ul><li><a href="https://juejin.cn/post/6844904037444386823" target="_blank" rel="noreferrer">https://juejin.cn/post/6844904037444386823</a></li></ul></li></ul><h2 id="_9月19日" tabindex="-1">9月19日 <a class="header-anchor" href="#_9月19日" aria-label="Permalink to &quot;9月19日&quot;">​</a></h2><ul><li>微信公众号发起地图导航功能 <ul><li><a href="https://www.gxlsystem.com/qianduan-17932.html" target="_blank" rel="noreferrer">https://www.gxlsystem.com/qianduan-17932.html</a></li></ul></li></ul><h2 id="_9月18日" tabindex="-1">9月18日 <a class="header-anchor" href="#_9月18日" aria-label="Permalink to &quot;9月18日&quot;">​</a></h2><ul><li>抓包 <ul><li><a href="https://juejin.cn/post/7140040425129115684" target="_blank" rel="noreferrer">https://juejin.cn/post/7140040425129115684</a></li></ul></li><li>headless 组件 <ul><li><a href="https://juejin.cn/post/6955419663689842724" target="_blank" rel="noreferrer">https://juejin.cn/post/6955419663689842724</a></li></ul></li><li>vue-router 实现原理 <ul><li>？？？？？？？</li></ul></li></ul><h2 id="_9月17日" tabindex="-1">9月17日 <a class="header-anchor" href="#_9月17日" aria-label="Permalink to &quot;9月17日&quot;">​</a></h2><ul><li>新时代布局新特性 <ul><li><a href="https://www.cnblogs.com/coco1s/p/16692057.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/coco1s/p/16692057.html</a></li></ul></li></ul><h2 id="_9月16日" tabindex="-1">9月16日 <a class="header-anchor" href="#_9月16日" aria-label="Permalink to &quot;9月16日&quot;">​</a></h2><ul><li>lodash 工具函数 <ul><li><a href="https://juejin.cn/post/7143579596217122853" target="_blank" rel="noreferrer">https://juejin.cn/post/7143579596217122853</a></li></ul></li><li>正则表达式中的与或 <ul><li><a href="https://juejin.cn/post/6844903758942453768" target="_blank" rel="noreferrer">https://juejin.cn/post/6844903758942453768</a></li></ul></li></ul><h2 id="_9月13日" tabindex="-1">9月13日 <a class="header-anchor" href="#_9月13日" aria-label="Permalink to &quot;9月13日&quot;">​</a></h2><ul><li>astro 框架定位 <ul><li><a href="https://juejin.cn/post/7131928500373553160" target="_blank" rel="noreferrer">https://juejin.cn/post/7131928500373553160</a></li></ul></li></ul><h2 id="_9月12日" tabindex="-1">9月12日 <a class="header-anchor" href="#_9月12日" aria-label="Permalink to &quot;9月12日&quot;">​</a></h2><ul><li>实用网站总结 <ul><li><a href="https://juejin.cn/post/7129412947931037732" target="_blank" rel="noreferrer">https://juejin.cn/post/7129412947931037732</a></li></ul></li></ul><h2 id="_9月11日" tabindex="-1">9月11日 <a class="header-anchor" href="#_9月11日" aria-label="Permalink to &quot;9月11日&quot;">​</a></h2><ul><li>taro 3+ vue3 自动登录判断 <ul><li><a href="https://juejin.cn/post/7051828074362437663" target="_blank" rel="noreferrer">https://juejin.cn/post/7051828074362437663</a></li></ul></li></ul><h2 id="_9月9日" tabindex="-1">9月9日 <a class="header-anchor" href="#_9月9日" aria-label="Permalink to &quot;9月9日&quot;">​</a></h2><ul><li>git rebase 合并代码 <ul><li><a href="https://juejin.cn/post/7135261815935598600" target="_blank" rel="noreferrer">https://juejin.cn/post/7135261815935598600</a></li></ul></li><li>solid 性能很好 <ul><li><a href="https://juejin.cn/post/7140643826162466853" target="_blank" rel="noreferrer">https://juejin.cn/post/7140643826162466853</a></li></ul></li></ul><h2 id="_9月8日" tabindex="-1">9月8日 <a class="header-anchor" href="#_9月8日" aria-label="Permalink to &quot;9月8日&quot;">​</a></h2><ul><li>微信小程序百度地图 <ul><li><a href="https://lbsyun.baidu.com/index.php?title=wxjsapi/guide/getpoi" target="_blank" rel="noreferrer">https://lbsyun.baidu.com/index.php?title=wxjsapi/guide/getpoi</a></li></ul></li></ul><h2 id="_9月7日" tabindex="-1">9月7日 <a class="header-anchor" href="#_9月7日" aria-label="Permalink to &quot;9月7日&quot;">​</a></h2><ul><li>函数式编程 <ul><li><a href="https://juejin.cn/post/6844903936378273799" target="_blank" rel="noreferrer">https://juejin.cn/post/6844903936378273799</a></li></ul></li></ul><h2 id="_9月5日" tabindex="-1">9月5日 <a class="header-anchor" href="#_9月5日" aria-label="Permalink to &quot;9月5日&quot;">​</a></h2><ul><li>git modules <ul><li><a href="https://juejin.cn/post/7107107417946587149" target="_blank" rel="noreferrer">https://juejin.cn/post/7107107417946587149</a></li></ul></li><li>微服务 <ul><li><a href="https://juejin.cn/post/7139752600882118687" target="_blank" rel="noreferrer">https://juejin.cn/post/7139752600882118687</a></li></ul></li><li>mitt <ul><li><a href="https://github.com/developit/mitt" target="_blank" rel="noreferrer">https://github.com/developit/mitt</a></li></ul></li><li>正则表达式 <ul><li><a href="https://regex101.com/r/PnzZ4k/1" target="_blank" rel="noreferrer">https://regex101.com/r/PnzZ4k/1</a></li><li><a href="https://regexper.com" target="_blank" rel="noreferrer">https://regexper.com</a></li><li><a href="http://www.jsons.cn/reg/" target="_blank" rel="noreferrer">http://www.jsons.cn/reg/</a></li><li><a href="https://c.runoob.com/front-end/854/" target="_blank" rel="noreferrer">https://c.runoob.com/front-end/854/</a></li><li><a href="https://juejin.cn/post/7070408757594816542#heading-12" target="_blank" rel="noreferrer">https://juejin.cn/post/7070408757594816542#heading-12</a></li><li>str.match <a href="https://juejin.cn/post/6844903721596370957" target="_blank" rel="noreferrer">https://juejin.cn/post/6844903721596370957</a></li><li>身份证正则解析 <a href="https://juejin.cn/post/6844903575877861390" target="_blank" rel="noreferrer">https://juejin.cn/post/6844903575877861390</a></li></ul></li></ul><h2 id="_9月3日" tabindex="-1">9月3日 <a class="header-anchor" href="#_9月3日" aria-label="Permalink to &quot;9月3日&quot;">​</a></h2><ul><li>带取消功能的延迟函数 axios 取消请求 <ul><li><a href="https://juejin.cn/post/7042461373904715812" target="_blank" rel="noreferrer">https://juejin.cn/post/7042461373904715812</a></li><li><a href="https://juejin.cn/post/7111237605793988638" target="_blank" rel="noreferrer">https://juejin.cn/post/7111237605793988638</a></li><li><a href="https://juejin.cn/post/6974902702400602148" target="_blank" rel="noreferrer">https://juejin.cn/post/6974902702400602148</a></li></ul></li><li>数值类型转换 parseInt, parseFloat Number <ul><li><a href="https://juejin.cn/post/6844904145514659847" target="_blank" rel="noreferrer">https://juejin.cn/post/6844904145514659847</a></li></ul></li></ul><h2 id="_9月2日" tabindex="-1">9月2日 <a class="header-anchor" href="#_9月2日" aria-label="Permalink to &quot;9月2日&quot;">​</a></h2><ul><li>mysql查看版本的几种类型 <ul><li><a href="https://juejin.cn/post/6934595230712725511" target="_blank" rel="noreferrer">https://juejin.cn/post/6934595230712725511</a></li></ul></li><li>mysql json类型 <ul><li><a href="https://www.cnblogs.com/kirin365/p/16350025.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/kirin365/p/16350025.html</a></li></ul></li><li>.net core 微服务 <ul><li><a href="https://www.cnblogs.com/kklldog/p/netcore-with-microservices-02.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/kklldog/p/netcore-with-microservices-02.html</a></li></ul></li><li>AOP <ul><li><a href="https://www.cnblogs.com/zhugenqiang/archive/2008/07/27/1252761.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/zhugenqiang/archive/2008/07/27/1252761.html</a></li></ul></li><li>URLSearchParams <ul><li><a href="https://juejin.cn/post/6844903975628570632" target="_blank" rel="noreferrer">https://juejin.cn/post/6844903975628570632</a></li></ul></li><li>redis 安装使用 <ul><li><a href="https://juejin.cn/post/7138754260564443172?share_token=c51de5a9-5e84-4240-959a-3eb44ce97ab3" target="_blank" rel="noreferrer">https://juejin.cn/post/7138754260564443172?share_token=c51de5a9-5e84-4240-959a-3eb44ce97ab3</a></li></ul></li></ul><h2 id="_9月1日" tabindex="-1">9月1日 <a class="header-anchor" href="#_9月1日" aria-label="Permalink to &quot;9月1日&quot;">​</a></h2><ul><li>.NET CORE + Vue3 <ul><li><a href="https://www.cnblogs.com/jackyfei/p/16638326.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/jackyfei/p/16638326.html</a></li></ul></li><li>微信小程序 webview <ul><li>分享页面</li><li><a href="https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html" target="_blank" rel="noreferrer">https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html</a></li><li>用户分享时可获取当前web-view的URL，即在onShareAppMessage回调中返回webViewUrl参数。</li></ul></li></ul>`,41),i=[n];function s(o,p,h,c,u,f){return l(),a("div",null,i)}const b=e(r,[["render",s]]);export{d as __pageData,b as default};