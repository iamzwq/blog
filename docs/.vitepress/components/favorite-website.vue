<script setup>
  const list = [
    {
      title: "影视资源",
      children: [
        { text: "电影狗", link: "https://www.dianyinggou.com/" },
        { text: "搜片", link: "https://soupian.xyz/" },
        { text: "茶杯狐", link: "https://cupfox.app/" },
        { text: "全影网", link: "https://quanying.cc/" },
        { text: "在线之家", link: "https://www.zxzjhd.com/" },
        { text: "人人影视", link: "https://yyets.dmesg.app/search" },
        { text: "番薯影视", link: "https://www.ys900.com/" },
        { text: "电影先生", link: "https://dianyi.ng/" },
        { text: "低端影视", link: "https://ddys.art/" },
        { text: "美剧天堂", link: "https://www.meijutt.tv/" },
      ],
    },
    {
      title: "工具网站",
      children: [
        { text: "docsmall", link: "https://docsmall.com/" },
        { text: "PDF24 Tools", link: "https://tools.pdf24.org/zh/" },
        { text: "RemoveBG", link: "https://www.remove.bg/zh" },
        { text: "Bgsub", link: "https://bgsub.cn/webapp/" },
        { text: "TinyPNG", link: "https://tinypng.com/" },
        { text: "阿虚的储物空间", link: "https://axutongxue.com/" },
        { text: "虫部落快搜", link: "https://search.chongbuluo.com/" },
        { text: "File Converter", link: "https://file-converter.org/" },
        { text: "稿定抠图", link: "https://koutu.gaoding.com/" },
        { text: "AI工具集", link: "https://ai-bot.cn/" },
      ],
    },
    {
      title: "音乐网站",
      children: [
        { text: "MyFreeMP3", link: "https://tools.liumingye.cn/music/#/" },
        { text: "音乐磁场HIFINI", link: "https://www.hifini.com/forum-1.htm" },
        { text: "下载吧音乐下载", link: "https://music.y444.cn/#/" },
      ],
    },
    {
      title: "CharGPT",
      children: [
        { text: "Chat8", link: "https://ai.chat86.co/#/home" },
        { text: "小莓用AI", link: "https://ai.usesless.com/scene/home" },
        { text: "AiDuTu", link: "https://chat.aidutu.cn/#/chat/1002" },
        // { text: "ChatGPT中文网", link: "https://chat.gptchinese.com/" },
        { text: "NewBing", link: "https://bing.vcanbb.top/web/#/" },
      ],
    },
    {
      title: "壁纸图片",
      children: [
        { text: "Wallhaven", link: "https://wallhaven.cc/" },
        { text: "wallroom", link: "https://wallroom.io/" },
        { text: "wallpaperup", link: "https://www.wallpaperup.com/" },
        { text: "Alpha Coders", link: "https://alphacoders.com/" },
        { text: "wallpaperscraft", link: "https://wallpaperscraft.com/" },
        { text: "3G壁纸", link: "https://www.3gbizhi.com/" },
        { text: "Magic Eden", link: "https://magiceden.io/" },
      ],
    },
    {
      title: "装机必备",
      children: [
        { text: "Geek Uninstall", link: "https://geekuninstaller.com/" },
        { text: "Snipaste", link: "https://zh.snipaste.com/" },
        { text: "7-Zip", link: "https://www.7-zip.org/" },
        { text: "IDM", link: "https://www.internetdownloadmanager.com/" },
        { text: "NDM", link: "http://www.neatdownloadmanager.com/index.php/en/" },
        { text: "Notepads", link: "https://www.notepadsapp.com/" },
        { text: "uTools", link: "https://u.tools/" },
        { text: "OBS", link: "https://obsproject.com/zh-cn" },
        { text: "PotPlayer", link: "http://www.potplayercn.com/" },
      ],
    },
    {
      title: "编程开发",
      children: [
        { text: "Git", link: "https://git-scm.com/" },
        { text: "nvm (mac)", link: "https://github.com/nvm-sh/nvm" },
        { text: "nvm-windows", link: "https://github.com/coreybutler/nvm-windows" },
        { text: "icones", link: "https://icones.js.org/" },
      ],
    },
  ]
</script>

<template>
  <ul class="wrapper">
    <li v-for="item in list" :key="item" class="box">
      <h1 class="title">{{ item.title }}</h1>
      <div class="children">
        <a
          :href="site.link"
          target="_blank"
          class="site-item"
          v-for="site in item.children"
          :key="site.link"
          :title="site.link"
        >
          {{ site.text }}
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10s10-4.48 10-10zm-10 2.79V13H9c-.55 0-1-.45-1-1s.45-1 1-1h3V9.21c0-.45.54-.67.85-.35l2.79 2.79c.2.2.2.51 0 .71l-2.79 2.79a.5.5 0 0 1-.85-.36z"
            />
          </svg>
        </a>
      </div>
    </li>
  </ul>
</template>
<style lang="scss">
  li {
    list-style: none;
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 8px;
    .box {
      display: flex;
      flex-direction: column;
      gap: 8px;
      .title {
        font-size: 1.2rem;
        font-weight: 600;
      }
      .children {
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
        .site-item {
          display: flex;
          align-items: center;
          padding: 8px 12px;
          width: 168px;
          justify-content: space-between;
          font-weight: bolder;
          border: 1px solid;
          border-radius: 4px;
          transition: all 0.5s;
          svg {
            flex-shrink: 0;
          }
        }
      }
    }
  }
</style>
