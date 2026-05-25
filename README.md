# Adori AI API Documentation

This folder contains standalone API documentation for Adori AI Studio, built
with [Docusaurus](https://docusaurus.io/).

## Development

Start the development server:

```bash
cd adoriai-docs
npm install
npm start
```

The documentation will be available at **http://localhost:3001**.

## Build for Production

Build static files:

```bash
cd adoriai-docs
npm run build
```

The built files will be in the `build/` directory.

## Deployment to docs.adoriai.com

This documentation is designed to be deployed as a separate project on a
subdomain.

### Option 1: Move to Separate Repository

1. Create a new repository for documentation
2. Copy this entire `adoriai-docs` folder to the new repository
3. Update the `docusaurus.config.ts`:
   - Set `url` to `https://docs.adoriai.com`
   - Update organization and project name
4. Deploy using your preferred hosting service

### Option 2: Deploy from Current Repo

Deploy the `adoriai-docs` folder as a separate project:

- **Vercel**: Deploy from the `adoriai-docs` directory
- **Netlify**: Configure build root to `adoriai-docs`
- **GitHub Pages**: Use `npm run deploy` with GitHub Pages setup

## Documentation Structure

```text
adoriai-docs/
├── docs/
│   ├── intro.md
│   ├── authentication.md
│   └── api/
│       ├── generate-video-data.md
│       ├── project-status.md
│       ├── render-video.md
│       ├── render-jobs.md
│       ├── media-upload.md
│       └── usage.md
├── src/
│   └── css/
│       └── custom.css
├── docusaurus.config.ts
├── sidebars.ts
└── package.json
```

## Notes

- These docs focus on the current API behavior in `adoriai-studio`.
- Most endpoints are currently intended for authenticated app sessions.
- API key support exists in the platform and can be expanded endpoint-by-endpoint.
