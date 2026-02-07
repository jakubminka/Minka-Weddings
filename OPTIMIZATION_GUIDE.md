# Optymalizacja Egress Supabase - Plan działań

## 🎯 Cel: Zmniejszenie egress z 5GB+ na <1-2GB/mies.

---

## 1. **NATYCHMIAST - Zmiana header video (70% oszczędności)**

### Problem:
- Video w formacie MP4 (kodek H.264) zabiera ~50-200MB
- Preloadowane dla każdego visita
- 1000 wizyt/mies × 100MB = 100GB egress! ❌

### Rozwiązanie:
```bash
# Konwersja MP4 → WebM (VP9 - kompresja 70-80%)
ffmpeg -i header.mp4 -c:v libvpx-vp9 -b:v 500k -c:a libopus header.webm

# Alternatywa: MP4 H.265 (mniejszy niż H.264)
ffmpeg -i header.mp4 -c:v libx265 -crf 28 header.h265.mp4

# Lub HEVC WebM
ffmpeg -i header.mp4 -c:v libvpx-vp9 -crf 30 -b:v 800k header-optimized.webm
```

### Zmiany w HTML:
```html
<!-- Zmiana z -->
<link rel="preload" href="https://.../header.mp4" as="video">
<!-- Na -->
<link rel="preload" href="https://.../header.webm" as="video">

<!-- i w tagu video -->
<video>
  <source src="header.webm" type="video/webm">
  <source src="header.mp4" type="video/mp4">
</video>
```

**Efekt:** 100MB → 20-30MB = **80% zmniejszenie**

---

## 2. **Lazy Loading Video (30% oszczędności)**

### Zamiast preload - load on scroll/interaction:

```html
<!-- PRZED -->
<link rel="preload" href="https://.../header.mp4" as="video">

<!-- PO: Zmiana na dane-driven loading -->
<video id="header-video" 
  playsinline 
  muted 
  loop 
  data-src="https://.../header.webm">
  <p>Video unsupported</p>
</video>

<script>
  // Intersection Observer - załaduj video gdy będzie widoczne
  const video = document.getElementById('header-video');
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      video.src = video.dataset.src;
      video.play();
      observer.unobserve(video);
    }
  });
  observer.observe(video);
</script>
```

**Efekt:** 30-40% użytkowników nie scrolluje do header = oszczędzone 30% egress

---

## 3. **Implementacja Response Caching w Supabase**

```sql
-- W Supabase Storage bucket settings dodaj custom headers:

-- Cache-Control: 30 dni dla static assets
-- ETag: dla conditional requests
```

Lub lepiej: **Cloudflare Workers + free tier** (proxy z cache):

```javascript
// wrangler.toml - FREE tier
name = "supabase-cache"

[[env.production]]
routes = [
  { pattern = "*.supabase.co/storage/*", zone_name = "yourdomain.com" }
]

// src/index.js
export default {
  async fetch(request) {
    const cache = caches.default;
    let response = await cache.match(request);
    
    if (!response) {
      response = await fetch(request);
      response = new Response(response.body, response);
      response.headers.set('Cache-Control', 
        'public, max-age=2592000'); // 30 dni
      
      request.method === 'GET' && 
        await cache.put(request, response.clone());
    }
    return response;
  }
}
```

**Efekt:** Powtórzeni użytkownicy = 0 egress (cache hit)

---

## 4. **Responsive Images & Videos (mówiąc o portfolio)**

Jeśli masz galerię video/foto:

```javascript
// Adaptive loading - załaduj rozdzielczość na podstawie connection
const videoUrl = navigator.connection?.effectiveType === '4g' 
  ? 'video-1080p.webm'
  : 'video-720p.webm';
```

---

## 5. **RLS + Query Optimization** (jeśli masz database requesty)

```sql
-- Jeśli fetcujesz dane z database:

-- PRZED (N+1 queries):
SELECT * FROM weddings; -- 5MB
SELECT * FROM reviews; -- 2MB

-- PO (single query, select specific columns):
SELECT id, title, thumbnail_url FROM weddings LIMIT 10;
```

---

## 6. **Cloudflare Free Plan Integration** (REKOMENDOWANE)

Bezpłatny CDN z automatycznym cachingiem = instant 80% zmniejszenie egress:

1. Doda DNS do Cloudflare
2. Włącz "Caching Everything"
3. Ustaw cache TTL na 30 dni
4. Cloudflare będzie służyć użytkownikom z edge, nie z Supabase

**Efekt:** 100GB → 20GB egress

---

## 📊 **Szacunkowe wyniki:**

| Optymalizacja | Oszczędności |
|---|---|
| Video compression (MP4 → WebM) | 50GB → 10GB |
| Lazy loading video | 10GB → 7GB |
| Cloudflare cache | 7GB → 2GB |
| Query optimization | -0.5GB |
| **RAZEM** | **5GB → ~1.5-2GB** ✅ |

---

## 🚀 **Priorytet wdrażania:**

1. ✅ Video compression (najprostsze, największy efekt)
2. ✅ Cloudflare cache (darmowe, plug & play)
3. ✅ Lazy loading (wymaga JS change)
4. ⚡ Query optimization (jeśli masz database calls)

---

## 🔧 **Szybkie testy:**

```bash
# Sprawdź rozmiar video
ls -lh header.mp4

# Testuj kompresję
ffmpeg -i header.mp4 -c:v libvpx-vp9 -crf 30 test.webm
ls -lh test.webm

# Porównaj: ile MB zaoszczędzisz
```

---

## 📝 **Uwagi:**

- **Cloudflare Free** jest darmowy i niezwykle efektywny
- **WebM format** obsługiwany w 95% przeglądarek (jeśli nie, fallback MP4)
- **Lazy loading** = dodatkowe +10-15% oszczędności
- Monitoruj w Supabase Dashboard → Usage → Egress

