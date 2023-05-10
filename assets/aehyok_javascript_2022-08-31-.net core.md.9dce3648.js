import{_ as a,o as e,c as t,O as r}from"./chunks/framework.fb7bb97b.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"aehyok/javascript/2022-08-31-.net core.md","filePath":"aehyok/javascript/2022-08-31-.net core.md","lastUpdated":1683685146000}'),l={name:"aehyok/javascript/2022-08-31-.net core.md"},o=r('<p>IOC、AOP、EFCore、MQ、Redis、gRPC、cron、JWT（OAuth2）、微服务、Mysql集群、DDD、Consul 、Ocelot、Serilog</p><h2 id="ioc" tabindex="-1">IOC <a class="header-anchor" href="#ioc" aria-label="Permalink to &quot;IOC&quot;">​</a></h2><ul><li>控制反转和依赖注入 <ul><li><a href="https://www.cnblogs.com/jhli/p/6019895.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/jhli/p/6019895.html</a></li></ul></li></ul><h4 id="依赖" tabindex="-1">依赖 <a class="header-anchor" href="#依赖" aria-label="Permalink to &quot;依赖&quot;">​</a></h4><p>class Order {</p><p>}</p><h4 id="consul-服务发现和注册中心" tabindex="-1">consul 服务发现和注册中心 <a class="header-anchor" href="#consul-服务发现和注册中心" aria-label="Permalink to &quot;consul 服务发现和注册中心&quot;">​</a></h4><ul><li>官方网址 <ul><li><a href="https://github.com/hashicorp/consul" target="_blank" rel="noreferrer">https://github.com/hashicorp/consul</a></li></ul></li><li>介绍 <ul><li><a href="https://juejin.cn/post/7173240268659884046" target="_blank" rel="noreferrer">https://juejin.cn/post/7173240268659884046</a></li><li><a href="https://www.cnblogs.com/kklldog/p/netcore-with-microservices-04.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/kklldog/p/netcore-with-microservices-04.html</a></li></ul></li></ul><h2 id="aop" tabindex="-1">AOP <a class="header-anchor" href="#aop" aria-label="Permalink to &quot;AOP&quot;">​</a></h2><ul><li><p>五大过滤器 ： IAuthorizationFilter 、IResourceFilter、IExceptionFilter、IActionFilter、IResultFilter</p><ul><li><a href="https://www.cnblogs.com/jlion/p/12394949.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/jlion/p/12394949.html</a></li></ul></li><li><p>api返回结果过滤器 IAsyncResultFilter</p></li><li><p>api 执行 IAsyncActionFilter</p></li></ul><p>AOP（Aspect-Oriented Programming，面向方面编程），可以说是OOP（Object-Oriented Programing，面向对象编程）的补充和完善。OOP引入封装、继承和多态性等概念来建立一种对象层次结构，用以模拟公共行为的一个集合。当我们需要为分散的对象引入公共行为的时候，OOP则显得无能为力。也就是说，OOP允许你定义从上到下的关系，但并不适合定义从左到右的关系。例如日志功能。日志代码往往水平地散布在所有对象层次中，而与它所散布到的对象的核心功能毫无关系。对于其他类型的代码，如安全性、异常处理和透明的持续性也是如此。这种散布在各处的无关的代码被称为横切（cross-cutting）代码，在OOP设计中，它导致了大量代码的重复，而不利于各个模块的重用。</p><p>而AOP技术则恰恰相反，它利用一种称为“横切”的技术，剖解开封装的对象内部，并将那些影响了多个类的公共行为封装到一个可重用模块，并将其名为“Aspect”，即方面。所谓“方面”，简单地说，就是将那些与业务无关，却为业务模块所共同调用的逻辑或责任封装起来，便于减少系统的重复代码，降低模块间的耦合度，并有利于未来的可操作性和可维护性。AOP代表的是一个横向的关系，如果说“对象”是一个空心的圆柱体，其中封装的是对象的属性和行为；那么面向方面编程的方法，就仿佛一把利刃，将这些空心圆柱体剖开，以获得其内部的消息。而剖开的切面，也就是所谓的“方面”了。然后它又以巧夺天功的妙手将这些剖开的切面复原，不留痕迹。</p><p>使用“横切”技术，AOP把软件系统分为两个部分：核心关注点和横切关注点。业务处理的主要流程是核心关注点，与之关系不大的部分是横切关注点。横切关注点的一个特点是，他们经常发生在核心关注点的多处，而各处都基本相似。比如权限认证、日志、事务处理。Aop 的作用在于分离系统中的各种关注点，将核心关注点和横切关注点分离开来。正如Avanade公司的高级方案构架师Adam Magee所说，AOP的核心思想就是“将应用程序中的商业逻辑同对其提供支持的通用服务进行分离。”</p><p>实现AOP的技术，主要分为两大类：一是采用动态代理技术，利用截取消息的方式，对该消息进行装饰，以取代原有对象行为的执行；二是采用静态织入的方式，引入特定的语法创建“方面”，从而使得编译器可以在编译期间织入有关“方面”的代码。然而殊途同归，实现AOP的技术特性却是相同的，分别为：</p><p>1、join point（连接点）：是程序执行中的一个精确执行点，例如类中的一个方法。它是一个抽象的概念，在实现AOP时，并不需要去定义一个join point。 2、point cut（切入点）：本质上是一个捕获连接点的结构。在AOP中，可以定义一个point cut，来捕获相关方法的调用。 3、advice（通知）：是point cut的执行代码，是执行“方面”的具体逻辑。 4、aspect（方面）：point cut和advice结合起来就是aspect，它类似于OOP中定义的一个类，但它代表的更多是对象间横向的关系。 5、introduce（引入）：为对象引入附加的方法或属性，从而达到修改对象结构的目的。有的AOP工具又将其称为mixin。</p><p>上述的技术特性组成了基本的AOP技术，大多数AOP工具均实现了这些技术。它们也可以是研究AOP技术的基本术语。</p><h2 id="mq" tabindex="-1">MQ <a class="header-anchor" href="#mq" aria-label="Permalink to &quot;MQ&quot;">​</a></h2><h2 id="redis" tabindex="-1">Redis <a class="header-anchor" href="#redis" aria-label="Permalink to &quot;Redis&quot;">​</a></h2><h2 id="grpc" tabindex="-1">gRPC <a class="header-anchor" href="#grpc" aria-label="Permalink to &quot;gRPC&quot;">​</a></h2><h2 id="cron" tabindex="-1">cron <a class="header-anchor" href="#cron" aria-label="Permalink to &quot;cron&quot;">​</a></h2><h2 id="jwt-oauth2" tabindex="-1">JWT（OAuth2） <a class="header-anchor" href="#jwt-oauth2" aria-label="Permalink to &quot;JWT（OAuth2）&quot;">​</a></h2><h2 id="微服务" tabindex="-1">微服务 <a class="header-anchor" href="#微服务" aria-label="Permalink to &quot;微服务&quot;">​</a></h2><h2 id="mysql集群" tabindex="-1">Mysql集群 <a class="header-anchor" href="#mysql集群" aria-label="Permalink to &quot;Mysql集群&quot;">​</a></h2><h2 id="ddd" tabindex="-1">DDD <a class="header-anchor" href="#ddd" aria-label="Permalink to &quot;DDD&quot;">​</a></h2><h2 id="_500" tabindex="-1">500 <a class="header-anchor" href="#_500" aria-label="Permalink to &quot;500&quot;">​</a></h2><h2 id="ocelot" tabindex="-1">Ocelot <a class="header-anchor" href="#ocelot" aria-label="Permalink to &quot;Ocelot&quot;">​</a></h2><h2 id="事件总线" tabindex="-1">事件总线 <a class="header-anchor" href="#事件总线" aria-label="Permalink to &quot;事件总线&quot;">​</a></h2><ul><li><a href="https://www.cnblogs.com/farb/p/ABPEventBus.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/farb/p/ABPEventBus.html</a></li><li>ASP.NET Core Web API下事件驱动型架构的实现（一）：一个简单的实现 <ul><li><a href="https://www.cnblogs.com/daxnet/p/8082694.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/daxnet/p/8082694.html</a></li></ul></li></ul>',28),i=[o];function n(h,c,s,p,d,u){return e(),t("div",null,i)}const P=a(l,[["render",n]]);export{b as __pageData,P as default};
