# Brand Kit

Read and update the brand kit applied to generated projects.

The brand kit holds organization-wide branding (logos, colors, intro/outro
videos) that gets applied to every generated project unless overridden.

## Get brand kit

```text
GET /api/brand-kit
```

Returns the active organization's brand kit.

### cURL

```bash
curl "$ADORI_API_BASE_URL/api/brand-kit" \
  -H "Authorization: Bearer $ADORI_API_KEY"
```

## Update brand kit

```text
PUT /api/brand-kit
```

Requires write access (`scope=all`).

```ts
type BrandKit = {
  brandName: string
  aboutBrand: string
  logos: {
    light: string
    dark: string
  }
  colors: {
    primary: string
    secondary: string
  }
  introVideoUrl: string
  introVideoPath: string
  outroVideoUrl: string
  outroVideoPath: string
}
```

### cURL

```bash
curl -X PUT "$ADORI_API_BASE_URL/api/brand-kit" \
  -H "Authorization: Bearer $ADORI_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "brandName": "Acme",
    "aboutBrand": "Clean and modern explainer videos.",
    "logos": {
      "light": "https://cdn.example.com/logo-light.png",
      "dark": "https://cdn.example.com/logo-dark.png"
    },
    "colors": {
      "primary": "#1D4ED8",
      "secondary": "#0F172A"
    },
    "introVideoUrl": "https://cdn.example.com/intro.mp4",
    "introVideoPath": "brand/intro.mp4",
    "outroVideoUrl": "https://cdn.example.com/outro.mp4",
    "outroVideoPath": "brand/outro.mp4"
  }'
```

Logo and intro/outro URLs should be uploaded via [Media Upload](/api/media-upload)
first, then referenced here.
