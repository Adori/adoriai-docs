# Shorts

Queue the shorts workflow to slice long-form video into multiple clips.

```text
POST /api/create-shorts
```

Queues the shorts workflow. Requires write access (`scope=all`). The
authenticated `userId` and `organizationId` are supplied by the server from the
API key or session.

## Request body

```ts
type CreateShortsRequest = {
  projectTitle?: string
  videoUrl: string
  thumbnail?: string | null
  duration?: number
  sourceType?: 'url' | 'upload'
  metadata?: {
    platform?: string
    storagePath?: string
    sizeLabel?: string
    videoMetadata?: {
      title?: string
      thumbnail?: string
      duration?: number
      platform?: string
      downloadUrl?: string
    }
  }
}
```

## Example

```bash
curl -X POST "$ADORI_API_BASE_URL/api/create-shorts" \
  -H "Authorization: Bearer $ADORI_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "projectTitle": "Interview clips",
    "videoUrl": "https://www.youtube.com/watch?v=VIDEO_ID",
    "sourceType": "url",
    "duration": 3600,
    "metadata": {
      "platform": "youtube"
    }
  }'
```

## Response

```ts
type CreateShortsResponse = {
  eventId: string
}
```

The created project is saved asynchronously by the Inngest `create-shorts`
workflow. Poll the projects list to find the resulting projects.
