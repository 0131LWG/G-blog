import{_ as a,o as s,c as n,O as e}from"./chunks/framework.b9480850.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"javascript/2022-11-28-正则.md","filePath":"javascript/2022-11-28-正则.md","lastUpdated":1683513669000}'),l={name:"javascript/2022-11-28-正则.md"},t=e(`<h2 id="手机号正则" tabindex="-1">手机号正则 <a class="header-anchor" href="#手机号正则" aria-label="Permalink to &quot;手机号正则&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 只要是1开头，并且是11位的数字</span></span>
<span class="line"><span style="color:#A6ACCD;">/^1\\d{10}$/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 只要是13,14,15,16,17,18,19开头即可</span></span>
<span class="line"><span style="color:#A6ACCD;">/^1[3-9]\\d{9}$/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//  11位或13位   还是 11位到13位，还是1到13位</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 13位数字或者11位数字</span></span>
<span class="line"><span style="color:#A6ACCD;">^\\d{13}$|^\\d{11}$</span></span></code></pre></div><h2 id="身份证校验规则" tabindex="-1">身份证校验规则 <a class="header-anchor" href="#身份证校验规则" aria-label="Permalink to &quot;身份证校验规则&quot;">​</a></h2><p><a href="https://uutool.cn/id-card/" target="_blank" rel="noreferrer">https://uutool.cn/id-card/</a></p><h2 id="匹配中文" tabindex="-1">匹配中文 <a class="header-anchor" href="#匹配中文" aria-label="Permalink to &quot;匹配中文&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">[u4e00-u9fa5]</span></span></code></pre></div><h2 id="常用正则" tabindex="-1">常用正则 <a class="header-anchor" href="#常用正则" aria-label="Permalink to &quot;常用正则&quot;">​</a></h2><ul><li><a href="https://juejin.cn/post/7025490351032893476#heading-7" target="_blank" rel="noreferrer">https://juejin.cn/post/7025490351032893476#heading-7</a></li></ul>`,8),o=[t];function p(r,c,i,d,h,_){return s(),n("div",null,o)}const A=a(l,[["render",p]]);export{C as __pageData,A as default};
