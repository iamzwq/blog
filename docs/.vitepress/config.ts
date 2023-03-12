import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/blog/",
  title: "相当哇塞的博客",
  description: "再多一眼看一眼就会爆炸 💥",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "主页", link: "/" },
      { text: "前端", link: "/frontend/front-end-env" },
      { text: "VSCode", link: "/vscode/index" },
      { text: "Other", link: "/other/windows-apps" },
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
            { text: "前端环境", link: "/frontend/front-end-env" },
            { text: "原型链和继承", link: "/frontend/原型链和继承" },
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
      "/other": [
        {
          text: "Windows 软件",
          link: "/other/windows-apps",
        },
        {
          text: "浏览器插件",
          link: "/other/browser-plugins",
        },
      ],
    },

    socialLinks: [{ icon: "github", link: "https://github.com/iamzwq" }],
  },
});
