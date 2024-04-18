import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "HoronDoc",
  description: "Horon's Document",
  lang: 'zh-CN',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'https://bu.dusays.com/2023/02/05/63dfc7f2ced91.png',
    nav: [
      { text: '家', link: '/' },
      { text: 'HoronGPT', link: '/HoronGPT/HoronGPT' }
    ],
    siteTitle: 'HoronDoc',
    sidebar: {
      // 当用户位于 `HoronGPT` 目录时，会显示此侧边栏
      '/HoronGPT/': [
        {
          text: 'HoronGPT',
          items: [
            { text: ' 概述', link: '/HoronGPT/HoronGPT' },
            { text: '费率&额度', link: '/HoronGPT/Charge&Limit' },
            { text: 'VIP&优惠', link: '/HoronGPT/VIP&Favourable' },
            { text: '常见问题', link: '/HoronGPT/FAQ' }
          ]
        }
      ],
      // 当用户位于 `HaoYueCloud` 目录时，会显示此侧边栏
      '/HaoYueCloud/': [
        {
          text: '皓月云计算',
          items: [
            { text: '官网', link: 'https://cloud.haoyue.ltd/' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/HoronLee' }
    ]
  }
})
