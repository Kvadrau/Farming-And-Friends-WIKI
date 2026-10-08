import { defineConfig } from 'vitepress'

const beginnersGuideSidebar = [
  { text: 'Home', link: '/index' },
  {
    text: 'Getting Started',
    collapsed: false,
    items: [
      { text: 'Introduction', link: '/Getting-Started/Introduction' },
      { text: 'Getting Started', link: '/Getting-Started' }
    ]
  },
  {
    text: 'Early Game',
    collapsed: false,
    items: [
      { text: 'Harvesting', link: '/Early-Game/Harvesting' },
      { text: 'Selling', link: '/Early-Game/Selling' },
      { text: 'Plowing', link: '/Early-Game/Plowing' },
      { text: 'Cultivating', link: '/Early-Game/Cultivating' },
      { text: 'Planting', link: '/Early-Game/Planting' }
    ]
  }
]


const generalKnowledgeSidebar = [

  { text: 'Home', link: '/index' },

  {
    text: 'Shops & landmarks',
    collapsed: false,
    items: [
      { text: 'Shops', link: '/Shops' },
      { text: 'Landmarks', link: '/Landmarks' }
    ]
  },

  {
    text: 'Factories & Utilities',
    collapsed: false,
    items: [
      { text: 'Factorys', link: '/Factories/main' },
      { text: 'Utilities', link: '/Utilities/main' }
    ]
  },

  {
    text: 'Liscenses',
    collapsed: false,
    items: [
      { text: 'Animals', link: '/Liscenses/Animal-Liscenses' },
      { text: 'Farming', link: '/Liscenses/Farming-Liscenses' },
      { text: 'Logistics', link: '/Liscenses/Logistics-Liscenses' }
    ]
  },

  {
    text: 'Animals',
    collapsed: false,
    items: [
      { text: 'Bees', link: '/Animals/bees' },
      { text: 'Chickens', link: '/Animals/chickens' },
      { text: 'Cows', link: '/Animals/cows' },
      { text: 'Sheep', link: '/Animals/sheep' }
    ]
  },

  {
    text: 'Miscellaneous',
    collapsed: false,
    items: [
      { text: 'FAQ', link: '/faq' },
      { text: 'Update Logs', link: '/updates/main' },
      { text: 'Trading', link: '/trading' },
      { text: 'Worker Permissions', link: '/workerPermissions' }
    ]
  }

]
export default defineConfig({
  title: 'Farming And Friends Wiki',

  description: 'The Official Farming And Friends Wiki - guides, shops, landmarks, events, companies, locations and more.',
  base: '/',
  cleanUrls: true,
  // Shortens URLs while keeping your existing file structure
  rewrites(id) {
    let path = id



    // =========================
    // BEGINNERS GUIDE
    // =========================

    if (id === 'Main/beginners-guide/Getting-Started/Getting-Started.md') {
      path = 'Getting-Started.md'
    }

    else if (id.startsWith('Main/beginners-guide/Early-Game/')) {
      path = id.replace(
        /^Main\/beginners-guide\//,
        ''
      )
    }

    else if (id.startsWith('Main/beginners-guide/Getting-Started/')) {
      path = id.replace(
        /^Main\/beginners-guide\//,
        ''
      )
    }

    else if (id === 'Main/beginners-guide/index.md') {
      path = 'beginners-guide.md'
    }


    // =========================
    // GENERAL KNOWLEDGE
    // =========================

    else if (id.startsWith('Main/Main/GeneralKnowledge/')) {

      path = id.replace(
        /^Main\/Main\/GeneralKnowledge\//,
        ''
      )

      // Shops
      if (path.startsWith('Shops&Landmarks/Shops/')) {
        const page = path.replace(
          /^Shops&Landmarks\/Shops\//,
          ''
        )

        path = `Shops/${page}`
      }

      // Landmarks
      else if (path.startsWith('Shops&Landmarks/Landmarks/')) {
        const page = path.replace(
          /^Shops&Landmarks\/Landmarks\//,
          ''
        )

        path = `Landmarks/${page}`
      }

      // Factories
      else if (path.startsWith('Factorys&Utilities/Factories/')) {
        const page = path.replace(
          /^Factorys&Utilities\/Factories\//,
          ''
        )

        path = `Factories/${page}`
      }

      // Utilities
      else if (path.startsWith('Factorys&Utilities/Utilities/')) {
        const page = path.replace(
          /^Factorys&Utilities\/Utilities\//,
          ''
        )

        path = `Utilities/${page}`
      }

      // Licenses
      else if (path.startsWith('Liscenses/')) {

        const page = path.replace(
          /^Liscenses\//,
          ''
        )

        path = `Liscenses/${page}`
      }

      // Animals
      else if (path.startsWith('Animals/')) {
        const page = path.replace(
          /^Animals\//,
          ''
        )

        path = `Animals/${page}`
      }

      // Miscellaneous
      else if (path.startsWith('Misc/')) {
        path = path.replace(
          /^Misc\//,
          ''
        )
      }
    }

    // =========================
    // MAIN WIKI PAGE
    // =========================
    
    // =========================
    // EVENTS
    // =========================
    else if (id.startsWith('Main/Main/Events/')) {
      path = id.replace(
        /^Main\/Main\/Events\//,
        'Events/'
      )
    }
    // =========================
    // SEEDS
    // =========================

    else if (id.startsWith('Main/Seeds/')) {
      path = id.replace(/^Main\/Seeds\//, '')
    }

    // =========================
    // COMPANY
    // =========================

    else if (id.startsWith('Main/Main/Company/')) {
      path = id.replace(
        /^Main\/Main\/Company\//,
        'Company/'
      )
    }


    // =========================
    // AUTO COLLAPSE SAME-NAME PAGES
    // =========================

    const parts = path.split('/')

    if (parts.length >= 2) {
      const file = parts.pop()

      if (file && file.endsWith('.md')) {
        const filename = file.slice(0, -3)
        const parent = parts[parts.length - 1]

        if (
          parent &&
          filename.toLowerCase() === parent.toLowerCase()
        ) {
          path = `${parts.join('/')}.md`
        }
      }
    }

    return path
  },
  sitemap: {
    hostname: 'https://farming-and-friends-wiki.com'
  },
  themeConfig: {
    logo: '/Logo.png',
    nav: [
      { text: 'Home', link: '/index' }
    ],

    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: 'discord', link: 'https://discord.com/invite/DunnGames' }
    ],
    sidebar: {
      '/Getting-Started': beginnersGuideSidebar,
      '/Getting-Started/': beginnersGuideSidebar,
      '/Early-Game/': beginnersGuideSidebar,

      '/General-Knowledge': generalKnowledgeSidebar,
      '/Factorys&Utilities':generalKnowledgeSidebar,
      '/Shops': generalKnowledgeSidebar,
      '/Landmarks': generalKnowledgeSidebar,
      '/Factories': generalKnowledgeSidebar,
      '/Utilities': generalKnowledgeSidebar,
      '/Liscenses': generalKnowledgeSidebar,
      '/Animals': generalKnowledgeSidebar,
      '/Misc': generalKnowledgeSidebar,

      '/General-Knowledge/': [
        { text: 'Home', link: '/index' },
        {
          text: 'Shops & landmarks',
          collapsed: false,
          items: [
            { text: 'Shops', link: '/Shops' },
            { text: `Landmarks`, link: `Landmarks` }
          ]
        },
        {
          text: 'Factories & Utilities',
          collapsed: false,
          items: [
            { text: 'Factorys', link: '/Factories/main' },
            { text: `Utilities`, link: `/Utilities/main` }
          ]
        },
        {
          text: 'Liscenses',
          collapsed: false,
          items: [
            { text: 'Animals', link: '/Liscenses/Animal-liscenses' },
            { text: 'Farming', link: '/Liscenses/Farming-Liscenses' },
            { text: 'Logistics', link: '/Liscenses/Logistics-Liscneses' }
          ]
        },
        {
          text: 'Animals',
          collapsed: false,
          items: [
            { text: 'Bees', link: '/Main/Main/GeneralKnowledge/Animals/bees' },
            { text: 'Chickens', link: '/Main/Main/GeneralKnowledge/Animals/chickens' },
            { text: 'Cows', link: '/Main/Main/GeneralKnowledge/Animals/cows' },
            { text: 'Sheep', link: '/Main/Main/GeneralKnowledge/Animals/sheep' }
          ]
        },
        {
          text: 'Miscellaneous',
          collapsed: false,
          items: [
            { text: 'FAQ', link: '/Main/Main/GeneralKnowledge/Misc/faq' },
            { text: 'Update Logs', link: '/Main/Main/GeneralKnowledge/Misc/updates/main' },
            { text: 'Trading', link: '/Main/Main/GeneralKnowledge/Misc/trading' },
            { text: 'Worker Permissions', link: '/Main/Main/GeneralKnowledge/Misc/workerPermissions' }

          ]
        }
      ],
      '/Company/': [
        { text: 'Home', link: '/index' }
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
