// Decap CMS Data Loader for Bali Paradise
// Loads all JSON data and renders dynamic content site-wide

let BUSINESS = null;

async function loadCMSData() {
  await loadBusiness();
  await Promise.all([
    loadHero(),
    loadTours(),
    loadGallery(),
    loadTestimonials(),
    loadAbout(),
    loadContactForm(),
    loadCalendly()
  ]);
}

async function loadBusiness() {
  try {
    const res = await fetch('_data/business.json');
    if (!res.ok) return;
    BUSINESS = await res.json();

    document.querySelectorAll('[data-cms-business]').forEach(el => {
      const key = el.getAttribute('data-cms-business');
      if (!BUSINESS[key]) return;
      if (el.tagName === 'IMG') el.src = BUSINESS[key];
      else if (el.tagName === 'A') el.href = BUSINESS[key];
      else el.textContent = BUSINESS[key];
    });

    updateSocialLinks();
    updateGoogleRating();
  } catch (e) { /* defaults remain */ }
}

function updateSocialLinks() {
  if (!BUSINESS) return;
  const links = {
    'Instagram': BUSINESS.instagramUrl,
    'Facebook': BUSINESS.facebookUrl,
    'TripAdvisor': BUSINESS.tripadvisorUrl
  };
  Object.entries(links).forEach(([label, url]) => {
    if (!url) return;
    document.querySelectorAll(`a[aria-label="${label}"]`).forEach(el => {
      el.href = url;
      if (url && url !== '#') el.setAttribute('target', '_blank');
    });
  });
}

function updateGoogleRating() {
  if (!BUSINESS || !BUSINESS.googleRating) return;
  document.querySelectorAll('[data-cms-rating]').forEach(el => {
    el.textContent = BUSINESS.googleRating;
  });
}

async function loadHero() {
  try {
    const res = await fetch('_data/homepage-hero.json');
    if (!res.ok) return;
    const hero = await res.json();
    document.querySelectorAll('[data-cms-hero]').forEach(el => {
      const key = el.getAttribute('data-cms-hero');
      if (hero[key]) el.textContent = hero[key];
    });
  } catch (e) { /* defaults remain */ }
}

async function loadTours() {
  const container = document.getElementById('tours-container');
  if (!container) return;
  try {
    const res = await fetch('_data/tours.json');
    if (!res.ok) return;
    const data = await res.json();
    if (!data.tours || !data.tours.length) return;

    const whatsapp = BUSINESS ? BUSINESS.whatsapp : '6281999235447';

    container.innerHTML = data.tours.map((tour, i) => `
      <section class="tour-detail${i % 2 === 1 ? ' even' : ''}" id="${tour.id}">
        <div class="container">
          <div class="tour-detail-grid">
            <div class="tour-detail-image fade-in">
              <img src="${tour.image}" alt="${tour.title}" loading="lazy">
            </div>
            <div class="tour-detail-content fade-in">
              <h2>${tour.title}</h2>
              <p>${tour.description}</p>

              <div class="itinerary">
                ${tour.itinerary.map(item => `
                  <div class="itinerary-item">
                    <span class="itinerary-time">${item.time}</span>
                    <span class="itinerary-activity">${item.activity}</span>
                  </div>
                `).join('')}
              </div>

              <div class="inclusions">
                ${tour.inclusions.map(item => `
                  <div class="inclusion-item">
                    <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    ${item}
                  </div>
                `).join('')}
              </div>

              <div class="tour-pricing-box">
                <h4>Pricing</h4>
                ${tour.pricing.map(p => `
                  <div class="price-row">
                    <span class="price-label">${p.label}</span>
                    <span class="price-value">${p.value}</span>
                  </div>
                `).join('')}
              </div>

              <div class="tour-cta-buttons">
                <a href="https://wa.me/${whatsapp}?text=${encodeURIComponent(tour.whatsappMessage)}" target="_blank" class="btn btn-whatsapp">Book via WhatsApp</a>
                <a href="contact.html" class="btn btn-outline">Send Enquiry</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    `).join('');
  } catch (e) { /* fallback */ }
}

