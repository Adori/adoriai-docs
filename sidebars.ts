import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'

const sidebars: SidebarsConfig = {
  docs: [
    'intro',
    'authentication',
    {
      type: 'category',
      label: 'Guides',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'api/generate-video-data',
          label: 'Generate Video',
        },
        {
          type: 'doc',
          id: 'api/project-status',
          label: 'Project Status',
        },
        {
          type: 'doc',
          id: 'api/media-upload',
          label: 'Media Upload',
        },
        {
          type: 'doc',
          id: 'api/voices',
          label: 'Voices',
        },
        {
          type: 'doc',
          id: 'api/brand-kit',
          label: 'Brand Kit',
        },
        {
          type: 'doc',
          id: 'api/render',
          label: 'Render',
        },
        {
          type: 'doc',
          id: 'api/shorts',
          label: 'Shorts',
        },
        {
          type: 'doc',
          id: 'api/usage',
          label: 'Usage',
        },
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'errors',
          label: 'Errors',
        },
      ],
    },
  ],
}

export default sidebars
