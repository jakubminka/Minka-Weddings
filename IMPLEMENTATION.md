# Video Optimization & Lazy Loading Implementation

## Krok 1: Konwersja video na WebM

```bash
#!/bin/bash
# convert-videos.sh

# Konwertuj header.mp4 na WebM z VP9 codecem (najlepsza kompresja)
ffmpeg -i header.mp4 \
  -c:v libvpx-vp9 \
  -b:v 800k \
  -c:a libopus \
  -b:a 128k \
  header.webm

# Sprawdź rozmiary
echo "Original size:"
ls -lh header.mp4
echo "WebM size:"
ls -lh header.webm
echo "Compression ratio:"
du -sh header.mp4 header.webm
```

**Pokaż: ile procent zaoszczędzisz**

---

## Krok 2: Opracuj HTML - Lazy Loading (MUSI być opcjonalnie)

```html
<!-- NEW: Intersection Observer + lazy loading -->

<video id="header-video" 
  class="w-full h-screen object-cover video-fade-in no-interact" 
  playsinline 
  muted 
  loop
  preload="none"
  data-src="https://ksncxtewqjvqjvjmsifo.supabase.co/storage/v1/object/public/weddings/header.webm"
  data-fallback="https://ksncxtewqjvqjvjmsifo.supabase.co/storage/v1/object/public/weddings/header.mp4">
  
  <!-- Fallback: Thumbnail lub obraz -->
  <source src="/assets/header-poster.jpg" type="image">
</video>

<script>
  // Lazy load video aż do intersection z viewport
  document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('header-video');
    
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Załaduj video kiedy będzie widoczne
            const src = entry.target.dataset.src;
            
            // Spróbuj WebM, fallback na MP4
            const source = document.createElement('source');
            source.src = src;
            source.type = 'video/webm';
            
            entry.target.appendChild(source);
            entry.target.load();
            entry.target.play().catch(err => {
              console.log('Autoplay blocked, user interaction needed', err);
            });
            
            observer.unobserve(entry.target);
          }
        });
      }, { rootMargin: '50px' }); // Load 50px przed widocznym
      
      observer.observe(video);
    } else {
      // Fallback dla starszych przeglądarek
      video.src = video.dataset.src;
    }
  });
</script>
```

---

## Krok 3: Zmień tag w index.html

```
Zamień:
<link rel="preload" href="https://ksncxtewqjvqjvjmsifo.supabase.co/storage/v1/object/public/weddings/header.mp4" as="video">

Na:
<!-- Tylko preconnect, nie preload - pozwoli Intersection Observer na lazy load -->
<!-- <link rel="preload" href="..." as="video"> [USUŃ] -->
```

---

## Krok 4: Setup Cloudflare (REKOMENDOWANY - najłatwiejszy)

### Option A: Cloudflare Pages (najszybciej)

1. Zaloguj się na Cloudflare
2. Dodaj domenę
3. Zmień nameservery (5 minut)
4. Dashboard → Caching → Cache everything
5. Set Cache TTL: 30 days

**Rezultat:** Automatyczne cachowanie wszystkiego, w tym Supabase storage

### Option B: Cloudflare Workers (zaawansowane)

```toml
# wrangler.toml
name = "minka-weddings"
account_id = "YOUR_ACCOUNT_ID"
workers_dev = true

[env.production]
routes = [{ pattern = "ksncxtewqjvqjvjmsifo.supabase.co/*", zone_id = "YOUR_ZONE_ID" }]
```

```javascript
// src/index.js
export default {
  async fetch(request, env) {
    // Cache wszystkie GET requesty do Supabase
    if (request.method === 'GET') {
      const cache = caches.default;
      let response = await cache.match(request);
      
      if (!response) {
        response = await fetch(request);
        
        // Dodaj cache headers
        const newResponse = new Response(response.body, response);
        newResponse.headers.set('Cache-Control', 'public, max-age=2592000'); // 30 dni
        
        if (request.url.includes('.mp4') || request.url.includes('.webm')) {
          newResponse.headers.set('Cache-Control', 'public, max-age=31536000'); // 1 rok
        }
        
        await cache.put(request, newResponse.clone());
        return newResponse;
      }
      
      return response;
    }
    
    return fetch(request);
  }
};
```

Deploy:
```bash
npm install -g wrangler
wrangler deploy
```

---

## Krok 5: Monitoring & Testing

```javascript
// Debug: Sprawdź ile danych pobierasz
document.addEventListener('load', () => {
  if (window.performance && window.performance.getEntriesByType) {
    const resources = performance.getEntriesByType('resource');
    const supabaseRequests = resources.filter(r => r.name.includes('supabase'));
    
    let totalSize = 0;
    supabaseRequests.forEach(req => {
      const size = req.transferSize ? req.transferSize / (1024 * 1024) : 0;
      console.log(`${req.name.split('/').pop()}: ${size.toFixed(2)} MB`);
      totalSize += size;
    });
    
    console.log(`Total Supabase egress this page: ${totalSize.toFixed(2)} MB`);
  }
});
```

---

## Checklist Wdrażania

- [ ] 1. Konwertować MP4 na WebM
- [ ] 2. Uploadować WebM do Supabase
- [ ] 3. Zmienić HTML - zmienić src video na WebM
- [ ] 4. Dodać Lazy Loading (Intersection Observer)
- [ ] 5. Zalogować Cloudflare i ustawić cache
- [ ] 6. Testować w Chrome DevTools → Network
- [ ] 7. Czekać 24h i monitorować Supabase Usage
- [ ] 8. Sprawdzić zmniejszenie egress w dashboardzie

---

## Spodziewane wyniki

**Przed:**
- Header video: 100MB × 1000 visits = 100GB/mies
- Inne requests: ~50GB/mies
- **RAZEM: ~150GB egress**

**Po:**
- Header video (WebM, cached): 20MB × 100 visits (cold cache only) = 2GB/mies
- Cached by Cloudflare: 0GB (edge serves = no egress)
- Inne requests (cached): 5GB/mies
- **RAZEM: ~7-10GB egress = 90% oszczędności!**

---

## Pytania i odpowiedzi

**P: Czy WebM jest obsługiwany wszędzie?**
A: W 95% przeglądarek. Dodaj fallback `<source src="header.mp4">` dla SE.

**P: Czy Cloudflare free jest naprawdę darmowy?**
A: Tak, caching free tier ma limit 30 dni + bandwidtha, bardzo wystarczający.

**P: Czy uszkodzę dotychczasowe cache'i?**
A: Nie, lazy loading = starzy użytkownicy mogą mieć cache MP4, nowi dostaną WebM.

