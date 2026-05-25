---
title: Render Jobs (Legacy)
description: Legacy render jobs reference. Use the consolidated Render page for current polling and status guidance.
unlisted: true
---

# Render Jobs

Fetch queued/completed render jobs for the current user or active organization.

## Get Render Jobs

### Endpoint

```text
GET /api/render-jobs
```

Optional query parameter:

- `projectId` to filter by project

### Example Response

```json
{
  "data": [
    {
      "id": "job_123",
      "project_id": "9b1cf6b5-c44f-4a35-b4f1-4f1ad7d2c0af",
      "status": "completed",
      "created_at": "2026-05-25T12:31:10.000Z"
    }
  ],
  "success": true
}
```

## Get Render Jobs (paginated)

### Endpoint

```text
GET /api/render-jobs/paginated?page=1&limit=8
```

Rules:

- `page >= 1`
- `limit >= 1 and <= 100`

### Example Response

```json
{
  "data": [],
  "total": 28,
  "page": 1,
  "limit": 8,
  "success": true
}
```

## cURL

```bash
curl -X GET "https://app.adoriai.com/api/render-jobs/paginated?page=1&limit=8" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

## Error Responses

### 401 Unauthorized

```json
{
  "error": "Unauthorized"
}
```

### 400 Invalid Pagination

```json
{
  "error": "Invalid pagination parameters"
}
```
