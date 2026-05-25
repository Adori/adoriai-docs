---
title: Voices
description: List available ElevenLabs voices and generate speech audio for Adori scenes using voice and text inputs.
---

# Voices

List available ElevenLabs voices and generate speech for scenes.

## List voices

```text
GET /api/elevenlabs/voices
```

Returns the catalogue of available voices, including ElevenLabs built-in voices
and any custom voices added to the active organization.

### cURL

```bash
curl "$ADORI_API_BASE_URL/api/elevenlabs/voices" \
  -H "Authorization: Bearer $ADORI_API_KEY"
```

### Response shape

```ts
type Voice = {
  voice_id: string
  name: string
  category: 'premade' | 'cloned' | 'professional'
  preview_url?: string
  labels?: Record<string, string>
}
```

## Generate speech

```text
POST /api/elevenlabs/generate-speech
```

Requires write access (`scope=all`).

```ts
type GenerateSpeechRequest = {
  voice_id: string
  text: string
  model_id?: string
}
```

### cURL

```bash
curl -X POST "$ADORI_API_BASE_URL/api/elevenlabs/generate-speech" \
  -H "Authorization: Bearer $ADORI_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "voice_id": "21m00Tcm4TlvDq8ikWAM",
    "text": "Welcome to the Adori demo."
  }'
```

Returns a public URL to the generated MP3 audio file. Use it as
`scene.voiceSettings.voiceUrl` when updating projects.
