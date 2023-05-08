import{_ as s,o as a,c as n,O as l}from"./chunks/framework.b9480850.js";const D=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"javascript/2022-10-26-redis.md","filePath":"javascript/2022-10-26-redis.md","lastUpdated":1683513669000}'),p={name:"javascript/2022-10-26-redis.md"},e=l(`<h2 id="官网地址和中文地址" tabindex="-1">官网地址和中文地址 <a class="header-anchor" href="#官网地址和中文地址" aria-label="Permalink to &quot;官网地址和中文地址&quot;">​</a></h2><ul><li><p>中文地址 <a href="http://www.redis.cn/" target="_blank" rel="noreferrer">http://www.redis.cn/</a></p></li><li><p>Keys * 尽量不用</p><ul><li><a href="https://www.cnblogs.com/jackson0714/p/redis_transaction.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/jackson0714/p/redis_transaction.html</a></li></ul></li><li><p>list和set</p><ul><li><a href="https://www.cnblogs.com/yangxu-pro/p/10309415.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/yangxu-pro/p/10309415.html</a></li></ul></li><li><p>简单安装 启动 连接 配置 使用</p><ul><li><a href="https://juejin.cn/post/6979019298543140901#heading-5" target="_blank" rel="noreferrer">https://juejin.cn/post/6979019298543140901#heading-5</a></li></ul></li><li><p>查看版本</p></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">redis-server - v</span></span>
<span class="line"><span style="color:#A6ACCD;">redis-server --version</span></span></code></pre></div><ul><li>查看redis运行的进程</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">ps -aux | grep redis</span></span>
<span class="line"><span style="color:#A6ACCD;">ps -ef|grep redis</span></span>
<span class="line"><span style="color:#A6ACCD;">可以看到redis安装的目录</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">linux中直接使用（-p） pid</span></span>
<span class="line"><span style="color:#A6ACCD;">top -p 954</span></span></code></pre></div><ul><li>启动</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">redis-server redis.conf</span></span></code></pre></div><ul><li>修改redis.conf</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">//修改密码</span></span>
<span class="line"><span style="color:#A6ACCD;">requirepass  password</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//开启守护</span></span>
<span class="line"><span style="color:#A6ACCD;">daemonize  yes</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 修改后重启</span></span>
<span class="line"><span style="color:#A6ACCD;">redis-server redis.conf</span></span></code></pre></div><ul><li>进入redis</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">redis-cli</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">auth password // 一个节点实例</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">auth -p port password // 多个节点实例可以设置端口号进行登录</span></span>
<span class="line"><span style="color:#A6ACCD;">// 成功后进入</span></span></code></pre></div><ul><li>使用命令</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">SET key</span></span>
<span class="line"><span style="color:#A6ACCD;">GET key</span></span></code></pre></div><ul><li><p>持久化 RDB和AOF</p><ul><li><a href="https://blog.csdn.net/weixin_40172337/article/details/114483168" target="_blank" rel="noreferrer">https://blog.csdn.net/weixin_40172337/article/details/114483168</a></li></ul></li><li><p>redis 6.0 多线程性能提升</p><ul><li><a href="https://juejin.cn/post/6844904158697521160" target="_blank" rel="noreferrer">https://juejin.cn/post/6844904158697521160</a></li></ul></li></ul><h2 id="获取所有keys的数量" tabindex="-1">获取所有keys的数量 <a class="header-anchor" href="#获取所有keys的数量" aria-label="Permalink to &quot;获取所有keys的数量&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">命令</span></span>
<span class="line"><span style="color:#A6ACCD;">dbsize</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">info memory</span></span>
<span class="line"><span style="color:#A6ACCD;">info cpu</span></span>
<span class="line"><span style="color:#A6ACCD;">info lastest_fork_usec</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 查看命令执行次数</span></span>
<span class="line"><span style="color:#A6ACCD;">info commandstats</span></span>
<span class="line"><span style="color:#A6ACCD;">// calls 总次数 usec 总耗时 usec_per_call 平均耗时</span></span>
<span class="line"><span style="color:#A6ACCD;">info lastest_fork_usec</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">CONFIG RESETSTAT  重置数据</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">- info 信息 https://www.likecs.com/show-204365642.html</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">- aof rdb</span></span>
<span class="line"><span style="color:#A6ACCD;">https://blog.csdn.net/weixin_42614150/article/details/125074667</span></span>
<span class="line"><span style="color:#A6ACCD;">- 实际操作</span></span>
<span class="line"><span style="color:#A6ACCD;">  - https://blog.csdn.net/weixin_44977377/article/details/123470054</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> // used_memory_human</span></span></code></pre></div><ul><li>哈希 HMGET field很多时，查询很慢，可以使用hgetall <ul><li><a href="https://juejin.cn/post/6844903448966758408" target="_blank" rel="noreferrer">https://juejin.cn/post/6844903448966758408</a></li></ul></li></ul><p>redis.conf 中daemonize yes 开启已守护进程运行</p><h2 id="版本下载列表" tabindex="-1">版本下载列表 <a class="header-anchor" href="#版本下载列表" aria-label="Permalink to &quot;版本下载列表&quot;">​</a></h2><ul><li><a href="http://download.redis.io/releases/" target="_blank" rel="noreferrer">http://download.redis.io/releases/</a></li></ul><h2 id="安装启动" tabindex="-1">安装启动 <a class="header-anchor" href="#安装启动" aria-label="Permalink to &quot;安装启动&quot;">​</a></h2><ul><li><a href="https://juejin.cn/post/7012898467643621412" target="_blank" rel="noreferrer">https://juejin.cn/post/7012898467643621412</a></li><li><a href="https://juejin.cn/post/6979019298543140901" target="_blank" rel="noreferrer">https://juejin.cn/post/6979019298543140901</a></li></ul><h2 id="systemctl-启动redis" tabindex="-1">systemctl 启动redis <a class="header-anchor" href="#systemctl-启动redis" aria-label="Permalink to &quot;systemctl 启动redis&quot;">​</a></h2><ul><li><p><a href="https://blog.csdn.net/m0_67392661/article/details/123686546" target="_blank" rel="noreferrer">https://blog.csdn.net/m0_67392661/article/details/123686546</a></p></li><li><p><a href="https://juejin.cn/post/7140837984567296014" target="_blank" rel="noreferrer">https://juejin.cn/post/7140837984567296014</a></p></li><li><p>systemctl daemon-reload 重新加载文件</p></li><li><p>journalctl -ex 查看启动日志</p></li></ul><p>redis.conf</p><ul><li>rdb</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 默认的rbd文件名</span></span>
<span class="line"><span style="color:#A6ACCD;">dbfilename dump.rdb</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 生成路径</span></span>
<span class="line"><span style="color:#A6ACCD;">dir /usr/local/redis/data6370</span></span></code></pre></div><ul><li>aof</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 启用aof</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">appendonly yes</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">appendfilename &quot;appendonly.aof&quot;</span></span></code></pre></div><h2 id="查找文件" tabindex="-1">查找文件 <a class="header-anchor" href="#查找文件" aria-label="Permalink to &quot;查找文件&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// xxx 文件名</span></span>
<span class="line"><span style="color:#A6ACCD;">find . -name xxx</span></span></code></pre></div><ul><li>如果想通过rdb文件来恢复，先关闭aof持久化功能，关闭redis,重启服务，并将要备份的rdb文件拷贝到 config get dir 路径下面</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">appendonly no //关闭aof</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">config get dir // 获取dump.rdb文件保存路径，</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">将要使用的rdb文件拷贝到此路径下，文件名要与下面的dbfilename名称保持一致，则重启时会重新加载此rdb文件</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">config get dbfilename </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">shutdown // 关闭redis</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl restart redis.service // 重新启动redis</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/usr/lib/systemd/system   // 服务所在位置路径</span></span>
<span class="line"><span style="color:#A6ACCD;">// ok查看数据恢复完成</span></span></code></pre></div><h2 id="防火墙" tabindex="-1">防火墙 <a class="header-anchor" href="#防火墙" aria-label="Permalink to &quot;防火墙&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 查看防火墙状态</span></span>
<span class="line"><span style="color:#A6ACCD;">rcfirewalld status</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">rcfirewalld start</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">rcfirewalld stop</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 重新加载文件</span></span>
<span class="line"><span style="color:#A6ACCD;">firewall-cmd --reload</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">firewall-cmd --zone=public --add-port=80/tcp --permanent</span></span></code></pre></div><h2 id="查看端口" tabindex="-1">查看端口 <a class="header-anchor" href="#查看端口" aria-label="Permalink to &quot;查看端口&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">netstat -an | grep 6379</span></span></code></pre></div><h2 id="切片集群搭建" tabindex="-1">切片集群搭建 <a class="header-anchor" href="#切片集群搭建" aria-label="Permalink to &quot;切片集群搭建&quot;">​</a></h2><ul><li><a href="https://juejin.cn/post/7084163543108927502#comment" target="_blank" rel="noreferrer">https://juejin.cn/post/7084163543108927502#comment</a></li><li><a href="https://juejin.cn/post/6922690589347545102#heading-3" target="_blank" rel="noreferrer">https://juejin.cn/post/6922690589347545102#heading-3</a></li></ul><table><thead><tr><th>配置</th><th>值</th><th>说明</th></tr></thead><tbody><tr><td>bind</td><td>172.17.0.2</td><td>绑定本机IP</td></tr><tr><td>port</td><td>7001</td><td>端口</td></tr><tr><td>cluster-enabled</td><td>yes</td><td>开启集群模式</td></tr><tr><td>cluster-config-file</td><td>/etc/redis/node-7002.conf</td><td>集群配置文件</td></tr><tr><td>cluster-node-timeout</td><td>15000</td><td>节点存活超时时长</td></tr><tr><td>daemonize</td><td>yes</td><td>守护进程</td></tr><tr><td>pidfile</td><td>/var/run/redis_7001.pid</td><td>PID文件</td></tr><tr><td>dir</td><td>/var/redis/7001</td><td>数据目录</td></tr><tr><td>logfile</td><td>/var/redis/log/7001.log</td><td>日志文件</td></tr><tr><td>appendonly</td><td>yes</td><td>开启AOF持久化</td></tr></tbody></table><h2 id="主从库以及从库再跟从库" tabindex="-1">主从库以及从库再跟从库 <a class="header-anchor" href="#主从库以及从库再跟从库" aria-label="Permalink to &quot;主从库以及从库再跟从库&quot;">​</a></h2><ul><li>第一次从库肯定需要全量复制，后面可以采用增量复制</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 在从节点设置主节点ip地址和端口号</span></span>
<span class="line"><span style="color:#A6ACCD;">replicaof host port</span></span>
<span class="line"><span style="color:#A6ACCD;">masterauth password // 设置主节点登录密码</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">info replication  // 可以查看本节点的属性是从节点还是主节点</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">info stats // 查看</span></span></code></pre></div><p>设置完毕后分别重启主节点和从节点</p><h2 id="哨兵机制" tabindex="-1">哨兵机制 <a class="header-anchor" href="#哨兵机制" aria-label="Permalink to &quot;哨兵机制&quot;">​</a></h2><ul><li><p>特殊模式下的Redis进程，主从库运行的同时，它也在运行。</p></li><li><p>监控-选主-通知</p></li><li><p>通过监控自动选择切换主库。</p></li><li><p>配置文件名称</p><ul><li>sentinel.conf</li></ul></li></ul><h2 id="redis开启多线程" tabindex="-1">redis开启多线程 <a class="header-anchor" href="#redis开启多线程" aria-label="Permalink to &quot;redis开启多线程&quot;">​</a></h2><ul><li><a href="https://juejin.cn/post/7065960336335044645" target="_blank" rel="noreferrer">https://juejin.cn/post/7065960336335044645</a></li><li>设置如下两个参数</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">io-threads 2  </span></span>
<span class="line"><span style="color:#A6ACCD;">io-threads-do-reads yes</span></span></code></pre></div><h2 id="客户端缓存开启" tabindex="-1">客户端缓存开启 <a class="header-anchor" href="#客户端缓存开启" aria-label="Permalink to &quot;客户端缓存开启&quot;">​</a></h2><ul><li><a href="https://juejin.cn/post/7119016087596826632" target="_blank" rel="noreferrer">https://juejin.cn/post/7119016087596826632</a></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">通过telnet连接redis服务，并切换到resp3协议模式</span></span>
<span class="line"><span style="color:#A6ACCD;">hello 3</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 默认模式</span></span>
<span class="line"><span style="color:#A6ACCD;">// 开启</span></span>
<span class="line"><span style="color:#A6ACCD;">client tracking on</span></span>
<span class="line"><span style="color:#A6ACCD;">// 关闭</span></span>
<span class="line"><span style="color:#A6ACCD;">client tracking off</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 广播模式</span></span>
<span class="line"><span style="color:#A6ACCD;">// 开启广播模式</span></span>
<span class="line"><span style="color:#A6ACCD;">client tracking on bcast</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 可针对特定前缀的key进行缓存</span></span>
<span class="line"><span style="color:#A6ACCD;">client tracking on bcast prefix myprefix</span></span></code></pre></div><h2 id="分片集群" tabindex="-1">分片集群 <a class="header-anchor" href="#分片集群" aria-label="Permalink to &quot;分片集群&quot;">​</a></h2><ul><li>至少三个主节点，可以再加三个从节点</li><li>主节点发生异常后，迅速将从节点切换为主节点</li><li>主节点和从节点都挂掉了，那没办法要进行手动处理了</li><li>redis-trib 工具可用于搭建集群 <ul><li><a href="https://juejin.cn/post/7093180846051426317" target="_blank" rel="noreferrer">https://juejin.cn/post/7093180846051426317</a></li></ul></li><li>Redis集群至少需要3个节点，因为投票容错机制要求超过半数节点认为某个节点挂了该节点才是挂了，所以2个节点无法构成集群</li><li><a href="https://www.jb51.net/article/229037.htm" target="_blank" rel="noreferrer">https://www.jb51.net/article/229037.htm</a></li></ul><h2 id="redis-memory" tabindex="-1">redis memory <a class="header-anchor" href="#redis-memory" aria-label="Permalink to &quot;redis memory&quot;">​</a></h2><ul><li><a href="https://blog.csdn.net/weixin_47214315/article/details/123783066" target="_blank" rel="noreferrer">https://blog.csdn.net/weixin_47214315/article/details/123783066</a></li></ul><h2 id="redis-slowlog慢查询" tabindex="-1">redis slowlog慢查询 <a class="header-anchor" href="#redis-slowlog慢查询" aria-label="Permalink to &quot;redis slowlog慢查询&quot;">​</a></h2><ul><li><a href="https://mp.weixin.qq.com/s/JXRcDYupxzcO0uVwa9-ZoQ" target="_blank" rel="noreferrer">https://mp.weixin.qq.com/s/JXRcDYupxzcO0uVwa9-ZoQ</a></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">redis-cli</span></span>
<span class="line"><span style="color:#A6ACCD;">auth sunlight2010</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 获取前100个慢查询</span></span>
<span class="line"><span style="color:#A6ACCD;">slowlog get 100</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 打印所有的慢查询key</span></span>
<span class="line"><span style="color:#A6ACCD;">slowlog get</span></span>
<span class="line"><span style="color:#A6ACCD;">// 总共所有的慢查询</span></span>
<span class="line"><span style="color:#A6ACCD;">slowlog len</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 重置清空慢查询</span></span>
<span class="line"><span style="color:#A6ACCD;">slowlog reset</span></span></code></pre></div><h2 id="docker安装redis" tabindex="-1">docker安装redis <a class="header-anchor" href="#docker安装redis" aria-label="Permalink to &quot;docker安装redis&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 查找redis可用版本</span></span>
<span class="line"><span style="color:#A6ACCD;">docker search  redis</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 拉取最新版的redis镜像</span></span>
<span class="line"><span style="color:#A6ACCD;">docker pull redis:latest</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 可查找到redis镜像</span></span>
<span class="line"><span style="color:#A6ACCD;">docker images</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 运行容器，指定映射端口号号容器名称  redis-1,并设置容器重启启动</span></span>
<span class="line"><span style="color:#A6ACCD;">docker run --restart always -itd --name redis-1 -p 6479:6479 redis</span></span></code></pre></div><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">docker run </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">d \\</span></span>
<span class="line"><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">name mysql</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">p </span><span style="color:#F78C6C;">4006</span><span style="color:#A6ACCD;">:</span><span style="color:#F78C6C;">3306</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">v </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">usr</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">local</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">docker</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">mysql</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">config</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">mysqld</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">cnf:</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">etc</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">mysql</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">mysql</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">conf</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">d</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">mysqld</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">cnf \\</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">v </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">usr</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">local</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">docker</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">mysql</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">/</span><span style="color:#FFCB6B;">mysql</span><span style="color:#89DDFF;">:/</span><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;">/lib/mysql \\</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">e MYSQL_ROOT_PASSWORD</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">sunlight2021 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">mysql</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">v </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">usr</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">local</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">docker</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">mysql</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">config</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">mysqld</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">cnf:</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">etc</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">mysql</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">mysql</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">conf</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">d</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">mysqld</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">cnf: 将容器中 </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">etc</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">mysql</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">mysql</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">conf</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">d</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">mysqld</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">cnf 配置文件挂载到宿主机的 </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">usr</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">local</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">docker</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">mysql</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">config</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">mysqld</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">cnf 文件上；</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">v </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">usr</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">local</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">docker</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">mysql</span><span style="color:#89DDFF;">/</span><span style="color:#FFCB6B;">data</span><span style="color:#89DDFF;">:/</span><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;">/lib/mysql</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">将容器中</span><span style="color:#A6ACCD;"> /</span><span style="color:#FFCB6B;">var</span><span style="color:#A6ACCD;">/</span><span style="color:#FFCB6B;">lib</span><span style="color:#A6ACCD;">/</span><span style="color:#FFCB6B;">mysql</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">数据目录挂载到宿主机的</span><span style="color:#A6ACCD;"> /</span><span style="color:#FFCB6B;">usr</span><span style="color:#A6ACCD;">/</span><span style="color:#FFCB6B;">local</span><span style="color:#A6ACCD;">/</span><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;">/</span><span style="color:#FFCB6B;">mysql</span><span style="color:#A6ACCD;">/</span><span style="color:#FFCB6B;">data</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">目录下</span><span style="color:#A6ACCD;">；</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">-d 后台运行程序，并返回容器ID</span></span>
<span class="line"><span style="color:#A6ACCD;">-p 指定映射端口， 主机端口:容器端口</span></span>
<span class="line"><span style="color:#A6ACCD;">-v /usr/local/docker/mysql/config/mysqld.cnf:/etc/mysql/mysql.conf.d/mysqld.cnf </span></span>
<span class="line"><span style="color:#A6ACCD;">// 将容器中的 mysql 配置文件复制到宿主机中指定路径下，路径你可以根据需要，自行修改</span></span>
<span class="line"><span style="color:#A6ACCD;">// 查看正在运行的redis容器</span></span>
<span class="line"><span style="color:#A6ACCD;">docker ps</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 进入容器链接redis</span></span>
<span class="line"><span style="color:#A6ACCD;">docker exec -it redis-1 /bin/bash</span></span></code></pre></div><p>// docker mysql // <a href="https://juejin.cn/post/6844903848960606221" target="_blank" rel="noreferrer">https://juejin.cn/post/6844903848960606221</a></p><p>docker run -d <br> --name mysql-2 <br> -p 4007:3306 <br> -v /usr/local/docker/mysql/config/mysqld.cnf:/etc/mysql/mysql.conf.d/mysqld.cnf <br> -v /usr/local/docker/mysql/data/mysql:/var/lib/mysql <br> -e MYSQL_ROOT_PASSWORD=sunlight2021 <br> mysql</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">docker run -d \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--name mariadb-1 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-p 13306:3306 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-e MARIADB_ROOT_PASSWORD=sunlight2021 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">mariadb</span></span></code></pre></div><h2 id="monitor" tabindex="-1">monitor <a class="header-anchor" href="#monitor" aria-label="Permalink to &quot;monitor&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 监控所有的key操作</span></span>
<span class="line"><span style="color:#A6ACCD;">redis-cli </span></span>
<span class="line"><span style="color:#A6ACCD;">auth sunlight2010</span></span>
<span class="line"><span style="color:#A6ACCD;">monitor</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 监听过滤,只监测KEYS</span></span>
<span class="line"><span style="color:#A6ACCD;">redis-cli -a &quot;sunlight2010&quot;  monitor|grep &#39;KEYS&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 监听过滤，除了KEYS都检测</span></span>
<span class="line"><span style="color:#A6ACCD;">redis-cli -a &quot;sunlight2010&quot;  monitor|grep -v &#39;KEYS&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 还可以将检测写入到log文件中</span></span>
<span class="line"><span style="color:#A6ACCD;">redis-cli -a &quot;sunlight2010&quot; monitor|grep &#39;GET&#39; &gt; ttt.log</span></span></code></pre></div>`,68),o=[e];function t(r,c,i,C,A,y){return a(),n("div",null,o)}const h=s(p,[["render",t]]);export{D as __pageData,h as default};
