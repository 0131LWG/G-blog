import{_ as s,o as a,c as p,O as n}from"./chunks/framework.b9480850.js";const F=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"javascript/2022-05-25-build-optimize.md","filePath":"javascript/2022-05-25-build-optimize.md","lastUpdated":1683513669000}'),l={name:"javascript/2022-05-25-build-optimize.md"},e=n(`<ul><li><p>1、 查看打包后每个loader和plugin消耗时间 speed-measure-webpack-plugin</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> SpeedMeasurePlugin </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">speed-measure-webpack-plugin</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">chainWebpack</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">config</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">plugin</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">speed-measure-webpack-plugin</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">SpeedMeasurePlugin</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">end</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span></code></pre></div></li><li><p>2、 查看插件的大小体积 webpack-bundle-analyzer</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm install </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">save</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">dev webpack</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">bundle</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">analyzer</span></span></code></pre></div></li><li><p>3、&quot;report&quot;: &quot;vue-cli-service build --report&quot;,</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">在build目录下有一个report</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">html文件查看包的大小</span></span></code></pre></div></li><li><p>4、压缩js代码 terser-webpack-plugin</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">、移除空行、空格</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">、变量重设  变短</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">、移除console等</span></span></code></pre></div></li><li><p>5、 tree sharking import只引入有效的代码</p></li><li><p>6、cssnano css打包</p></li><li><p>7、使用loader可以设置 缩小查找文件范围，比如不包含 node-modules文件夹</p></li></ul>`,1),o=[e];function t(c,r,i,y,C,D){return a(),p("div",null,o)}const d=s(l,[["render",t]]);export{F as __pageData,d as default};
