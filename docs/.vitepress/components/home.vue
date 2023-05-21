<script setup>
  const list = [
    { text: "React和Vue的对比", link: "/frontend/react-vs-vue" },
    { text: "项目搭建配置之eslint", link: "/frontend/cli-eslint" },
    { text: "git常用指令", link: "/frontend/git-command" },
    { text: "axios封装", link: "/frontend/axios-wrapper" },
    { text: "原型链和继承", link: "/frontend/prototype-extend" },
    { text: "tsconfig.json", link: "/frontend/tsconfigjson" },
    { text: "常用工具函数", link: "/frontend/frontend-utils" },
    { text: "插件", link: "/vscode/index" },
    { text: "设置文件", link: "/vscode/settings" },
    { text: "代码片段", link: "/vscode/snippets" },
    { text: "浏览器插件", link: "/other/browser-plugins" },
  ]
</script>
<template>
  <ul class="wrapper">
    <li v-for="item in list" :key="item" class="item">
      <a :href="item.link">{{ item.text }}</a>
    </li>
  </ul>
</template>
<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
  .item {
    display: block;
    font-weight: bolder;
    border-radius: 2px;
    transition: all 0.5s;
  }
</style>
