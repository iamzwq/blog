import { defineConfig } from "vitepress";

const otherItems = [
  {
    text: "前端仔电脑要装的",
    link: "/other/前端仔电脑要装的",
  },
  {
    text: "好用的电脑软件",
    link: "/other/好用的电脑软件",
  },
  {
    text: "浏览器插件",
    link: "/other/browser-plugins",
  },
  {
    text: "cus",
    link: "/other/cus",
  },
];

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/blog/",
  title: "相当哇塞",
  description: "再多一眼看一眼就会爆炸 💥",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/ikun01.webp",
    // siteTitle: 'iKun',
    nav: [
      { text: "主页", link: "/" },
      {
        text: "前端",
        items: [
          { text: "前端", link: "/frontend/项目搭建-eslint" },
          { text: "VSCode", link: "/vscode/index" },
        ],
      },
      { text: "Other", items: otherItems },
      {
        text: "我的掘金",
        link: "https://juejin.cn/user/3087084382068286/posts",
      },
    ],

    sidebar: {
      "/frontend": [
        {
          text: "前端",
          items: [
            { text: "项目搭建配置之eslint", link: "/frontend/项目搭建-eslint" },
            { text: "git常用指令", link: "/frontend/git-command" },
            { text: "axios封装", link: "/frontend/axios封装" },
            { text: "原型链和继承", link: "/frontend/原型链和继承" },
            { text: "tsconfig.json", link: "/frontend/tsconfigjson" },
            { text: "常用工具函数", link: "/frontend/工具函数" },
          ],
        },
      ],
      "/vscode": [
        {
          text: "VSCode",
          items: [
            { text: "插件", link: "/vscode/index" },
            { text: "设置文件", link: "/vscode/settings" },
            { text: "代码片段", link: "/vscode/snippets" },
          ],
        },
      ],
      "/other": otherItems,
    },

    socialLinks: [{ icon: "github", link: "https://github.com/iamzwq" }],
  },
});
