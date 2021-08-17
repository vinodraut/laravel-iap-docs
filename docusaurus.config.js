const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Laravel In-App Purchase',
  tagline: 'The top-notch receipt validator!',
  url: 'https://imdhemy.github.io',
  baseUrl: '/laravel-iap-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'imdhemy',
  projectName: 'laravel-iap-docs',
  trailingSlash: false,
  themeConfig: {
    navbar: {
      title: 'Home',
      logo: {
        alt: 'Laravel IAP',
        src: '/img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Manual',
        },
        {
          type: 'doc',
          docId: 'appstore-iap/intro',
          position: 'left',
          label: 'App Store'
        },
        {
          type: 'doc',
          docId: 'google-play-billing/intro',
          position: 'left',
          label: 'Google Play'
        },
        {
          href: 'https://github.com/imdhemy/laravel-in-app-purchases',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Laravel In-app purchase. Built with Love ❤ ️and PHP 🐘.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/imdhemy/laravel-iap-docs/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/imdhemy/laravel-iap-docs/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
