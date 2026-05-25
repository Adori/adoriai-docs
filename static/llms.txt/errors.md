# Errors

This page describes common API error responses and how to handle them.

## Error response format

Most API errors return JSON in this shape:

```json
{
  "error": "Human-readable error message"
}
```

Some endpoints may include additional metadata for debugging.

## HTTP status codes

### 400 Bad Request

The request payload is invalid or missing required fields.

### 401 Unauthorized

The `Authorization` header is missing, malformed, or the API key is invalid.

### 403 Forbidden

The API key is valid but does not have permission to access the resource.

### 404 Not Found

The requested resource does not exist (for example, an invalid `projectId`).

### 409 Conflict

The request conflicts with current resource state.

### 422 Unprocessable Entity

The payload is structurally valid but fails domain validation.

### 429 Too Many Requests

Rate limit exceeded. Retry after a delay with exponential backoff.

### 500 Internal Server Error

An unexpected server error occurred.

### 503 Service Unavailable

The service is temporarily unavailable. Retry later.

## Troubleshooting checklist

- Verify the endpoint path and HTTP method.
- Confirm the `Authorization: Bearer YOUR_API_KEY` header is present.
- Validate required fields and field types in your request body.
- Retry idempotent requests with exponential backoff for `429` and `503`.
- Include request details and timestamps when contacting support.
