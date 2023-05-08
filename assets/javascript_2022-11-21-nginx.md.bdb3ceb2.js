import{_ as a,o as n,c as s,O as e}from"./chunks/framework.b9480850.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"javascript/2022-11-21-nginx.md","filePath":"javascript/2022-11-21-nginx.md","lastUpdated":1683513669000}'),l={name:"javascript/2022-11-21-nginx.md"},t=e(`<h2 id="查看nginx-安装目录" tabindex="-1">查看nginx 安装目录 <a class="header-anchor" href="#查看nginx-安装目录" aria-label="Permalink to &quot;查看nginx 安装目录&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">find / -name nginx.conf</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// etc/nginx</span></span>
<span class="line"><span style="color:#A6ACCD;">// 或者</span></span>
<span class="line"><span style="color:#A6ACCD;">// usr/local/nginx</span></span></code></pre></div><h2 id="设置nginx-浏览器缓存配置" tabindex="-1">设置Nginx 浏览器缓存配置 <a class="header-anchor" href="#设置nginx-浏览器缓存配置" aria-label="Permalink to &quot;设置Nginx 浏览器缓存配置&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">location /MP{</span></span>
<span class="line"><span style="color:#A6ACCD;">        alias /usr/local/sunlight/dvs/dvs-ui/mp/;</span></span>
<span class="line"><span style="color:#A6ACCD;">        index index.html;</span></span>
<span class="line"><span style="color:#A6ACCD;">        add_header Cache-Control no-cache;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span></code></pre></div><ul><li>no-cache 每次都到服务器校验新鲜度</li><li>no-store 永远去服务器获取资源</li></ul>`,5),o=[t];function i(c,p,r,d,_,h){return n(),s("div",null,o)}const A=a(l,[["render",i]]);export{g as __pageData,A as default};
