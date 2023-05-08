import{_ as a,o as s,c as n,b as e}from"./app.f4aabbaf.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"查看所有端口占用情况","slug":"查看所有端口占用情况","link":"#查看所有端口占用情况","children":[]},{"level":2,"title":"rabbitmq port 15672端口无法访问","slug":"rabbitmq-port-15672端口无法访问","link":"#rabbitmq-port-15672端口无法访问","children":[]},{"level":2,"title":"linux 防火墙最强使用指南","slug":"linux-防火墙最强使用指南","link":"#linux-防火墙最强使用指南","children":[]},{"level":2,"title":".net core 下使用消息队列","slug":"net-core-下使用消息队列","link":"#net-core-下使用消息队列","children":[]},{"level":2,"title":"rabbitmq 种类","slug":"rabbitmq-种类","link":"#rabbitmq-种类","children":[]},{"level":2,"title":"消息丢失","slug":"消息丢失","link":"#消息丢失","children":[]},{"level":2,"title":"消息的顺序性","slug":"消息的顺序性","link":"#消息的顺序性","children":[]},{"level":2,"title":"消息的重复消费","slug":"消息的重复消费","link":"#消息的重复消费","children":[]},{"level":2,"title":"rabbit 集群搭建","slug":"rabbit-集群搭建","link":"#rabbit-集群搭建","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"relativePath":"javascript/2022-12-12-rabbitmq.md","lastUpdated":1683547689000}'),l={name:"javascript/2022-12-12-rabbitmq.md"},t=e(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">docker search rabbitmq</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">docker pull rabbitmq</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">docker run -itd --rm --name rabbitmq -e RABBITMQ_DEFAULT_USER=admin -e RABBITMQ_DEFAULT_PASS=admin -p 15672:15672 -p 5672:5672 rabbitmq</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 15672进入rabbitmq数据管理后台的</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 5672是通过代码接口访问队列的</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 宿主机器安装目录</span></span>
<span class="line"><span style="color:#A6ACCD;">cd /etc/rabbitmq</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="查看所有端口占用情况" tabindex="-1">查看所有端口占用情况 <a class="header-anchor" href="#查看所有端口占用情况" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 查看所有端口占用情况</span></span>
<span class="line"><span style="color:#A6ACCD;">netstat -ntulp</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">netstat -ntulp |grep 3306</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 查看某个应用使用情况</span></span>
<span class="line"><span style="color:#A6ACCD;">ps -ef | grep nginx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 找到某个端口后</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="rabbitmq-port-15672端口无法访问" tabindex="-1">rabbitmq port 15672端口无法访问 <a class="header-anchor" href="#rabbitmq-port-15672端口无法访问" aria-hidden="true">#</a></h2><ul><li><a href="https://blog.csdn.net/web18334137065/article/details/126327427" target="_blank" rel="noreferrer">https://blog.csdn.net/web18334137065/article/details/126327427</a></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">docker exec -it rabbitmq bash</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 进入容器启用插件</span></span>
<span class="line"><span style="color:#A6ACCD;">rabbitmq-plugins enable rabbitmq_management</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="linux-防火墙最强使用指南" tabindex="-1">linux 防火墙最强使用指南 <a class="header-anchor" href="#linux-防火墙最强使用指南" aria-hidden="true">#</a></h2><ul><li><a href="https://blog.csdn.net/wufaqidong1/article/details/126612203" target="_blank" rel="noreferrer">https://blog.csdn.net/wufaqidong1/article/details/126612203</a></li></ul><h2 id="net-core-下使用消息队列" tabindex="-1">.net core 下使用消息队列 <a class="header-anchor" href="#net-core-下使用消息队列" aria-hidden="true">#</a></h2><ul><li><a href="https://blog.csdn.net/qq_38284923/article/details/119675498" target="_blank" rel="noreferrer">https://blog.csdn.net/qq_38284923/article/details/119675498</a></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">pkill docker </span></span>
<span class="line"><span style="color:#A6ACCD;">iptables -t nat -F </span></span>
<span class="line"><span style="color:#A6ACCD;">ifconfig docker0 down </span></span>
<span class="line"><span style="color:#A6ACCD;">brctl delbr docker0 </span></span>
<span class="line"><span style="color:#A6ACCD;">docker -d </span></span>
<span class="line"><span style="color:#A6ACCD;">service docker restart</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="rabbitmq-种类" tabindex="-1">rabbitmq 种类 <a class="header-anchor" href="#rabbitmq-种类" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="消息丢失" tabindex="-1">消息丢失 <a class="header-anchor" href="#消息丢失" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">// 生成者生产消息的 确认机制</span></span>
<span class="line"><span style="color:#A6ACCD;">// 开启消息队列的持久化数据： rabbitmq重启后所有队列和消息都会消失</span></span>
<span class="line"><span style="color:#A6ACCD;">// 消费者ack确认消息消费成功： ack可自动确认消息，也可以进行手动确认消息的消费</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="消息的顺序性" tabindex="-1">消息的顺序性 <a class="header-anchor" href="#消息的顺序性" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">// 对于需要消费保证顺序的，只需要部署一个消费者实例，即可保证消费消息的顺序性，再开启手动的ack确认机制</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 多个消费者实例是无法保证消费消息的有序性的</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="消息的重复消费" tabindex="-1">消息的重复消费 <a class="header-anchor" href="#消息的重复消费" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">// 确保消息只执行一次，   幂等等操作（mysql的唯一键约束、通过redis对消费的消息进行记录、消费执行前进行redis查询确认、）</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="rabbit-集群搭建" tabindex="-1">rabbit 集群搭建 <a class="header-anchor" href="#rabbit-集群搭建" aria-hidden="true">#</a></h2><ul><li><a href="https://mp.weixin.qq.com/s/j0fMHzz4yKbfCilWymQb2g" target="_blank" rel="noreferrer">https://mp.weixin.qq.com/s/j0fMHzz4yKbfCilWymQb2g</a></li></ul><h2 id="参考文章" tabindex="-1">参考文章 <a class="header-anchor" href="#参考文章" aria-hidden="true">#</a></h2><ul><li><a href="https://juejin.cn/post/7132268340541653005#heading-34" target="_blank" rel="noreferrer">https://juejin.cn/post/7132268340541653005#heading-34</a></li></ul>`,23),p=[t];function i(r,c,o,d,C,b){return s(),n("div",null,p)}const u=a(l,[["render",i]]);export{A as __pageData,u as default};
