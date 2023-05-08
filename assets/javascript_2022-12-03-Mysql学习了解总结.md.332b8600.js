import{_ as a,o as s,c as l,O as e}from"./chunks/framework.b9480850.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"javascript/2022-12-03-Mysql学习了解总结.md","filePath":"javascript/2022-12-03-Mysql学习了解总结.md","lastUpdated":1683549694000}'),n={name:"javascript/2022-12-03-Mysql学习了解总结.md"},o=e(`<h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>最近对mysql的操作比较多一些，主要是项目上线以后，难免会有一些数据上的问题。开始的时候还主要由后端来处理，后面数据问题确实比较多，于是我就找后端要来服务器的账号密码，连上数据库顺便来看看数据的问题。</p><h2 id="mysql-索引" tabindex="-1">mysql 索引 <a class="header-anchor" href="#mysql-索引" aria-label="Permalink to &quot;mysql 索引&quot;">​</a></h2><p>最开始项目刚上线的时候，因为没有数据，所以根本没什么感觉，突然某一天，就感觉到接口的响应时间明显的变慢了。但其实后端并没有什么线上的经验，所以我借机就要来了服务器的账号密码。基本上除了主键以外，没有加任何的索引。打到数据库上的查询就实打实的有一些慢了，（虽然这里使用了一主四从），四个从库相当于都是用来做查询使用的，但是在没有索引的情况下，真的有点慢了。我跟后端稍作沟通，我就准备直接在正式环境添加数据库表的索引了。</p><p>那么首先要做的第一件事情便是，查看一下mysql的慢查询是否有打开，好家伙，还不错，竟然打开了。下面是常用的几个查询慢SQL的脚本语句</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 得到返回记录集最多的10条SQL：</span></span>
<span class="line"><span style="color:#A6ACCD;">mysqldumpslow -s r -t  10 /var/lib/mysql/slow.log</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 得到访问次数最多的10条SQL：</span></span>
<span class="line"><span style="color:#A6ACCD;">mysqldumpslow -s r -t  10 /data/mysql/slow.log</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 得到按照时间排序的前10条里面含有左连接的SQL：</span></span>
<span class="line"><span style="color:#A6ACCD;">mysqldumpslow -s t -t 100 -g &quot;left join&quot; /var/lib/mysql/slow.log</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 也支持管道符命令</span></span>
<span class="line"><span style="color:#A6ACCD;">mysqldumpslow -s t -t 10 -g &quot;left join&quot; /var/lib/mysql/slow.log | more //分页显示</span></span></code></pre></div><h4 id="技术选型问题" tabindex="-1">技术选型问题 <a class="header-anchor" href="#技术选型问题" aria-label="Permalink to &quot;技术选型问题&quot;">​</a></h4><p>h5嵌套到小程序的webview,但是又要用到小程序里的地图定位，就需要由H5跳转到小程序的页面，然后要由小程序页面返回到webview中的h5,这里还需要有一个返回值传到h5中，这里我暂时没想到办法，至少我没想到办法回传数据，于是只能简单的写个定时器，不断的通过接口调用，相当于数据的回传刷新了。</p><p>这里如果完全是小程序的页面就不会存在这个问题了，不过水饺咱没时间全部用小程序的页面呢？</p><h4 id="表单重复提交问题" tabindex="-1">表单重复提交问题 <a class="header-anchor" href="#表单重复提交问题" aria-label="Permalink to &quot;表单重复提交问题&quot;">​</a></h4><p>由于项目中主要的就是数据的录入，所以出问题最多的就是在表单多次提交，其实也有很多的方法。</p><ul><li>方法一： 按钮提交时，将按钮设置为加载状态，并不可点击。</li><li>方法二： 通过pinia保存状态数据，点击保存时对比数据，数据如果未被修改，则不调用接口保存，有效的减少了服务器写入数据的压力。</li></ul><h4 id="缓存问题" tabindex="-1">缓存问题 <a class="header-anchor" href="#缓存问题" aria-label="Permalink to &quot;缓存问题&quot;">​</a></h4><p>由于是h5嵌套到webView的小程序中的，所以有时候明明更新了前端，用户却还是之前的版本，这里想到的办法就是通过nginx 配置 缓存</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">location /{</span></span>
<span class="line"><span style="color:#A6ACCD;">    alias /usr/local/xxxx;</span></span>
<span class="line"><span style="color:#A6ACCD;">    index index.html;</span></span>
<span class="line"><span style="color:#A6ACCD;">    add_header Cache-Control no-cache;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>no-cache 协商缓存，每次也去服务器请求，但会进行判断是否是新的资源，如果是旧的资源，则直接返回304使用客户端的缓存。</p><p>no-store 相当于每次请求都会从服务器获取前端页面，不会进行缓存。</p><h4 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他&quot;">​</a></h4><p>当然还存在其他一些小问题，比如用户操作便利性的改进，以及友好的错误提示 等等。</p><h2 id="后端" tabindex="-1">后端 <a class="header-anchor" href="#后端" aria-label="Permalink to &quot;后端&quot;">​</a></h2><p>由于我也参与了一些后端接口的工作，对整个前后端的情况都有所了解。</p><h4 id="重复数据" tabindex="-1">重复数据 <a class="header-anchor" href="#重复数据" aria-label="Permalink to &quot;重复数据&quot;">​</a></h4><p>由于前期时间确实比较紧张，准备不足，导致程序存在一些问题，经过排查发现，在导入数据的时候没有判断数据的唯一性，导致数据重复。这个算是一个bug，目前已经修复了。</p><h4 id="数据延迟" tabindex="-1">数据延迟 <a class="header-anchor" href="#数据延迟" aria-label="Permalink to &quot;数据延迟&quot;">​</a></h4><p>由于高峰期存在接口10秒都没有提交成功的情况，后来发现mysql事务中的查询存在比较大的耗时，经过调整添加索引修改查询条件，不进行全表扫描，目前观察不存在事务高峰期数据并发导致Mysql数据库CPU拉满的情况。</p><h4 id="日志处理" tabindex="-1">日志处理 <a class="header-anchor" href="#日志处理" aria-label="Permalink to &quot;日志处理&quot;">​</a></h4><p>应用中存在记录日志文件过大，并发量大的时候，导致频繁插入，而且文件越大插入速度必然很慢，这里做了文件大小限制，将大小设置未10M，很小了，速度非常快。并且在应用中对日志类型也就是写入日志的频次进行 修改，没有必要的日志进行了移除。</p><h4 id="用户身份" tabindex="-1">用户身份 <a class="header-anchor" href="#用户身份" aria-label="Permalink to &quot;用户身份&quot;">​</a></h4><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><ul><li>linux磁盘挂载问题</li><li>mysql数据备份问题</li><li>服务器扩容前的处理事项、应用备份、以及相关配置文件</li><li>服务器扩容后的检查工作、磁盘状态、应用、数据库、redis等正常使用</li></ul>`,30),t=[o];function p(i,r,c,h,d,u){return s(),l("div",null,t)}const y=a(n,[["render",p]]);export{m as __pageData,y as default};
