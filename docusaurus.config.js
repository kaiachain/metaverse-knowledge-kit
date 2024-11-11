// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
require('dotenv').config();
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Metaverse Knowledge Kit',
  tagline: 'Seamlessly build your Metaverse on Kaia',
  //@ts-ignore
  url: "https://metaverse-knowledge-kit.kaia.io/",
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/kaia-logo.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: process.env.ORG, // Usually your GitHub org/user name.
  projectName: process.env.PROJECT, // Usually your repo name.
  customFields: {
    teamEmail: process.env.EMAIL,
  },

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    path: 'i18n',
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
    },
  },
  plugins: [
    [
      require.resolve('docusaurus-lunr-search'),
      {
        languages: ['en', 'ko'], // language codes
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
          editUrl:
            'https://github.com/kaiachain/metaverse-knowledge-kit/edit/main',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/kaiachain/metaverse-knowledge-kit/edit/main',
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
      image: 'img/kaia-logo.png',
      navbar: {
        title: 'Metaverse Knowledge Kit',
        logo: {
          alt: 'Kaia Logo',
          src: 'img/kaia-logo.png',
          target: '_self',
          width: 32,
          height: 42,
          className: 'custom-navbar-logo-class',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'search',
            position: 'right',
          },
          {
            href: 'https://github.com/kaiachain/metaverse-knowledge-kit',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Explore other Resources',
            items: [
              {
                label: 'Github',
                href: 'https://github.com/kaiachain',
              },
              {
                label: 'Kaia Docs',
                href: 'https://docs.kaia.io/',
              },
              {
                label: 'Developer Portal',
                href: 'http://developer.kaia.io/',
              },
              {
                label: 'Blog',
                href: 'https://medium.com/kaiachain ',
              },
            ],
          },
          {
            title: 'Join our Dev Community',
            items: [
              {
                label: 'Forum',
                href: 'https://devforum.kaia.io/',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/kaiachain',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/KaiaChain_EN ',
              },
            ],
          },
          {
            title: 'Follow us on Social Media',
            items: [
              {
                label: 'Twitter',
                href: 'https://x.com/KaiaChain ',
              },
              {
                label: 'Dev Twitter',
                href: 'https://x.com/BuildonKaia ',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/kaiachain.dev',
              },
              {
                label: 'Reddit',
                href: 'https://www.reddit.com/r/kaiachain/',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/@kaiachain',
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
