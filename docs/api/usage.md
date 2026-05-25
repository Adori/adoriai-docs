---
title: Usage
description: Retrieve current plan limits and organization usage metrics, including projects, storage, and export quotas.
---

# Usage

Retrieve plan details and usage metrics for the active organization/user.

## Endpoint

```text
GET /api/usage
```

## Authentication

API key required:

```bash
Authorization: Bearer YOUR_API_KEY
```

## Success Response

```json
{
  "plan": {
    "type": "free",
    "status": "active",
    "periodStart": "2026-05-01T00:00:00.000Z",
    "periodEnd": "2026-05-31T23:59:59.999Z"
  },
  "usage": {
    "projects": { "used": 2, "max": 3, "percentage": 67 },
    "videoExports": { "used": 0, "max": 0, "percentage": 0 },
    "aiImages": { "used": 7, "max": 20, "percentage": 35 },
    "aiVideos": { "used": 0, "max": 0, "percentage": 0 },
    "teamMembers": { "used": 1, "max": 1, "percentage": 100 },
    "storage": { "used": 410, "max": 1024, "percentage": 40 }
  }
}
```

## cURL

```bash
curl -X GET https://app.adoriai.com/api/usage \
  -H "Authorization: Bearer YOUR_API_KEY"
```

## Error Response

```json
{
  "error": "Unauthorized"
}
```

## Notes

- Usage is tracked against active organization when present
- If no usage record exists, backend initializes one automatically
- Active subscription data overrides stored plan metadata when available
