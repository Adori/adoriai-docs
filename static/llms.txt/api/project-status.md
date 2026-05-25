# Project Status

Use project endpoints to poll generation progress and access full generated
project data.

## Get Project by ID

### Endpoint

```text
GET /api/projects/{projectId}
```

### Authentication

API key required:

```bash
Authorization: Bearer YOUR_API_KEY
```

### Example Response

```json
{
  "projectId": "9b1cf6b5-c44f-4a35-b4f1-4f1ad7d2c0af",
  "projectName": "How to build a startup MVP in 7 days",
  "method": "Idea to Video",
  "status": "processing",
  "pipelineStep": "processing-scenes",
  "errorMessage": null,
  "orientation": "portrait",
  "duration": 58.2,
  "scenes": []
}
```

`status` values:

- `queued`
- `processing`
- `ready`
- `failed`

## List Projects (paginated)

### Endpoint

```text
GET /api/projects?page=1&limit=8
```

### Example Response

```json
{
  "projects": [
    {
      "projectId": "9b1cf6b5-c44f-4a35-b4f1-4f1ad7d2c0af",
      "projectName": "How to build a startup MVP in 7 days",
      "status": "ready",
      "pipelineStep": null
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 8,
    "totalCount": 14,
    "totalPages": 2,
    "hasNext": true,
    "hasPrev": false
  }
}
```



## cURL

```bash
curl -X GET https://app.adoriai.com/api/projects/9b1cf6b5-c44f-4a35-b4f1-4f1ad7d2c0af \
  -H "Authorization: Bearer YOUR_API_KEY"
```

## Error Responses

### 401 Unauthorized

```json
{
  "error": "Unauthorized"
}
```

### 404 Not Found

```json
{
  "error": "Project not found"
}
```
