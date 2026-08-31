import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Farming And Friends Wiki',
  description: 'A comprehensive wiki for Farming And Friends',
  base: '/Farming-And-Friends-WIKI/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/Main/index' }
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://discord.com/invite/DunnGames' }
    ],
    sidebar: {
      '/Main/beginners-guide/': [
        {
          text: 'Getting Started',
          collapsed: false,
          items: [
            { text: 'Introduction', link: '/Main/beginners-guide/Getting-Started/introduction' },
            { text: `Getting Started`, link: `/Main/beginners-guide/Getting-Started/getting-started` }
          ]
        },
        {
          text: `Early Game`,
          collapsed: false,
          items: [
            { text: `Harvesting`, link: `/Main/beginners-guide/Early-Game/Harvesting` },
            { text: `Selling`, link: `/Main/beginners-guide/Early-Game/Selling` },
            { text: `Plowing`, link: `/Main/beginners-guide/Early-Game/Plowing` },
            { text: `Cultivating`, link: `/Main/beginners-guide/Early-Game/Cultivating` },
            { text: `Planting`, link: `/Main/beginners-guide/Early-Game/Planting` }
          ]
        }
      ]
      `/Main/Main/Generalknowledge` : [
        {
          text: 'Shops & landmarks',
          collapsed: false,
          items: [
            { text: `Home`, link: `/Main/Main/GeneralKnowledge/Shops&Landmarks/main`},
            { text: 'Shops', link: '/Main/Main/GeneralKnowledge/Shops&Landmarks/Shops/shops' },
            { text: `Landmarks`, link: `/Main/Main/GeneralKnowledge/Shops&Landmarks/Landmarks/landmarks` }
          ]
        },
                {
          text: 'Factorys & Utilities',
          collapsed: false,
          items: [
            { text: `Home`, link: `/Main/Main/GeneralKnowledge/Shops&Landmarks/main`},
            { text: 'Shops', link: '/Main/Main/GeneralKnowledge/Shops&Landmarks/Shops/shops' },
            { text: `Landmarks`, link: `/Main/Main/GeneralKnowledge/Shops&Landmarks/Landmarks/landmarks` }
          ]
        }

      ]
    }
  },
  head: [
    ['style', {}, `
      .menu-button {
        display: inline-block;
        padding: 12px 24px;
        background-color: rgb(61, 60, 60);
        color: white;
        text-decoration: none;
        border-radius: 8px;
        margin: 8px 4px;
        font-weight: bold;
        transition: background-color 0.3s;
      }
      .menu-button:hover {
        background-color: rgb(61, 60, 60);
      }
    `]
  ]
})
