import{_ as e,o,c as a,O as t}from"./chunks/framework.b9480850.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"javascript/2023-01-09-ocelot.md","filePath":"javascript/2023-01-09-ocelot.md","lastUpdated":1683513669000}'),l={name:"javascript/2023-01-09-ocelot.md"},s=t(`<h2 id="ocelot-使用说明详解" tabindex="-1">ocelot 使用说明详解 <a class="header-anchor" href="#ocelot-使用说明详解" aria-label="Permalink to &quot;ocelot 使用说明详解&quot;">​</a></h2><ul><li><a href="https://www.cnblogs.com/jesse2013/p/net-core-apigateway-ocelot-docs.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/jesse2013/p/net-core-apigateway-ocelot-docs.html</a></li></ul><h2 id="ocelot-demo" tabindex="-1">ocelot demo <a class="header-anchor" href="#ocelot-demo" aria-label="Permalink to &quot;ocelot demo&quot;">​</a></h2><ul><li><a href="https://www.c-sharpcorner.com/blogs/api-gateway-in-net-60-using-ocelot" target="_blank" rel="noreferrer">https://www.c-sharpcorner.com/blogs/api-gateway-in-net-60-using-ocelot</a></li></ul><p><a href="https://www.cnblogs.com/jesse2013/p/net-core-apigateway-ocelot-docs.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/jesse2013/p/net-core-apigateway-ocelot-docs.html</a></p><h2 id="nginx-配置三个ocelot节点" tabindex="-1">nginx 配置三个ocelot节点 <a class="header-anchor" href="#nginx-配置三个ocelot节点" aria-label="Permalink to &quot;nginx 配置三个ocelot节点&quot;">​</a></h2><ul><li>这三个ocelot节点可以加入到consul中，并添加健康检查的接口，供consul进行服务注册和健康检查</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">server {</span></span>
<span class="line"><span style="color:#A6ACCD;">  listen 8500;</span></span>
<span class="line"><span style="color:#A6ACCD;">  location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">    proxy_pass http://xdpconsul;</span></span>
<span class="line"><span style="color:#A6ACCD;">    proxy_redirect default;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">upstream xdpconsul {</span></span>
<span class="line"><span style="color:#A6ACCD;">  server 116.204.98.9:5003;</span></span>
<span class="line"><span style="color:#A6ACCD;">  server 116.204.98.9:5030;</span></span>
<span class="line"><span style="color:#A6ACCD;">  server 116.204.98.9:5300;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h2 id="然后在ocelot-json-配置真正的接口服务器" tabindex="-1">然后在ocelot.json 配置真正的接口服务器 <a class="header-anchor" href="#然后在ocelot-json-配置真正的接口服务器" aria-label="Permalink to &quot;然后在ocelot.json 配置真正的接口服务器&quot;">​</a></h2><ul><li>这里部署节点</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="ocelot和consul-结合使用" tabindex="-1">ocelot和consul 结合使用 <a class="header-anchor" href="#ocelot和consul-结合使用" aria-label="Permalink to &quot;ocelot和consul 结合使用&quot;">​</a></h2><ul><li><a href="https://www.cnblogs.com/axzxs2001/p/8487521.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/axzxs2001/p/8487521.html</a></li><li>ocelot中配置consul的配置服务发现 <a href="https://www.cnblogs.com/edisonchou/p/consul_cluster_based_on_docker_introduction.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/edisonchou/p/consul_cluster_based_on_docker_introduction.html</a></li></ul><h2 id="ocelot官方文档" tabindex="-1">ocelot官方文档 <a class="header-anchor" href="#ocelot官方文档" aria-label="Permalink to &quot;ocelot官方文档&quot;">​</a></h2><ul><li><a href="https://ocelot.readthedocs.io/en/latest/introduction/notsupported.html" target="_blank" rel="noreferrer">https://ocelot.readthedocs.io/en/latest/introduction/notsupported.html</a></li></ul><h2 id="ocelot-动态路由-dynamic-routing" tabindex="-1">ocelot 动态路由 dynamic routing <a class="header-anchor" href="#ocelot-动态路由-dynamic-routing" aria-label="Permalink to &quot;ocelot 动态路由 dynamic routing&quot;">​</a></h2><ul><li><a href="https://www.cnblogs.com/irocker/p/ocelot-servicediscovery.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/irocker/p/ocelot-servicediscovery.html</a></li></ul><h2 id="docker-dotnet" tabindex="-1">docker dotnet <a class="header-anchor" href="#docker-dotnet" aria-label="Permalink to &quot;docker dotnet&quot;">​</a></h2><ul><li><a href="https://learn.microsoft.com/zh-cn/dotnet/core/docker/build-container?source=recommendations&amp;tabs=linux" target="_blank" rel="noreferrer">https://learn.microsoft.com/zh-cn/dotnet/core/docker/build-container?source=recommendations&amp;tabs=linux</a></li></ul>`,19),n=[s];function c(r,i,p,d,h,u){return o(),a("div",null,n)}const b=e(l,[["render",c]]);export{_ as __pageData,b as default};
