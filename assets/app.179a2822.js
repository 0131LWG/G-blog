import{d as p,K as o,a2 as i,u,p as c,k as l,a3 as d,a4 as f,a5 as m,a6 as h,a7 as A,a8 as g,a9 as v,aa as P,ab as y,ac as w,ad as C,ae as R,af as _,ag as b}from"./chunks/framework.b9480850.js";import{t as E}from"./chunks/theme.fdc11217.js";const D={...E};function r(e){if(e.extends){const a=r(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const n=r(D),T=p({name:"VitePressApp",setup(){const{site:e}=u();return c(()=>{l(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),d(),f(),m(),n.setup&&n.setup(),()=>h(n.Layout)}});async function O(){const e=j(),a=S();a.provide(A,e);const t=g(e.route);return a.provide(v,t),a.component("Content",P),a.component("ClientOnly",y),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),n.enhanceApp&&await n.enhanceApp({app:a,router:e,siteData:w}),{app:a,router:e,data:t}}function S(){return C(T)}function j(){let e=o,a;return R(t=>{let s=_(t);return e&&(a=s),(e||a===s)&&(s=s.replace(/\.js$/,".lean.js")),o&&(e=!1),b(()=>import(s),[])},n.NotFound)}o&&O().then(({app:e,router:a,data:t})=>{a.go().then(()=>{i(a.route,t.site),e.mount("#app")})});export{O as createApp};
