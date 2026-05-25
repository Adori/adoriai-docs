# Media Upload

Adori media uploads use a 3-step flow:

1. Initiate upload and receive signed URL
2. Upload file directly to Supabase storage
3. Complete upload to persist final metadata

## Step 1: Initiate Upload

### Endpoint

```text
POST /api/media/initiate
```

### Request body

```json
{
  "fileName": "scene-image.png",
  "fileType": "image/png",
  "fileSize": 1048576,
  "metadata": {
    "width": 1024,
    "height": 1024,
    "duration": null,
    "quality": "high",
    "aspectRatio": 1,
    "orientation": "square",
    "dominantColors": ["#ffffff", "#111111"]
  },
  "includeThumbnail": true
}
```

### Success response

```json
{
  "id": "asset_123",
  "bucket": "assets",
  "filePath": "user_123/images/1748200000000-scene-image.png",
  "thumbnailPath": "user_123/thumbnails/1748200000000-thumb-scene-image.jpg",
  "uploadToken": "signed_upload_token",
  "uploadUrl": "https://...signed-upload-url...",
  "thumbnailUploadToken": "thumb_upload_token",
  "thumbnailUploadUrl": "https://...thumb-upload-url..."
}
```

## Step 2: Upload to Storage

Upload file bytes directly to the returned signed URL(s).

## Step 3: Complete Upload

### Endpoint

```text
POST /api/media/complete
```

### Request body

```json
{
  "id": "asset_123",
  "bucket": "assets",
  "filePath": "user_123/images/1748200000000-scene-image.png",
  "thumbnailPath": "user_123/thumbnails/1748200000000-thumb-scene-image.jpg",
  "fileSize": 1048576,
  "thumbnailSize": 102400,
  "clientMetadata": {
    "aspectRatio": 1,
    "orientation": "square",
    "dominantColors": ["#ffffff", "#111111"]
  }
}
```

### Success response

Returns normalized media metadata including public URLs:

```json
{
  "id": "asset_123",
  "url": "https://...public-original-url...",
  "thumbnail": "https://...public-thumb-url...",
  "original_url": "https://...public-original-url...",
  "thumbnail_url": "https://...public-thumb-url..."
}
```

## Optional Status Check

### Endpoint

```text
GET /api/media/status/{id}
```

Possible statuses:

- `processing`
- `complete`

## cURL (Step 1)

```bash
curl -X POST https://app.adoriai.com/api/media/initiate \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{
    "fileName": "scene-image.png",
    "fileType": "image/png",
    "fileSize": 1048576,
    "metadata": { "width": 1024, "height": 1024, "aspectRatio": 1, "orientation": "square" },
    "includeThumbnail": true
  }'
```

## Validation Notes

- File type must be allowed by backend MIME list
- Max size depends on media type:
  - Images: 50MB
  - Video: 500MB
  - Audio: 100MB
