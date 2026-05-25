---
title: Render
description: Queue render jobs, poll render status, and delete render records for Adori projects through render API endpoints.
---

# Render

Queue render jobs and poll for completion. Most automation should leave
rendering to the Adori UI.

Automation should normally leave rendering to the Adori UI, where users can
preview before render. If rendering from the API is needed, use these
endpoints.

## Queue a render

```text
POST /api/render-video
```

Requires write access (`scope=all`). The project must be visible to the key.

### cURL

```bash
curl -X POST "$ADORI_API_BASE_URL/api/render-video" \
  -H "Authorization: Bearer $ADORI_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{ "projectId": "'$PROJECT_ID'" }'
```

## Poll render jobs

```text
GET /api/render-jobs?projectId={projectId}
```

Returns render jobs visible to the key, newest first.

### cURL

```bash
curl "$ADORI_API_BASE_URL/api/render-jobs?projectId=$PROJECT_ID" \
  -H "Authorization: Bearer $ADORI_API_KEY"
```

### Status values

- `queued`: waiting for a render worker.
- `rendering`: render is in progress.
- `completed`: `videoUrl` is available.
- `failed`: inspect `error` for cause.

Recommended polling interval: 10s.

## Delete a render job

```text
DELETE /api/delete-render-job/{id}
```

Requires write access. This removes the render record but does not affect the
project.
