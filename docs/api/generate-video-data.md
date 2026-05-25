---
title: Generate Video
description: Queue AI video generation jobs from idea, blog, PDF, audio, or podcast inputs and poll project status until scenes are ready.
---

# Generate Video

Queue an AI project generation job from a blog, PDF, audio, podcast, or raw
idea.

## Endpoint

```text
POST /api/generate-video-data
```

Queues a background project-generation job and returns a `projectId`.

The authenticated `userId` and `organizationId` are always resolved from the
API key (or browser session). Request-supplied identity fields are ignored.

## Authentication

```bash
Authorization: Bearer YOUR_API_KEY
```

## Request body

`application/json`

```ts
type GenerateVideoRequest = {
  idea: string
  blogUrl?: string
  pdfUrl?: string
  pdfFileId?: string
  audioUrl?: string
  audioName?: string
  podcastUrl?: string
  transcriptUrl?: string
  method:
    | 'Idea to Video'
    | 'Blog to Video'
    | 'Text to Video'
    | 'PDF to Video'
    | 'Audio to Video'
    | 'Podcast to Video'
  tone: string
  audience: string
  platform: string
  hook: boolean
  callToAction: boolean
  keywords?: string
  duration: number
  language: string
  orientation: 'landscape' | 'portrait' | 'square'
  autopick: 'stock' | string
  voice: { voice_id: string; name: string } | null
}
```

### Notes

- `idea` is required; for source-driven flows (for example blog), send an empty
  string if you do not have idea text.
- For source fields, provide the one that matches your method:
  - blog: `blogUrl`
  - PDF: `pdfUrl` or `pdfFileId`
  - audio: `audioUrl`
  - podcast: `podcastUrl`
- `voice` can be `null` to let the system select voice behavior.

## Example: blog to video

```bash
curl -X POST "$ADORI_API_BASE_URL/api/generate-video-data" \
  -H "Authorization: Bearer $ADORI_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "idea": "",
    "blogUrl": "https://example.com/blog/post",
    "method": "Blog to Video",
    "tone": "friendly",
    "audience": "general",
    "platform": "youtube",
    "hook": true,
    "callToAction": true,
    "duration": 60,
    "language": "english",
    "orientation": "landscape",
    "autopick": "stock",
    "voice": null
  }'
```

## Response

```ts
type GenerateVideoResponse = {
  projectId: string
  status: 'queued'
  pipelineStep: 'queued'
}
```

```json
{
  "projectId": "9b1cf6b5-c44f-4a35-b4f1-4f1ad7d2c0af",
  "status": "queued",
  "pipelineStep": "queued"
}
```

## Polling for completion

Poll `GET /api/projects/{projectId}` until `status` is `ready` and `scenes` is
populated.

```bash
curl "$ADORI_API_BASE_URL/api/projects/$PROJECT_ID" \
  -H "Authorization: Bearer $ADORI_API_KEY"
```

Recommended interval: 5s for the first minute, then 15s.

## Next steps

1. Fetch the generated project via [Projects](/api/project-status)
2. Queue final export through [Render Video](/api/render-video)