async function loadGallery() {
  const container = document.getElementById('gallery-container');
  if (!container) return;
  try {
    const res = await fetch('_data/gallery.json');
    if (!res.ok) return;
    const data = await res.json();
    if (!data.photos || !data.photos.length) return;

    container.innerHTML = data.photos.map(photo => `
      <div class="gallery-item fade-in" data-category="${photo.category || 'all'}">
        <img src="${photo.src}" alt="${photo.caption || 'Gallery photo'}" loading="lazy">
        <div class="caption">${photo.caption || ''}</div>
      </div>
    `).join('');

    initGalleryFilters();
    initLightbox();
  } catch (e) { /* defaults remain */ }
}

function initGalleryFilters() {
  const buttons = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('.gallery-item');
  if (!buttons.length || !items.length) return;

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      items.forEach(item => {
        const categories = item.getAttribute('data-category') || '';
        if (filter === 'all' || categories.includes(filter)) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });
}

function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  if (!lightbox || !lightboxImg) return;

  document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src.replace('w=600', 'w=1200');
      lightboxImg.alt = img.alt;
      lightbox.style.display = 'flex';
    });
  });

  lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
    lightboxImg.src = '';
  });
}

async function loadTestimonials() {
  const container = document.getElementById('testimonials-container');
  if (!container) return;
  try {
    const res = await fetch('_data/testimonials.json');
    if (!res.ok) return;
    const data = await res.json();
    if (!data.testimonials || !data.testimonials.length) return;

    container.innerHTML = data.testimonials.map(t => `
      <div class="testimonial-card fade-in">
        <div class="testimonial-stars">${'&#9733;'.repeat(t.rating)}</div>
        <p class="testimonial-quote">"${t.quote}"</p>
        <p class="testimonial-author">${t.name} <span>— ${t.country}</span></p>
      </div>
    `).join('');
  } catch (e) { /* defaults remain */ }
}

async function loadAbout() {
  const bioContainer = document.getElementById('about-bio');
  const statsContainer = document.getElementById('about-stats');
  const valuesContainer = document.getElementById('about-values');
  if (!bioContainer && !statsContainer && !valuesContainer) return;

  try {
    const res = await fetch('_data/about.json');
    if (!res.ok) return;
    const data = await res.json();

    if (bioContainer && data.title) {
      const titleEl = bioContainer.querySelector('h2');
      if (titleEl) titleEl.textContent = data.title;
    }

    if (bioContainer && data.bio) {
      const paragraphs = bioContainer.querySelectorAll('p.bio-text');
      data.bio.forEach((text, i) => {
        if (paragraphs[i]) paragraphs[i].textContent = text;
      });
    }

    if (statsContainer && data.stats) {
      statsContainer.innerHTML = data.stats.map(s => `
        <div class="about-stat">
          <div class="number">${s.number}</div>
          <div class="label">${s.label}</div>
        </div>
      `).join('');
    }

    if (valuesContainer && data.values) {
      valuesContainer.innerHTML = data.values.map(v => `
        <div class="value-card fade-in">
          <h3>${v.title}</h3>
          <p>${v.description}</p>
        </div>
      `).join('');
    }
  } catch (e) { /* defaults remain */ }
}

async function loadContactForm() {
  const tourSelect = document.getElementById('tour');
  if (!tourSelect) return;
  try {
    const res = await fetch('_data/tours.json');
    if (!res.ok) return;
    const data = await res.json();
    if (!data.tours || !data.tours.length) return;

    tourSelect.innerHTML = '<option value="">Select a tour...</option>' +
      data.tours.map(t => `<option value="${t.title}">${t.title}</option>`).join('') +
      '<option value="Custom">Custom / Not sure yet</option>';
  } catch (e) { /* dropdown stays as-is */ }
}

async function loadCalendly() {
  if (!BUSINESS || !BUSINESS.calendlyUrl) return;
  const widget = document.querySelector('.calendly-inline-widget');
  if (widget) {
    widget.setAttribute('data-url', BUSINESS.calendlyUrl + '?hide_event_type_details=1&hide_gdpr_banner=1');
  }
}

document.addEventListener('DOMContentLoaded', loadCMSData);
