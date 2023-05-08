import{_ as n,o as e,c as a,b as s}from"./app.f4aabbaf.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"12、 node-sass 安装一直失败,直接dart-sass替换吧","slug":"_12、-node-sass-安装一直失败-直接dart-sass替换吧","link":"#_12、-node-sass-安装一直失败-直接dart-sass替换吧","children":[]},{"level":3,"title":"13、node和npm版本对应","slug":"_13、node和npm版本对应","link":"#_13、node和npm版本对应","children":[]},{"level":3,"title":"14、mac下查找ssh","slug":"_14、mac下查找ssh","link":"#_14、mac下查找ssh","children":[]},{"level":3,"title":"15、登录服务器","slug":"_15、登录服务器","link":"#_15、登录服务器","children":[]},{"level":3,"title":"16、window下配置ls命令","slug":"_16、window下配置ls命令","link":"#_16、window下配置ls命令","children":[]},{"level":3,"title":"17、ni工具 根据锁文件去选取相应的命令时npm、yarn还是pnpm","slug":"_17、ni工具-根据锁文件去选取相应的命令时npm、yarn还是pnpm","link":"#_17、ni工具-根据锁文件去选取相应的命令时npm、yarn还是pnpm","children":[]},{"level":3,"title":"18、npm 执行顺序的整理","slug":"_18、npm-执行顺序的整理","link":"#_18、npm-执行顺序的整理","children":[]},{"level":3,"title":"19、400 错误","slug":"_19、400-错误","link":"#_19、400-错误","children":[]},{"level":3,"title":"20、npm包源","slug":"_20、npm包源","link":"#_20、npm包源","children":[]}],"relativePath":"javascript/2022-05-21-npm.md","lastUpdated":1683547689000}'),r={name:"javascript/2022-05-21-npm.md"},d=s(`<h4 id="_1、安装-nodejs-则其中会包含-npm-安装完-nodejs-后" tabindex="-1">1、安装 nodejs 则其中会包含 npm，安装完 nodejs 后 <a class="header-anchor" href="#_1、安装-nodejs-则其中会包含-npm-安装完-nodejs-后" aria-hidden="true">#</a></h4><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">    node </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">v  </span><span style="color:#676E95;font-style:italic;">// 查看nodejs安装是否成功，成功后会出现版本号</span></span>
<span class="line"><span style="color:#A6ACCD;">    npm </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">v  </span><span style="color:#676E95;font-style:italic;">// 同样会出现npm版本</span></span>
<span class="line"></span></code></pre></div><h4 id="_2、通过-npm-安装-yarn" tabindex="-1">2、通过 npm 安装 yarn <a class="header-anchor" href="#_2、通过-npm-安装-yarn" aria-hidden="true">#</a></h4><pre><code>\`\`\`javascript
    npm install -g yarn
