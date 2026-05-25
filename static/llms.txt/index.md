# Welcome to Adori AI API

Create AI-powered video projects, track generation progress, upload media, and
queue renders through Adori AI Studio APIs.

## Getting Started

To work with Adori APIs, you need:

1. **Adori account** in your target workspace
2. **Base URL** for your environment (for production, typically
   `https://app.adoriai.com`)
3. **API key** from Settings
4. **Authentication header** on every request:
   `Authorization: Bearer YOUR_API_KEY`

## Quick Example

### Queue video generation data

```bash
curl -X POST https://app.adoriai.com/api/generate-video-data \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{
    "method": "Idea to Video",
    "idea": "5 growth tips for startup founders",
    "tone": "professional",
    "audience": "startup founders",
    "platform": "youtube",
    "duration": 60,
    "language": "English",
    "orientation": "portrait"
  }'
```

### Check generated project status

```bash
curl -X GET https://app.adoriai.com/api/projects/PROJECT_ID \
  -H "Authorization: Bearer YOUR_API_KEY"
```

## Core Workflow

1. `POST /api/generate-video-data` to queue content-to-video generation
2. Poll `GET /api/projects/{projectId}` to monitor `status` and `pipelineStep`
3. Optionally inspect Inngest run details with
   `GET /api/clipper-run-status?eventId={eventId}`
4. Queue final render with `POST /api/render-video`
5. Track render lifecycle with `GET /api/render-jobs` or paginated variant

## Media Upload Workflow

1. `POST /api/media/initiate` to receive signed upload URL
2. Upload file to Supabase storage with returned token/URL
3. `POST /api/media/complete` to finalize DB metadata
4. Optionally poll `GET /api/media/status/{id}`

## What’s Next?

- [Authentication](/authentication)
- [Generate Video Data](/api/generate-video-data)
- [Project Status](/api/project-status)
- [Media Upload](/api/media-upload)
- [Voices](/api/voices)
- [Brand Kit](/api/brand-kit)
- [Render](/api/render)
- [Shorts](/api/shorts)
- [Usage](/api/usage)
