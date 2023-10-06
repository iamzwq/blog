import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/blog/",
  title: "Blog",
  titleTemplate: "iamzwq blog",
  description: "iamzwq 的个人博客",

  lastUpdated: true, //以git提交的时间为更新时间

  head: [
    // 网站图标
    ["link", { rel: "icon", type: "image/svg+xml", href: "logo.svg" }],
    // ['link', { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }],
  ],
  markdown: {
    lineNumbers: true, // 是否显示行数，默认false
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/avatar.gif",
    // siteTitle: 'iKun',

    // 默认支持icon包括：'discord'|'facebook'|'github'|'instagram'|'linkedin'|'mastodon'|'slack'|'twitter'|'youtube'
    socialLinks: [
      { icon: "github", link: "https://github.com/iamzwq" },
      // 自定义icon
      // {
      //   icon: { svg: 'Dribbble' },
      //   link: 'https://github.com/iamzwq'
      // }
    ],

    search: {
      // vitepress 内置 search
      provider: "local",
    },

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2023 iamzwq",
    },

    nav: [
      { text: "主页", link: "/" },
      { text: "前端", link: "/frontend/notes/git-command" },
      { text: "其他", link: "/others/favorite-website" },
      // { text: "其他", items: [] },
      {
        text: "我的掘金",
        link: "https://juejin.cn/user/3087084382068286/posts",
      },
    ],

    sidebar: {
      "/frontend": [
        {
          text: "前端笔记",
          items: [
            { text: "React和Vue的对比", link: "/frontend/notes/react-vs-vue" },
            {
              text: "项目搭建配置之eslint",
              link: "/frontend/notes/cli-eslint",
            },
            { text: "git常用指令", link: "/frontend/notes/git-command" },
            { text: "axios封装", link: "/frontend/notes/axios-wrapper" },
            { text: "原型链和继承", link: "/frontend/notes/prototype-extend" },
            { text: "常用工具函数", link: "/frontend/notes/frontend-utils" },
            {
              text: "npm,nvm,yarn相关指令",
              link: "/frontend/notes/npm-nvm-yarn",
            },
            { text: "自定义react hook", link: "/frontend/notes/custom-hook" },
          ],
        },
        {
          text: "VSCode 设置",
          items: [
            { text: "插件", link: "/frontend/vscode/index" },
            { text: "设置文件", link: "/frontend/vscode/settings" },
            { text: "代码片段", link: "/frontend/vscode/snippets" },
          ],
        },
      ],
      "/others": [
        { text: "资源网站", link: "/others/favorite-website" },
        { text: "浏览器插件", link: "/others/browser-plugins" },
      ],
    },
  },
});