\`\`\`
</code></pre><h4 id="_2-1-安装yarn" tabindex="-1">2.1.安装yarn <a class="header-anchor" href="#_2-1-安装yarn" aria-hidden="true">#</a></h4><pre><code>\`\`\`javascript
    npm install -g yarn

    如：vscode 无法yarn时
    解：以管理员运行 power shell
    执行 set-executionpolicy remotesigned
    输入：Y
\`\`\`    
</code></pre><h4 id="_3、通过-npm-安装-cnpm" tabindex="-1">3、通过 npm 安装 cnpm <a class="header-anchor" href="#_3、通过-npm-安装-cnpm" aria-hidden="true">#</a></h4><pre><code>\`\`\`javascript
    npm install -g cnpm --registry=https://registry.npm.taobao.org
\`\`\`
</code></pre><h4 id="_4、npm-在-vscode-中不能生效-有时候需要将-vscode-右键管理员运行才可以" tabindex="-1">4、npm 在 vscode 中不能生效，有时候需要将 vscode 右键管理员运行才可以 <a class="header-anchor" href="#_4、npm-在-vscode-中不能生效-有时候需要将-vscode-右键管理员运行才可以" aria-hidden="true">#</a></h4><h4 id="_5、npm-创建-vue-cli-脚手架" tabindex="-1">5、npm 创建 @vue/cli 脚手架 <a class="header-anchor" href="#_5、npm-创建-vue-cli-脚手架" aria-hidden="true">#</a></h4><pre><code>\`\`\`javascript
    // 安装
    npm install -g @vue/cli
    // or
    yarn global add @vue/cli


    // 检查是否安装成功通过版本
    vue --version

    // 更新版本
    npm update -g @vue/cli

\`\`\`
</code></pre><h4 id="_6、npm-安装版本号" tabindex="-1">6、npm 安装版本号 <a class="header-anchor" href="#_6、npm-安装版本号" aria-hidden="true">#</a></h4><pre><code>\`\`\`javascript
    ^主版本号不会变，另外两个版本号会更新到最新
    ~主版本和次要版本不会变，最后一个版本号会更新到最新
    啥也没有：固定版本，不会更新
\`\`\`
</code></pre><h4 id="_7、npm-d-s" tabindex="-1">7、npm -D -S <a class="header-anchor" href="#_7、npm-d-s" aria-hidden="true">#</a></h4><pre><code>\`\`\`javascript
    -D 是在开发环境中协助开发需要使用的
    -S是生产环境打包时需要的
    在package.json中 -D在devDependencies对象中，-S在dependencies对象中
\`\`\`
</code></pre><h4 id="_8、npm-update-更新包" tabindex="-1">8、npm update 更新包 <a class="header-anchor" href="#_8、npm-update-更新包" aria-hidden="true">#</a></h4><pre><code>\`\`\`
    npm update package-name
\`\`\`
</code></pre><h4 id="_9、-npmjs-com-发布常用操作" tabindex="-1">9、 <a href="http://npmjs.com" target="_blank" rel="noreferrer">npmjs.com</a> 发布常用操作 <a class="header-anchor" href="#_9、-npmjs-com-发布常用操作" aria-hidden="true">#</a></h4><pre><code>\`\`\`javascript
    // 登录 npmjs // 输入用户名  密码和 注册邮箱
    npm login

    //打包文件（参考aehyok-form-vue3 git仓库 package.json中的scripts）
     npm run lib

    // 修改package.json2文件中的版本号后，可以发布到npmjs上
    npm publish

\`\`\`
</code></pre><h4 id="_10、清理-npm-安装包的缓存" tabindex="-1">10、清理 npm 安装包的缓存 <a class="header-anchor" href="#_10、清理-npm-安装包的缓存" aria-hidden="true">#</a></h4><pre><code>\`\`\`javascript
    npm cache clean --force
\`\`\`
</code></pre><h4 id="_11、nvm-管理node版本" tabindex="-1">11、nvm 管理node版本 <a class="header-anchor" href="#_11、nvm-管理node版本" aria-hidden="true">#</a></h4><pre><code>- mac下安装 https://juejin.cn/post/7028543262109630495
- window下安装 https://juejin.cn/post/6982074406273024030
- window下下载地址 https://github.com/coreybutler/nvm-windows/releases
</code></pre><h3 id="_12、-node-sass-安装一直失败-直接dart-sass替换吧" tabindex="-1">12、 node-sass 安装一直失败,直接dart-sass替换吧 <a class="header-anchor" href="#_12、-node-sass-安装一直失败-直接dart-sass替换吧" aria-hidden="true">#</a></h3><pre><code>- https://www.cnblogs.com/cilye/p/15107661.html
- https://juejin.cn/post/7023199071439421471
</code></pre><h3 id="_13、node和npm版本对应" tabindex="-1">13、node和npm版本对应 <a class="header-anchor" href="#_13、node和npm版本对应" aria-hidden="true">#</a></h3><pre><code>- https://nodejs.org/zh-cn/download/releases/
</code></pre><h3 id="_14、mac下查找ssh" tabindex="-1">14、mac下查找ssh <a class="header-anchor" href="#_14、mac下查找ssh" aria-hidden="true">#</a></h3><pre><code>\`\`\`javascript
    // https://juejin.cn/post/6844904169191522317
    cd ~/.ssh
\`\`\`    
</code></pre><h3 id="_15、登录服务器" tabindex="-1">15、登录服务器 <a class="header-anchor" href="#_15、登录服务器" aria-hidden="true">#</a></h3><pre><code>\`\`\`javascript
    // 手工登录
    //打开ssh工具
    ssh root@139.159.245.209
    // 然后输入密码即可

    // 自动登录模式
    //https://juejin.cn/post/6844903848402927629#comment
    https://juejin.cn/post/6844903693444186119
    // 将自己本地的ssh public key 拷贝到服务器 cd ~/.ssh  authorized_keys中  拷贝粘贴
\`\`\`   
</code></pre><h3 id="_16、window下配置ls命令" tabindex="-1">16、window下配置ls命令 <a class="header-anchor" href="#_16、window下配置ls命令" aria-hidden="true">#</a></h3><pre><code>\`\`\`javascript
    //执行 
    doskey ls=dir
    //然后可以使用ls
    ls

\`\`\`
</code></pre><h3 id="_17、ni工具-根据锁文件去选取相应的命令时npm、yarn还是pnpm" tabindex="-1">17、ni工具 根据锁文件去选取相应的命令时npm、yarn还是pnpm <a class="header-anchor" href="#_17、ni工具-根据锁文件去选取相应的命令时npm、yarn还是pnpm" aria-hidden="true">#</a></h3><pre><code>- 学习了解 https://juejin.cn/post/7023910122770399269
\`\`\`javascript
npm i -g @antfu/ni

\`\`\`
</code></pre><h3 id="_18、npm-执行顺序的整理" tabindex="-1">18、npm 执行顺序的整理 <a class="header-anchor" href="#_18、npm-执行顺序的整理" aria-hidden="true">#</a></h3><pre><code>- https://segmentfault.com/a/1190000008832423?utm_source=tag-newest    
</code></pre><h3 id="_19、400-错误" tabindex="-1">19、400 错误 <a class="header-anchor" href="#_19、400-错误" aria-hidden="true">#</a></h3><pre><code>- https://segmentfault.com/a/1190000041167927
- https://segmentfault.com/a/1190000041025567
</code></pre><h3 id="_20、npm包源" tabindex="-1">20、npm包源 <a class="header-anchor" href="#_20、npm包源" aria-hidden="true">#</a></h3><pre><code>- https://npmjs.com
- https://npmmirror.com/
</code></pre>`,41),p=[d];function t(c,i,o,h,l,m){return e(),a("div",null,p)}const v=n(r,[["render",t]]);export{u as __pageData,v as default};
