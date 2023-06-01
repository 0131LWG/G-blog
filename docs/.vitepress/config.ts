import { link } from "fs"
import { text } from "stream/consumers"
import { defineConfig } from "vitepress"

export default defineConfig({
  title: "GUAN的博客",
  // description: "hello world",
  ignoreDeadLinks: true,
  base: "/G-blog/",
  head: [["link", { rel: "icon", type: "image/svg+xml", href: "logo.jpg" }]],
  lastUpdated: true,
  themeConfig: {
    logo: "/logo.jpg",
    nav: [
      { text: "首页", link: "/" },
      { text: "我的笔记", link: "/daily/" },
      { text: "前端总结", link: "/webDeveloper/" },
      { text: "后端总结", link: "/serverDeveloper/" },
      { text: "视频剪辑", link: "/aehyok/video/" },
      { text: "我的掘金", link: "https://juejin.cn/user/2928754707932103" },
      { text: "关于我", link: "/me/" }
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/aehyok" }],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2023-05-10～present GUAN"
    },

    sidebar: {
      "/daily/": [
        {
          text: "2023年每日笔记",
          items: [{ text: "2023-06", link: "/daily/2023-06" },{ text: "2023-05", link: "/daily/2023-05" }]
        }
      ],
      "/webDeveloper/": [
        {
          text: "JavaScript积累",
          items: [
            {
              text: "vue",
              items: [
                {
                  text: "vue",
                  items: [
                    { text: "数据元配置和vxe-table结合", link: "/webDeveloper/vue/数据元配置和vxe-table结合" },
                    { text: "vue ts和js混用", link: "/webDeveloper/vue/vue ts和js混用" }
                  ]
                }
              ]
            },
            {
              text: "react",
              items: []
            },
            {
              text: "javascript",
              items: []
            },
            {
              text: "app",
              items: [
                { text: "taro分离模式开发app(环境安装)", link: "/webDeveloper/app/taro分离模式开发app(环境安装)" },
                { text: ".keystore文件", link: "/webDeveloper/app/.keystore文件" },
                { text: "uni-app打包上架", link: "/webDeveloper/app/uni-app打包上架" }
              ]
            },
            {
              text: "css",
              items: [
                { text: "像素密度", link: "/webDeveloper/css/像素密度" },
                { text: "逻辑像素", link: "/webDeveloper/css/逻辑像素" }
              ]
            }
          ]
        }
      ],
      "/serverDeveloper/": [
        {
          text: "linux",
          items: [
            { text: "常用命令", link: "/serverDeveloper/linux/cmd" },
            { text: "基础配置", link: "/serverDeveloper/linux/config" }
          ]
        },
        {
          text: "mysql",
          items: [{ text: "mac重置密码", link: "/serverDeveloper/mysql/mac重置密码" }]
        }
      ],
      "/aehyok/video/": [
        {
          text: "剪映教程",
          link: "/aehyok/video/001/"
        },
        {
          text: "视频剪辑完整流程",
          link: "/aehyok/video/002/"
        },
        {
          text: "抖音账号搭建",
          link: "/aehyok/video/003/"
        },
        {
          text: "抖音运营技巧",
          link: "/aehyok/video/004/"
        }
      ]
    }
  },
  vite: {
    server: {
      host: true,
      port: 3333,
      open: false,
      proxy: {
        "/so": {
          target: "http://139.159.245.209:5000", // 代理接口
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/so/, "")
        }
      }
    }
  }
})
