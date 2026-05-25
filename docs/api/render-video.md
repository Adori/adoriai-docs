---
title: Render Video (Legacy)
description: Legacy render endpoint reference. Use the consolidated Render page for current queue, polling, and delete workflow.
unlisted: true
---

# Render Video

Queue a video export render job for an existing project.

## Endpoint

```text
POST /api/render-video
```

## Authentication

```bash
Authorization: Bearer YOUR_API_KEY
```

## Request

`application/json`

### Required fields

- `projectId`
- `userId`
- `inputProps` (must include composition metadata)

### Common fields

- `organizationId`
- `exportResolution` (for example: `1080p`)
- `duration`
- `userEmail`
- `userName`

## Example Request

```json
{
  "projectId": "9b1cf6b5-c44f-4a35-b4f1-4f1ad7d2c0af",
  "userId": "user_123",
  "organizationId": "org_123",
  "exportResolution": "1080p",
  "duration": 58.2,
  "userEmail": "founder@example.com",
  "userName": "Adori User",
  "inputProps": {
    "subtitlePosition": "bottom",
    "compositionHeight": 1920,
    "compositionWidth": 1080,
    "durationInFrames": 1746,
    "exportName": "startup-mvp-video",
    "branding": null
  }
}
```

## Success Response

```json
{
  "ok": true
}
```

## cURL

```bash
curl -X POST https://app.adoriai.com/api/render-video \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{
    "projectId": "9b1cf6b5-c44f-4a35-b4f1-4f1ad7d2c0af",
    "userId": "user_123",
    "organizationId": "org_123",
    "exportResolution": "1080p",
    "duration": 58.2,
    "inputProps": {
      "subtitlePosition": "bottom",
      "compositionHeight": 1920,
      "compositionWidth": 1080,
      "durationInFrames": 1746,
      "exportName": "startup-mvp-video",
      "branding": null
    }
  }'
```

## Error Response

```json
{
  "error": "Internal server error"
}
```

## Next Steps

Track render progress in [Render Jobs](/api/render-jobs).
