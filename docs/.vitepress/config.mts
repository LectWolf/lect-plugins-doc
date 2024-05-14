import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "次梦插件",
  description: "次梦Minecraft插件文档",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '插件文档', link: '/lectbili' }
    ],

    sidebar: [
      {
        text: '次梦插件',
        items: [
          { text: '[哔哩]LectBili', link: '/lectbili' },
          { text: '[互联]WsConnect', link: '/wsconnect' }
        ]
      }
    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
