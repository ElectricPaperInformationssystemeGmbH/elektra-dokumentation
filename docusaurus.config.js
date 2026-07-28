// @ts-check
// Docusaurus-Konfiguration für das Elektra-Handbuch (Standortverantwortliche)
// Docs: https://docusaurus.io/docs/configuration

import {themes as prismThemes} from 'prism-react-renderer';
import {createRequire} from 'module';

const require = createRequire(import.meta.url);

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Elektra-Onlinehilfe',
  tagline: 'Wahlmanagement für verteilte Wahlprojekte',
  favicon: 'img/favicon.svg',

  // Beim Deployment anpassen:
  url: 'https://example.com',
  baseUrl: '/',

  onBrokenLinks: 'warn',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'de',
    locales: ['de'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // Das Handbuch bildet die Startseite -> Docs an der Website-Wurzel
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  // Offline-Suche (kein externer Dienst, komplett lokal)
  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import('@easyops-cn/docusaurus-search-local').PluginOptions} */
      ({
        hashed: true,
        language: ['de', 'en'],
        indexDocs: true,
        docsRouteBasePath: '/',
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Onlinehilfe',
        logo: {
          alt: 'Elektra',
          src: 'img/logo.svg',
          srcDark: 'img/logo-dark.svg',
        },
        items: [],
      },
      footer: {
        style: 'dark',
        links: [
          {
            items: [
              {label: 'Wahlen organisieren', href: 'https://wahlen-organisieren.de/'},
              {label: 'Impressum', href: 'https://wahlen-organisieren.de/impressum/'},
              {label: 'Datenschutz', href: 'https://wahlen-organisieren.de/datenschutz/'},
            ],
          },
        ],
        copyright: `© Electric Paper Wahlsysteme ${new Date().getFullYear()} · Elektra Wahlmanagement`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
