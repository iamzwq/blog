<script setup>
  const list = [
    {
      title: "影视资源",
      children: [
        {
          text: "电影狗",
          link: "https://www.dianyinggou.com/",
          icon: "https://www.dianyinggou.com/favicon.ico",
          intro: "影视在线聚合搜索",
        },
        {
          text: "7080影视搜",
          link: "https://7080.wang/",
          icon: "https://7080.wang/img/favicon.png",
          intro: "影视在线聚合搜索",
        },
        {
          text: "搜片",
          link: "https://soupian.xyz/",
          icon: "https://soupian.xyz/images/icon.png",
          intro: "影视在线聚合搜索",
        },
        {
          text: "茶杯狐",
          link: "https://cupfox.app/",
          icon: "https://picx.zhimg.com/80/v2-de36e385e59fcca2df694b76f108431a.png",
          intro: "影视在线聚合搜索",
        },
        {
          text: "悟空视频",
          link: "https://wukongshipin.com/",
          icon: "https://wukongshipin.com/favicon.ico",
          intro: "影视在线聚合搜索",
        },
        {
          text: "全影网",
          link: "https://quanying.cc/",
          icon: "https://quanying.cc/mxtheme/images/favicon.png",
          intro: "在线观看",
        },
        {
          text: "人人影视",
          link: "https://yyets.dmesg.app/search",
          icon: "https://yyets.dmesg.app/svg/logo.svg",
          intro: "电驴/磁力/网盘下载",
        },
        {
          text: "番薯影视",
          link: "https://www.ys900.com/",
          icon: "https://www.ys900.com/favicon.ico",
          intro: "在线观看",
        },
        {
          text: "电影先生",
          link: "https://dianyi.ng/",
          icon: "https://dianyi.ng/static/picture/logo.png",
          intro: "在线观看",
        },
        {
          text: "低端影视",
          link: "https://ddys.art/",
          icon: "https://ddys.art/favicon-16x16.png",
          intro: "在线观看",
        },
        {
          text: "美剧天堂",
          link: "https://www.meijutt.tv/",
          icon: "https://www.meijutt.tv/favicon.ico",
          intro: "在线/磁力/度盘/迅雷",
        },
      ],
    },
    {
      title: "工具网站",
      children: [
        {
          text: "SourceForge",
          link: "https://sourceforge.net/",
          icon: "https://a.fsdn.com/con/img/sandiego/logo-180x180.png",
          intro: "全球最大的开源软件库",
        },
        {
          text: "PDF24 Tools",
          link: "https://tools.pdf24.org/zh/",
          icon: "https://tools.pdf24.org/static/img/pdf24.png?v=5cf19973",
          intro: "免费且易于使用的在线PDF工具",
        },
        {
          text: "RemoveBG",
          link: "https://www.remove.bg/zh",
          icon: "https://www.remove.bg/favicon-16x16.png?v=YAXaAv7pao",
          intro: "图片去除背景",
        },
        {
          text: "Bgsub",
          link: "https://bgsub.cn/webapp/",
          icon: "https://bgsub.cn/webapp/favicon.ico",
          intro: "消除或者替换图像背景，无需上传图像",
        },
        {
          text: "TinyPNG",
          link: "https://tinypng.com/",
          icon: "https://tinypng.com/images/favicon.ico",
          intro: "图片压缩",
        },
        {
          text: "稿定抠图",
          link: "https://koutu.gaoding.com/",
          icon: "https://st-gdx.dancf.com/assets/20190910-143749-32a5.png",
          intro: "在线抠图",
        },
        {
          text: "虫部落快搜",
          link: "https://search.chongbuluo.com/",
          icon: "https://search.chongbuluo.com/favicon.ico",
          intro: "快搜,虫部落快搜,聚合搜索引擎,虫搜,虫搜索,搜索快人一步",
        },
        {
          text: "File Converter",
          link: "https://file-converter.org/",
          icon: "https://file-converter.org/favicon.ico",
          intro: "文件转换",
        },
        {
          text: "AI工具集",
          link: "https://ai-bot.cn/",
          icon: "https://ai-bot.cn/wp-content/uploads/2023/03/ai-bot-square-logo.png",
          intro: "AI工具集导航",
        },
        {
          text: "阿虚的储物间",
          link: "https://axutongxue.com/",
          icon: "https://axutongxue.com/favicon.ico",
          intro: "阿虚同学的储物间",
        },
        {
          text: "切九图",
          link: "https://v.magiconch.com/sns-image",
          icon: "https://v.magiconch.com/favicon.ico",
          intro: "在线切九宫格、四宫格",
        },
        {
          text: "favicon在线制作",
          link: "https://tool.lu/favicon/",
          icon: "https://oss.tool.lu/cache/202305/23/10433518c2twazw811vwaa.jpg.icon.ico",
          intro: "favicon在线制作",
        },
      ],
    },
    {
      title: "音乐网站",
      children: [
        {
          text: "MyFreeMP3",
          link: "https://tools.liumingye.cn/music/#/",
          icon: "https://npm.elemecdn.com/@liumingye/cdn2/favicon.ico",
          intro: "免费音乐",
        },
        {
          text: "音乐磁场HIFINI",
          link: "https://www.hifini.com/forum-1.htm",
          icon: "https://www.hifini.com/view/img/favicon.ico",
          intro: "音乐磁场",
        },
        {
          text: "下载吧音乐下载",
          link: "https://music.y444.cn/#/",
          icon: "https://static.music.y444.cn/static/img/logo.397ed8f7.png",
          intro: "音乐免费下载",
        },
        {
          text: "MP3 malina",
          link: "https://mp3-banana.pro/",
          icon: "https://favicon.rss.ink/v1/aHR0cHM6Ly9tcDMtYmFuYW5hLnBybw==",
          intro: "音乐免费下载",
        },
      ],
    },
    {
      title: "ChatGPT",
      children: [
        {
          text: "Chat8",
          link: "https://ai.chat86.co/#/home",
          icon: "https://ai.chat86.co/chat8.ico",
          intro: "Chat8",
        },
        {
          text: "小莓用AI",
          link: "https://ai.usesless.com/scene/home",
          icon: "https://static.usesless.com/favicon.svg",
          intro: "chatgpt",
        },
        {
          text: "AiDuTu",
          link: "https://chat.aidutu.cn/#/chat/1002",
          icon: "https://cdn.aidutu.cn/res/head/ai.png",
          intro: "chatgpt",
        },
        // { text: "ChatGPT中文网", link: "https://chat.gptchinese.com/" },
        {
          text: "NewBing",
          link: "https://bing.vcanbb.top/web/#/",
          icon: "https://bing.vcanbb.top/web/img/logo.svg",
          intro: "BingAI - 聊天",
        },
      ],
    },
    {
      title: "壁纸图片",
      children: [
        {
          text: "Wallhaven",
          link: "https://wallhaven.cc/",
          icon: "https://wallhaven.cc/favicon.ico",
          intro: "Awesome Wallpapers",
        },
        {
          text: "wallroom",
          link: "https://wallroom.io/",
          icon: "https://wallroom.io/img/favicon.ico",
          intro: "HD/4K/5K Resolution Wallpapers/Backgrounds ▪ Wallroom.io",
        },
        {
          text: "Gratisography",
          link: "https://gratisography.com/",
          icon: "https://gratisography.com/wp-content/themes/gratis-v3/favicon.png",
          intro: "脑洞设计师独立网站",
        },
        {
          text: "Alpha Coders",
          link: "https://alphacoders.com/",
          icon: "https://static.alphacoders.com/icons/favicon-16x16.png",
          intro: "Your Source For Wallpapers, Art, Photography, Gifs and More",
        },
        {
          text: "wallpaperscraft",
          link: "https://wallpaperscraft.com/",
          icon: "https://wallpaperscraft.com/public/img/general/favicon.ico?v=573e30fa",
          intro: "Desktop wallpapers hd, free desktop backgrounds",
        },
        {
          text: "3G壁纸",
          link: "https://www.3gbizhi.com/",
          icon: "https://www.3gbizhi.com/assets/mobile/images/favicon.ico",
          intro: "手机壁纸，壁纸图片，图片大全，明星图片大全，美女图片",
        },
        {
          text: "Magic Eden",
          link: "https://magiceden.io/",
          icon: "https://magiceden.io/img/favicon/android-chrome-192x192.png",
          intro: "NFT Marketplace",
        },
      ],
    },
    {
      title: "装机必备",
      children: [
        {
          text: "Geek Uninstall",
          link: "https://geekuninstaller.com/",
          icon: "https://geekuninstaller.com/favicon.ico",
          intro: "免费软件彻底卸载工具",
        },
        {
          text: "Snipaste",
          link: "https://zh.snipaste.com/",
          icon: "https://zh.snipaste.com/favicon.ico",
          intro: "截图 + 贴图，提高您的工作效率",
        },
        {
          text: "7-Zip",
          link: "https://www.7-zip.org/",
          icon: "https://www.7-zip.org/favicon.ico",
          intro: "7-Zip",
        },
        {
          text: "IDM",
          link: "https://www.internetdownloadmanager.com/",
          icon: "https://www.internetdownloadmanager.com/favicon.ico",
          intro: "网络多线程下载神器",
        },
        {
          text: "NDM",
          link: "http://www.neatdownloadmanager.com/index.php/en/",
          icon: "http://www.neatdownloadmanager.com/templates/neat/favicon.ico",
          intro: "网络多线程下载神器",
        },
        {
          text: "Notepads",
          link: "https://www.notepadsapp.com/",
          icon: "https://static.wixstatic.com/media/0fcd80_4839a0a2330145269bb4fc405a43c670%7Emv2.png/v1/fill/w_32%2Ch_32%2Clg_1%2Cusm_0.66_1.00_0.01/0fcd80_4839a0a2330145269bb4fc405a43c670%7Emv2.png",
          intro: "好用的记事本替代软件",
        },
        {
          text: "uTools",
          link: "https://u.tools/",
          icon: "https://u.tools/favicon.ico",
          intro: "新一代效率工具平台",
        },
        {
          text: "OBS",
          link: "https://obsproject.com/zh-cn",
          icon: "https://obsproject.com/favicon-32x32.png",
          intro: "Open Broadcaster Software",
        },
        {
          text: "PotPlayer",
          link: "http://www.potplayercn.com/",
          icon: "http://www.potplayercn.com/wp-content/themes/pot/images/favicon.ico",
          intro: "万能格式影音视频播放器",
        },
        {
          text: "Ditto",
          link: "https://ditto-cp.sourceforge.io/",
          icon: "https://ditto-cp.sourceforge.io/Ditto2.png",
          intro: "历史剪贴板",
        },
      ],
    },
    {
      title: "插件安装",
      children: [
        {
          text: "Edge扩展商店",
          link: "https://microsoftedge.microsoft.com/addons/Microsoft-Edge-Extensions-Home",
          icon: "https://microsoftedge.microsoft.com/favicon.ico",
          intro: "Edge扩展商店",
        },
        {
          text: "扩展迷",
          link: "https://www.extfans.com/",
          icon: "https://static.extfans.com/sites-resource/extfans/61ea85a31aec3f3365dbe165/icon_1642759665914.jpg",
          intro: "扩展插件商店",
        },
        {
          text: "极简插件",
          link: "https://chrome.zzzmh.cn/#/index",
          icon: "https://chrome.zzzmh.cn/favicon.ico",
          intro: "扩展插件商店",
        },
        {
          text: "Greasy Fork",
          link: "https://greasyfork.org/zh-CN",
          icon: "https://greasyfork.org/vite/assets/blacklogo16-bc64b9f7.png",
          intro: "最佳油猴脚本搜索网站",
        },
      ],
    },
    {
      title: "编程开发",
      children: [
        {
          text: "Git",
          link: "https://git-scm.com/",
          icon: "https://git-scm.com/favicon.ico",
          intro: "版本控制",
        },
        {
          text: "nvm (mac)",
          link: "https://github.com/nvm-sh/nvm",
          icon: "https://api.iconify.design/bi:github.svg",
          intro: "Node版本管理",
        },
        {
          text: "nvm-windows",
          link: "https://github.com/coreybutler/nvm-windows",
          icon: "https://api.iconify.design/bi:github.svg",
          intro: "Node版本管理",
        },
        {
          text: "StackBlitz",
          link: "https://stackblitz.com/",
          icon: "https://c.staticblitz.com/assets/favicon_sb-861fe1b85c0dc928750c62de15fed96fc75e57ee366bd937bad17a3938917b3f.svg",
          intro: "StackBlitz | Instant Dev Environments | Click. Code. Done. - StackBlitz",
        },
        {
          text: "随机图片",
          link: "https://picsum.photos/200/200",
          icon: "",
          intro: "生成随机图片",
        },
        {
          text: "Icônes",
          link: "https://icones.js.org/",
          icon: "https://icones.js.org/favicon.svg",
          intro: "icon集",
        },
        {
          text: "iconify",
          link: "https://iconify.design/",
          icon: "https://iconify.design/favicon.ico",
          intro: "所有流行的icon集",
        },
        {
          text: "Excalidraw",
          link: "https://excalidraw.com/",
          icon: "https://excalidraw.com/favicon.ico",
          intro: "手绘白板工具",
        },
        {
          text: "handraw",
          link: "https://handraw.top/",
          icon: "https://handraw.top/favicon.ico",
          intro: "增强版Excalidraw",
        },
        {
          text: "Haikei",
          link: "https://haikei.app/",
          icon: "https://haikei.app/favicon.ico",
          intro: "配图背景生成器",
        },
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
          v-for="site in item.children"
          class="site-item"
          target="_blank"
          :href="site.link"
          :key="site.link"
          :title="site.intro"
        >
          <div class="site-title">
            <img
              :src="site.icon || 'https://favicon.rss.ink/v1/aHR0cHM6Ly9hcHAuaGFpa2VpLmFwcA=='"
              :alt="site.text"
              class="site-icon"
            />
            <div class="site-name">{{ site.text }}</div>
          </div>
          <div class="site-intro">{{ site.intro }}</div>
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
          flex-direction: column;
          padding: 6px 8px;
          width: 154px;
          gap: 8px;
          overflow: hidden;
          font-weight: bolder;
          border: 1px solid;
          border-radius: 4px;
          transition: all 0.5s;
          .site-title {
            display: flex;
            align-items: center;
            gap: 8px;
            .site-icon {
              width: 1em;
              height: 1em;
              flex-shrink: 0;
            }
            .site-name {
              flex: 1;
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
            }
          }
          .site-intro {
            width: 100%;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            font-size: 14px;
            color: #64748b;
          }
          &:hover {
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
            transform: translate3d(0, -2px, 0);
          }
        }
      }
    }
  }
</style>
