---
title: Authentication
description: Authenticate Adori API requests with Bearer API keys, understand key scopes, and handle common authorization errors.
---

# Authentication

Authenticate API requests with an API key in the `Authorization` header.

## Auth Methods

### API Key

API keys can be created at:

- [https://app.adoriai.com/settings/api](https://app.adoriai.com/settings/api)

Send this header on every authenticated request:

```bash
Authorization: Bearer YOUR_API_KEY
```

Use the same API key from your Adori AI Studio API settings.

## Getting API Keys

1. Open **Settings -> API Keys**
2. Click **Create API Key**
3. Set key name and permission level:
   - **All** (read/write/delete for supported resources)
   - **Read Only**
4. Copy key immediately (it is shown once)

## cURL Example

```bash
curl -X GET "https://app.adoriai.com/api/projects?page=1&limit=8" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

## JavaScript Example

```typescript
const response = await fetch(
  'https://app.adoriai.com/api/projects?page=1&limit=8',
  {
    method: 'GET',
    headers: {
      Authorization: 'Bearer YOUR_API_KEY',
    },
  }
)

const data = await response.json()
```

## Python Example

```python
import requests

headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
}

response = requests.get(
    'https://app.adoriai.com/api/projects?page=1&limit=8',
    headers=headers
)

print(response.status_code, response.text)
```

## Common Errors

### 401 Unauthorized

```json
{
  "error": "Unauthorized"
}
```

### 403 Forbidden

```json
{
  "error": "Access denied - You do not have permission to access this project"
}
```

## Security Best Practices

1. Keep API keys in environment variables
2. Never expose credentials in frontend public code
3. Rotate keys regularly
4. Use least-privilege keys where possible
