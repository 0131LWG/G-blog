import{_ as a,o as s,c as n,b as l}from"./app.f4aabbaf.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"linux","slug":"linux","link":"#linux","children":[]},{"level":2,"title":"设置mariadb源","slug":"设置mariadb源","link":"#设置mariadb源","children":[]},{"level":2,"title":"mariadb","slug":"mariadb","link":"#mariadb","children":[]},{"level":2,"title":"可能会乱码设置","slug":"可能会乱码设置","link":"#可能会乱码设置","children":[]}],"relativePath":"javascript/2023-02-13-linux-mariadb.md","lastUpdated":1683547689000}'),e={name:"javascript/2023-02-13-linux-mariadb.md"},p=l(`<h2 id="linux" tabindex="-1">linux <a class="header-anchor" href="#linux" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">ip 用户名 密码</span></span>
<span class="line"><span style="color:#A6ACCD;">175.178.60.76 root  Hk</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="设置mariadb源" tabindex="-1">设置mariadb源 <a class="header-anchor" href="#设置mariadb源" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">cd /etc/yum.repos.d</span></span>
<span class="line"><span style="color:#A6ACCD;">vim Mariadb.repo</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[mariadb]</span></span>
<span class="line"><span style="color:#A6ACCD;">name = MariaDB</span></span>
<span class="line"><span style="color:#A6ACCD;">baseurl = https://mirrors.aliyun.com/mariadb/yum/10.4/centos7-amd64</span></span>
<span class="line"><span style="color:#A6ACCD;">gpgkey = https://mirrors.aliyun.com/mariadb/yum/RPM-GPG-KEY-MariaDB</span></span>
<span class="line"><span style="color:#A6ACCD;">gpgcheck = 1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="mariadb" tabindex="-1">mariadb <a class="header-anchor" href="#mariadb" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">yum install MariaDB-server</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl enable mariadb</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl start mariadb</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 设置密码 M9</span></span>
<span class="line"><span style="color:#A6ACCD;">mysql_secure_installation</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="可能会乱码设置" tabindex="-1">可能会乱码设置 <a class="header-anchor" href="#可能会乱码设置" aria-hidden="true">#</a></h2><ul><li><a href="https://juejin.cn/post/7096757877909487629" target="_blank" rel="noreferrer">https://juejin.cn/post/7096757877909487629</a></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">utf8mb4</span></span>
<span class="line"><span style="color:#A6ACCD;">utf8mb4_unicode_ci</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,9),i=[p];function t(c,r,o,d,C,A){return s(),n("div",null,i)}const u=a(e,[["render",t]]);export{m as __pageData,u as default};
