import{_ as e,o as a,c as t,O as r}from"./chunks/framework.b9480850.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"javascript/2023-03-15-embdding.md","filePath":"javascript/2023-03-15-embdding.md","lastUpdated":1683549694000}'),d={name:"javascript/2023-03-15-embdding.md"},n=r('<p>U7eIo_o9EySNfaAAK26G31FtJrtuYKop9ZCHQM108Nz3KL8hFbfTVw</p><p>curl <br> -X GET &#39;<a href="https://57764f9a-d310-4e55-b5c0-0b6c7092c831.us-east-1-0.aws.cloud.qdrant.io:6333" target="_blank" rel="noreferrer">https://57764f9a-d310-4e55-b5c0-0b6c7092c831.us-east-1-0.aws.cloud.qdrant.io:6333</a>&#39; <br> --header &#39;api-key: 9JfsjZRcYP7wTQUV8ihWJ7TVnYLX7BDklcRGsXBQ7XTVAwcYt_WBUA&#39;</p><p>curl <br> -X GET &#39;<a href="https://57764f9a-d310-4e55-b5c0-0b6c7092c831.us-east-1-0.aws.cloud.qdrant.io:6333" target="_blank" rel="noreferrer">https://57764f9a-d310-4e55-b5c0-0b6c7092c831.us-east-1-0.aws.cloud.qdrant.io:6333</a>&#39; <br> --header &#39;api-key: kThWcexRpedS30EyAutZt1ugEZtgDXdwj5_ixU22RQP5VfTc0q7woQ&#39;</p><p>curl <br> -X GET &#39;<a href="https://b4dfecea-3f6d-4f9b-a7ce-e0dfbb1efd24.us-east-1-0.aws.cloud.qdrant.io:6333" target="_blank" rel="noreferrer">https://b4dfecea-3f6d-4f9b-a7ce-e0dfbb1efd24.us-east-1-0.aws.cloud.qdrant.io:6333</a>&#39; <br> --header &#39;api-key: Q7q9WRRps_Vy6T9n3E0eCmW8Ak0TRFzJWK4Ci-AG3xzzYCT4c-roXg&#39;</p><h2 id="qdrant" tabindex="-1">QDrant <a class="header-anchor" href="#qdrant" aria-label="Permalink to &quot;QDrant&quot;">​</a></h2><ul><li>接口说明 <ul><li><a href="https://github.com/qdrant/qdrant/blob/master/QUICK_START.md" target="_blank" rel="noreferrer">https://github.com/qdrant/qdrant/blob/master/QUICK_START.md</a></li><li><a href="https://ui.qdrant.tech/#/" target="_blank" rel="noreferrer">https://ui.qdrant.tech/#/</a></li></ul></li></ul><p>将本地答案数据集，转为向量存储到向量数据 当用户输入查询的问题时，把问题转为向量然后从向量数据库中查询相近的答案topK 这个时候其实就是我们最普遍的问答查询方案，在没有GPT的时候就直接返回相关的答案整个流程就结束了 现在有GPT了可以优化回答内容的整体结构，在单纯的搜索场景下其实这个优化没什么意义。但如果在客服等的聊天场景下，引用相关领域内容回复时，这样就会显得不那么的突兀。</p><p>-- 前提是：先将初始化数据通过embeddings 转换为向量数据存储到空间数据库 qdrant</p><p>-- 调用接口将输入文本转变为向量 <a href="https://api.openai.com/v1/embeddings" target="_blank" rel="noreferrer">https://api.openai.com/v1/embeddings</a></p><ul><li>Embedding 理论讲解</li><li><a href="https://zhuanlan.zhihu.com/p/164502624" target="_blank" rel="noreferrer">https://zhuanlan.zhihu.com/p/164502624</a></li><li><a href="https://mp.weixin.qq.com/s/RQN0y2l9thv0yIOx-LW3Pw" target="_blank" rel="noreferrer">https://mp.weixin.qq.com/s/RQN0y2l9thv0yIOx-LW3Pw</a></li></ul>',10),s=[n];function i(c,l,o,p,h,b){return a(),t("div",null,s)}const u=e(d,[["render",i]]);export{_ as __pageData,u as default};
