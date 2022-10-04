// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Adyeshach',
  tagline: '虚拟实体解决方案',
  url: 'https://github.com/taboolib/adyeshach',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'taboolib', // Usually your GitHub org/user name.
  projectName: 'adyeshach', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  plugins: [
    
  ],

  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        indexPages: true,
        hashed: true,
        language: ["en", "zh"],
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          blogTitle: '灵感',
          blogSidebarTitle: '全部灵感',
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        hideOnScroll: true,
        title: 'Adyeshach',
        logo: {
          src: 'img/icon Alpha.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'start',
            position: 'left',
            label: '开始',
          },
          {
              to: '/blog', 
              label: '灵感', 
              position: 'left'
          },
          {
            href: 'https://github.com/taboolib/adyeshach',
            label: '源代码',
            position: 'right',
          },
        ],
      },
      footer: {
        copyright: `Copyright © 2015 ~ ${new Date().getFullYear()} <b>TABOO-PROJECT</b> All Rights Reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
