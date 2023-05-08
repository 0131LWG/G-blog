import{_ as e,o as t,c as r,O as a}from"./chunks/framework.b9480850.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"javascript/2022-10-11-.net6.0.md","filePath":"javascript/2022-10-11-.net6.0.md","lastUpdated":1683549694000}'),o={name:"javascript/2022-10-11-.net6.0.md"},l=a('<h2 id="iqueryable" tabindex="-1">IQueryable <a class="header-anchor" href="#iqueryable" aria-label="Permalink to &quot;IQueryable&quot;">​</a></h2><ul><li><a href="https://www.cnblogs.com/xishuai/p/repository-return-iqueryable-or-ienumerable.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/xishuai/p/repository-return-iqueryable-or-ienumerable.html</a> IQueryable 继承自 IEnumerable，它们俩最大的区别是，IQueryable 是表达式树处理，可以延迟查询，而 IEnumerable 只能查询在本地内存中，Repository 的概念就不多说了，在“伪 DDD”设计中，你可以把它看作是数据访问层。</li></ul><h2 id="asnotracking" tabindex="-1">AsNoTracking <a class="header-anchor" href="#asnotracking" aria-label="Permalink to &quot;AsNoTracking&quot;">​</a></h2><ul><li><a href="https://learn.microsoft.com/zh-cn/dotnet/architecture/modern-web-apps-azure/work-with-data-in-asp-net-core-apps" target="_blank" rel="noreferrer">https://learn.microsoft.com/zh-cn/dotnet/architecture/modern-web-apps-azure/work-with-data-in-asp-net-core-apps</a></li><li>AsNoTracking <a href="https://learn.microsoft.com/zh-cn/dotnet/api/system.data.entity.dbextensions.asnotracking?view=entity-framework-5.0.0" target="_blank" rel="noreferrer">https://learn.microsoft.com/zh-cn/dotnet/api/system.data.entity.dbextensions.asnotracking?view=entity-framework-5.0.0</a></li></ul><p>EF Core 具有两个重要功能，使其有别于 Dapper ，并且增加其性能开销。 第一个功能是从 LINQ 表达式转换为 SQL。 将缓存这些转换，但即便如此，首次执行它们时仍会产生开销。 第二个功能是对实体进行更改跟踪（以便生成高效的更新语句）。 通过使用 AsNoTracking 扩展，可对特定查询关闭此行为。 EF Core 还会生成通常非常高效的 SQL 查询，并且从性能角度上看，任何情况下都能完全接受，但如果需要执行对精确查询的精细化控制，也可使用 EF Core 传入自定义 SQL（或执行存储过程）。</p><h2 id="执行原生sql" tabindex="-1">执行原生Sql <a class="header-anchor" href="#执行原生sql" aria-label="Permalink to &quot;执行原生Sql&quot;">​</a></h2><ul><li><a href="https://www.cnblogs.com/hllive/p/13559793.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/hllive/p/13559793.html</a></li><li>update delete 等 DbContext.Database.ExecuteSqlRawAsync</li></ul><h2 id="事务异常" tabindex="-1">事务异常 <a class="header-anchor" href="#事务异常" aria-label="Permalink to &quot;事务异常&quot;">​</a></h2><ul><li><a href="https://mysqlconnector.net/troubleshooting/transaction-usage/" target="_blank" rel="noreferrer">https://mysqlconnector.net/troubleshooting/transaction-usage/</a></li></ul><h2 id="各种使用范例" tabindex="-1">各种使用范例 <a class="header-anchor" href="#各种使用范例" aria-label="Permalink to &quot;各种使用范例&quot;">​</a></h2><ul><li><a href="https://www.cjavapy.com/article/680/" target="_blank" rel="noreferrer">https://www.cjavapy.com/article/680/</a></li></ul><h2 id="excel-电子表格" tabindex="-1">Excel 电子表格 <a class="header-anchor" href="#excel-电子表格" aria-label="Permalink to &quot;Excel 电子表格&quot;">​</a></h2><ul><li><a href="https://github.com/nissl-lab/npoi" target="_blank" rel="noreferrer">https://github.com/nissl-lab/npoi</a></li><li><a href="https://epplussoftware.com/zh/" target="_blank" rel="noreferrer">https://epplussoftware.com/zh/</a></li><li><a href="https://github.com/EPPlusSoftware/EPPlus" target="_blank" rel="noreferrer">https://github.com/EPPlusSoftware/EPPlus</a></li></ul><h2 id="数据库连接池" tabindex="-1">数据库连接池 <a class="header-anchor" href="#数据库连接池" aria-label="Permalink to &quot;数据库连接池&quot;">​</a></h2><ul><li><a href="https://www.cnblogs.com/xhubobo/p/16163949.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/xhubobo/p/16163949.html</a></li><li><a href="https://github.com/dotnetcore/osharp/issues/217" target="_blank" rel="noreferrer">https://github.com/dotnetcore/osharp/issues/217</a></li></ul><h2 id="efcore-读写分离" tabindex="-1">EFCore 读写分离 <a class="header-anchor" href="#efcore-读写分离" aria-label="Permalink to &quot;EFCore 读写分离&quot;">​</a></h2><ul><li><a href="https://www.cnblogs.com/coldairarrow/p/12733886.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/coldairarrow/p/12733886.html</a></li></ul><h2 id="efcore分表分库" tabindex="-1">EFCore分表分库 <a class="header-anchor" href="#efcore分表分库" aria-label="Permalink to &quot;EFCore分表分库&quot;">​</a></h2><ul><li><a href="https://www.cnblogs.com/xuejiaming/p/15375374.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/xuejiaming/p/15375374.html</a></li><li><a href="https://www.cnblogs.com/yaopengfei/p/13263597.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/yaopengfei/p/13263597.html</a></li></ul><h2 id="dbcontext-各种方式" tabindex="-1">DBContext 各种方式 <a class="header-anchor" href="#dbcontext-各种方式" aria-label="Permalink to &quot;DBContext 各种方式&quot;">​</a></h2><ul><li><a href="https://learn.microsoft.com/zh-cn/ef/core/dbcontext-configuration/" target="_blank" rel="noreferrer">https://learn.microsoft.com/zh-cn/ef/core/dbcontext-configuration/</a></li></ul><h2 id="an-error-occurred-while-saving-the-entity-changes-see-the-inner-exception-for-details" tabindex="-1">An error occurred while saving the entity changes. See the inner exception for details. <a class="header-anchor" href="#an-error-occurred-while-saving-the-entity-changes-see-the-inner-exception-for-details" aria-label="Permalink to &quot;An error occurred while saving the entity changes. See the inner exception for details.&quot;">​</a></h2><ul><li>字段长度不够 <a href="https://blog.csdn.net/weixin_48246845/article/details/126867454" target="_blank" rel="noreferrer">https://blog.csdn.net/weixin_48246845/article/details/126867454</a></li></ul><h2 id="grpc" tabindex="-1">gRPC <a class="header-anchor" href="#grpc" aria-label="Permalink to &quot;gRPC&quot;">​</a></h2><ul><li><a href="https://www.cnblogs.com/stulzq/p/11581967.html#!comments" target="_blank" rel="noreferrer">https://www.cnblogs.com/stulzq/p/11581967.html#!comments</a></li></ul>',25),n=[l];function i(s,h,c,u,p,b){return t(),r("div",null,n)}const f=e(o,[["render",i]]);export{d as __pageData,f as default};
