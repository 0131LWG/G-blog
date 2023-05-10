import{_ as a,o as s,c as e,O as t}from"./chunks/framework.fb7bb97b.js";const q=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"aehyok/javascript/2023-01-11-docker-sqlserver.md","filePath":"aehyok/javascript/2023-01-11-docker-sqlserver.md","lastUpdated":1683685146000}'),o={name:"aehyok/javascript/2023-01-11-docker-sqlserver.md"},l=t(`<ul><li><a href="https://learn.microsoft.com/zh-cn/sql/linux/quickstart-install-connect-docker?view=sql-server-ver16&amp;pivots=cs1-bash" target="_blank" rel="noreferrer">https://learn.microsoft.com/zh-cn/sql/linux/quickstart-install-connect-docker?view=sql-server-ver16&amp;pivots=cs1-bash</a></li></ul><h2 id="查找镜像" tabindex="-1">查找镜像 <a class="header-anchor" href="#查找镜像" aria-label="Permalink to &quot;查找镜像&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">docker search mcr.microsoft.com/mssql/server</span></span></code></pre></div><h2 id="生成容器并运行" tabindex="-1">生成容器并运行 <a class="header-anchor" href="#生成容器并运行" aria-label="Permalink to &quot;生成容器并运行&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">sudo docker run -e &quot;ACCEPT_EULA=Y&quot; -e &quot;MSSQL_SA_PASSWORD=M9y2512!&quot; \\</span></span>
<span class="line"><span style="color:#A6ACCD;">   -p 1433:1433 --name sql1 --hostname sql1 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">   -d \\</span></span>
<span class="line"><span style="color:#A6ACCD;">   mcr.microsoft.com/mssql/server</span></span></code></pre></div><h2 id="进入容器" tabindex="-1">进入容器 <a class="header-anchor" href="#进入容器" aria-label="Permalink to &quot;进入容器&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">sudo docker exec -it sql1 &quot;bash&quot;</span></span></code></pre></div><h2 id="执行链接" tabindex="-1">执行链接 <a class="header-anchor" href="#执行链接" aria-label="Permalink to &quot;执行链接&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">/opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P &quot;XXXXXXX&quot;</span></span></code></pre></div>`,9),n=[l];function r(c,i,p,d,h,u){return s(),e("div",null,n)}const _=a(o,[["render",r]]);export{q as __pageData,_ as default};
