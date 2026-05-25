import { themes as prismThemes } from 'prism-react-renderer'
import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'

const config: Config = {
  title: 'Adori AI API Documentation',
  tagline: 'Build video workflows with the Adori AI Studio API',
  favicon: 'img/favicon.ico',
  trailingSlash: false,
  future: {
    v4: true,
  },
  url: 'https://docs.adoriai.com',
  baseUrl: '/',
  organizationName: 'adori-ai',
  projectName: 'adoriai-docs',
  onBrokenLinks: 'throw',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
        },
        blog: false,
        sitemap: {
          filename: 'sitemap.xml',
          changefreq: 'weekly',
          priority: 0.7,
          ignorePatterns: ['/tags/**', '/search/**'],
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    image: 'img/adori-api-og.svg',
    metadata: [
      {
        name: 'description',
        content:
          'Adori AI API documentation for generating videos, managing projects, media uploads, rendering, voices, shorts, and brand kits.',
      },
      {
        name: 'keywords',
        content:
          'Adori API, video API, AI video generation, render API, media upload API, ElevenLabs voices API',
      },
      {
        name: 'robots',
        content:
          'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
      },
      {
        name: 'googlebot',
        content:
          'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Adori AI API Documentation' },
      {
        property: 'og:title',
        content: 'Adori AI API Documentation',
      },
      {
        property: 'og:description',
        content:
          'REST API docs for AI video generation, project workflows, rendering, media uploads, and voice automation.',
      },
      {
        property: 'og:image',
        content: 'https://docs.adoriai.com/img/adori-api-og.svg',
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Adori AI API Documentation' },
      {
        name: 'twitter:description',
        content:
          'REST API docs for AI video generation, project workflows, rendering, media uploads, and voice automation.',
      },
      {
        name: 'twitter:image',
        content: 'https://docs.adoriai.com/img/adori-api-og.svg',
      },
    ],
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Adori AI API',
      logo: {
        alt: 'Adori AI logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo.svg',
      },
      items: [
        {
          to: '/',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://app.adoriai.com',
          label: 'App',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            { label: 'Introduction', to: '/' },
            { label: 'Authentication', to: '/authentication' },
            { label: 'Generate Video Data', to: '/api/generate-video-data' },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Adori AI Studio',
              href: 'https://app.adoriai.com',
            },
            {
              label: 'API Keys',
              href: 'https://app.adoriai.com/settings/api',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Adori AI.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
}

export default config
