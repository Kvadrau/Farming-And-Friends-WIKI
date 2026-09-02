import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Farming And Friends Wiki',

  description: 'The Official Farming And Friends Wiki - guides, shops, landmarks, events, companies, locations and more.',
  base: '/',
  sitemap: {
  hostname: 'https://farming-and-friends-wiki.com'
},
  themeConfig: {
    logo: '/Logo.png',
    nav: [
      { text: 'Home', link: '/index' }
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://discord.com/invite/DunnGames' }
    ],
    sidebar: {
      '/Main/beginners-guide/': [
        { text: 'Home', link: '/index' },
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
      ],
      '/Main/Main/GeneralKnowledge/': [
        { text: 'Home', link: '/index' },
        {
          text: 'Shops & landmarks',
          collapsed: false,
          items: [
            { text: 'Shops', link: '/Main/Main/GeneralKnowledge/Shops&Landmarks/Shops/shops' },
            { text: `Landmarks`, link: `/Main/Main/GeneralKnowledge/Shops&Landmarks/Landmarks/landmarks` }
          ]
        },
                {
          text: 'Factorys & Utilities',
          collapsed: false,
          items: [
            { text: 'Factorys', link: '/Main/Main/GeneralKnowledge/Factorys&Utilities/Factories/main' },
            { text: `Utilities`, link: `/Main/Main/GeneralKnowledge/Factorys&Utilities/Utilities/main` }
          ]
        },
        {
          text: 'Liscenses',
          collapsed: false,
          items:[
            {text: 'Animals', link: '/Main/Main/GeneralKnowledge/Liscenses/Animals/main'},
            {text: 'Farming', link: '/Main/Main/GeneralKnowledge/Liscenses/Farming/main'},
            {text: 'Logistics', link: '/Main/Main/GeneralKnowledge/Liscenses/Logistics/main'}
          ]
        },
        {
          text: 'Animals',
          collapsed: false,
          items:[
            {text: 'Bees', link:'/Main/Main/GeneralKnowledge/Animals/bees'},
            {text: 'Chickens', link: '/Main/Main/GeneralKnowledge/Animals/chickens'},
            {text: 'Cows', link: '/Main/Main/GeneralKnowledge/Animals/cows'},
            {text: 'Sheep', link:'/Main/Main/GeneralKnowledge/Animals/sheep'}
          ]
        },
        {
          text: 'Miscellaneous',
          collapsed: false,
          items:[
            {text: 'FAQ', link: '/Main/Main/GeneralKnowledge/Misc/faq'},
            {text: 'Update Logs', link: '/Main/Main/GeneralKnowledge/Misc/updates/main'},
            {text: 'Trading', link: '/Main/Main/GeneralKnowledge/Misc/trading'},
            {text: 'Worker Permissions', link: '/Main/Main/GeneralKnowledge/Misc/workerPermissions'}

          ]
        }
      ],
      '/Main/Main/Company/': [
        {text: 'Home', link: '/index'}
      ]
    }
  },
  head: [
    ['link', { rel: 'icon', href: '/WikiLogoNoBackground.png' }],
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
       .VPHero .image-src {
        max-width: 250px;
         max-height: 250px;
        }
    `]
  ]
})
