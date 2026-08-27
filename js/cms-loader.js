// Bali Paradise CMS Data Loader
// Loads JSON from _data/ folder. Falls back to embedded data if fetch fails (local file:// or Jekyll).

let BUSINESS = null;

const FALLBACK_TOURS = {"tours":[{"id":"sunrise-trek","title":"Mount Batur Sunrise Trek","duration":"11 Hours","difficulty":"Challenging","description":"Witness an unforgettable sunrise from the summit of an active volcano at 1,717 meters. Trek through volcanic landscapes, enjoy eggs cooked in natural steam, and visit a traditional coffee plantation on the way back.","image":"https://images.unsplash.com/photo-1693821876313-dc573a92028c?w=800&q=80","itinerary":[{"time":"01:00-02:30","activity":"Hotel pickup (varies by area)"},{"time":"03:45 AM","activity":"Arrive at Pura Jati Temple, safety briefing"},{"time":"04:00 AM","activity":"Begin trekking Mount Batur"},{"time":"06:15 AM","activity":"Summit — sunrise + volcanic steam eggs"},{"time":"07:00 AM","activity":"Explore the crater rim"},{"time":"08:00 AM","activity":"Descend to base"},{"time":"09:30 AM","activity":"Coffee plantation visit"},{"time":"12:00 PM","activity":"Return to hotel"}],"inclusions":["Round-trip hotel transfer","Professional trekking guide","Entrance & parking fees","Breakfast","Drinking water","Flashlights","Insurance"],"pricing":[{"label":"Per person (min 2)","value":"Price on Request"},{"label":"Solo traveller","value":"Contact Us"}],"whatsappMessage":"Hi! I'd like to book the Sunrise Trek."},{"id":"ubud","title":"Explore Ubud","duration":"8 Hours","difficulty":"Easy","description":"Immerse yourself in Bali's cultural heart. From playful monkeys to ancient temples, cascading rice terraces to hidden waterfalls — this tour captures the soul of Ubud in one unforgettable day.","image":"https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800&q=80","itinerary":[{"time":"9:00 AM","activity":"Sacred Monkey Forest (temples & macaques)"},{"time":"11:30 AM","activity":"Tegalalang Rice Terrace (Bali Swing option)"},{"time":"1:30 PM","activity":"Coffee Plantation — Kopi Luwak tasting"},{"time":"3:00 PM","activity":"Tirta Empul Holy Water Temple"},{"time":"5:00 PM","activity":"Kanto Lampo Waterfall"}],"inclusions":["Private driver","English-speaking guide","Mineral water","All entrance fees (all-inclusive)"],"pricing":[{"label":"Transport + Guide only (min 2 pax)","value":"IDR 375,000"},{"label":"All-Inclusive with tickets (min 2 pax)","value":"IDR 550,000"},{"label":"Solo traveller surcharge","value":"Contact us"}],"whatsappMessage":"Hi! I'd like to book the Explore Ubud tour."},{"id":"heaven-gate","title":"Gate of Heaven","duration":"10 Hours","difficulty":"Easy","description":"Capture the iconic photo at Lempuyang Temple with Mount Agung framed perfectly behind you. Then explore royal water gardens and discover a hidden waterfall known only to locals.","image":"https://images.unsplash.com/photo-1575573330964-db3dad170190?w=800&q=80","itinerary":[{"time":"Morning","activity":"Lempuyang Temple — \"Heaven's Gate\" iconic photo"},{"time":"Midday","activity":"Tirta Gangga Royal Water Palace"},{"time":"Afternoon","activity":"Hidden Waterfall (Tukad Cepung or Kanto Lampo)"}],"inclusions":["Hotel pickup & drop-off","English-speaking guide","Mineral water","All entrance fees (all-inclusive)","Customisable itinerary"],"pricing":[{"label":"Tour & Transport only (min 2 pax)","value":"IDR 400,000"},{"label":"All-Inclusive (min 2 pax)","value":"IDR 750,000"}],"whatsappMessage":"Hi! I'd like to book the Gate of Heaven tour."},{"id":"rafting","title":"Ubud White Water Rafting","duration":"5 Hours","difficulty":"Moderate","description":"Feel the rush of adrenaline as you navigate rapids through Bali's stunning jungle gorges. Two hours of non-stop excitement surrounded by towering cliffs, tropical trees, and cascading waterfalls.","image":"https://images.unsplash.com/photo-1629248564797-8c5ba85da9d3?w=800&q=80","itinerary":[{"time":"9:00 AM","activity":"Hotel pickup + welcome drink"},{"time":"9:15 AM","activity":"Equipment prep & safety briefing"},{"time":"10:00 AM","activity":"Rafting begins (2 hours)"},{"time":"12:30 PM","activity":"Finish — shower & lunch"},{"time":"1:30 PM","activity":"Return to hotel"}],"inclusions":["Hotel transfer","All rafting equipment","Professional guide","Lunch","Towel & shower","Waterproof bag & locker","Insurance"],"pricing":[{"label":"Per person (min 2 pax)","value":"IDR 550,000"}],"whatsappMessage":"Hi! I'd like to book Ubud Rafting."},{"id":"atv","title":"ATV / Quad Bike Adventure","duration":"5 Hours","difficulty":"Moderate","description":"Rev up and ride through Bali's untouched countryside. Navigate rice paddies, bamboo forests, river crossings, and remote villages on a powerful ATV — an adrenaline rush like no other.","image":"images/atv-quad-bike.jpg","itinerary":[{"time":"08:30 AM","activity":"Hotel pickup"},{"time":"09:30 AM","activity":"Welcome drink (tea/coffee)"},{"time":"09:45 AM","activity":"Equipment & safety briefing"},{"time":"10:00 AM","activity":"ATV ride (1.5 hours through jungle & rice fields)"},{"time":"11:45 AM","activity":"Finish point"},{"time":"12:00 PM","activity":"Shower & buffet lunch"},{"time":"1:00 PM","activity":"Return to hotel"}],"inclusions":["Hotel transfer","ATV vehicle & equipment","Professional guide","Buffet lunch","Towel & shower","Insurance"],"pricing":[{"label":"Single rider","value":"IDR 1,200,000"},{"label":"Tandem (2 on 1 ATV)","value":"IDR 1,450,000"}],"whatsappMessage":"Hi! I'd like to book the ATV adventure."},{"id":"north-bali","title":"North Bali / UNESCO Tour","duration":"10 Hours","difficulty":"Easy","description":"Discover Bali's UNESCO World Heritage rice terraces, ancient royal temples, secret waterfalls, and authentic Luwak coffee — all in one epic day through the island's lush northern highlands.","image":"https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?w=800&q=80","itinerary":[{"time":"Morning","activity":"Taman Ayun Temple (royal family temple)"},{"time":"Late Morning","activity":"Beratan Temple (lake temple)"},{"time":"Midday","activity":"Jatiluwih UNESCO Rice Terraces"},{"time":"Afternoon","activity":"Banyumala or Leke-Leke Waterfall"},{"time":"Late Afternoon","activity":"Coffee Plantation (Luwak coffee experience)"}],"inclusions":["Hotel pickup & drop-off","Private English-speaking guide","Mineral water"],"pricing":[{"label":"Per person (min 2 pax, tickets NOT included)","value":"IDR 375,000"},{"label":"Solo traveller surcharge","value":"+IDR 200,000"},{"label":"Pickup outside Ubud","value":"+IDR 200,000"}],"whatsappMessage":"Hi! I'd like to book the North Bali UNESCO tour."}]};

const FALLBACK_GALLERY = {"photos":[{"src":"https://images.unsplash.com/photo-1693821876313-dc573a92028c?w=600&q=80","caption":"Sunrise at Mount Batur summit","category":"adventures"},{"src":"https://images.unsplash.com/photo-1642472193131-add8b4bdab75?w=600&q=80","caption":"Beach life at Bingin, Bali","category":"beaches people"},{"src":"https://images.unsplash.com/photo-1701938541293-55007984ac32?w=600&q=80","caption":"Surf life in Bali","category":"beaches people"},{"src":"https://images.unsplash.com/photo-1542897644-e04428948020?w=600&q=80","caption":"Hindu ceremony procession","category":"culture"},{"src":"https://images.unsplash.com/photo-1542897730-fe285968ee55?w=600&q=80","caption":"Sacred temple ceremony","category":"culture"},{"src":"https://images.unsplash.com/photo-1733938941418-df8bf946c6aa?w=600&q=80","caption":"Famous Kopi Luwak coffee","category":"culture"},{"src":"https://images.unsplash.com/photo-1638569099509-2f46eb4bb94e?w=600&q=80","caption":"Balinese cuisine","category":"culture luxury"},{"src":"https://images.unsplash.com/photo-1728050829024-8113f4cd85ec?w=600&q=80","caption":"Bali villa breakfast","category":"luxury culture"},{"src":"https://images.unsplash.com/photo-1576475706812-822620fc23ba?w=600&q=80","caption":"The famous Bali Swing","category":"adventures people"},{"src":"https://images.unsplash.com/photo-1520329612326-d6038d1395a1?w=600&q=80","caption":"Adventure at Nungnung Waterfall","category":"adventures"},{"src":"https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?w=600&q=80","caption":"Sekumpul Waterfall","category":"adventures"},{"src":"https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=600&q=80","caption":"Tegalalang Rice Terraces","category":"adventures"},{"src":"https://images.unsplash.com/photo-1586228041075-5e5529cf4427?w=600&q=80","caption":"Surfing Bali's waves","category":"adventures people"},{"src":"https://images.unsplash.com/photo-1763712571835-fc3ae24e8104?w=600&q=80","caption":"Snorkeling Bali's clear waters","category":"adventures"},{"src":"https://images.unsplash.com/photo-1669901529685-8cdba1222953?w=600&q=80","caption":"Trekking with your crew","category":"adventures"},{"src":"https://images.unsplash.com/photo-1559305289-4c31700ba9cb?w=600&q=80","caption":"Bali from above","category":"beaches"},{"src":"https://images.unsplash.com/photo-1532254497630-c74966e79621?w=600&q=80","caption":"Kelingking Beach, Nusa Penida","category":"beaches"},{"src":"https://images.unsplash.com/photo-1573790387438-4da905039392?w=600&q=80","caption":"Diamond Beach cliffs","category":"beaches"},{"src":"https://images.unsplash.com/photo-1546484475-7f7bd55792da?w=600&q=80","caption":"Beach club sunset vibes","category":"beaches"},{"src":"https://images.unsplash.com/photo-1641082918149-24470fe02c39?w=600&q=80","caption":"Pool vibes with the crew","category":"people"},{"src":"https://images.unsplash.com/photo-1607537826640-5ca23e6df221?w=600&q=80","caption":"Riding Bali's waves","category":"people"},{"src":"https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=600&q=80","caption":"Infinity pool overlooking the jungle","category":"people"},{"src":"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80","caption":"Golden hour at the beach","category":"people"},{"src":"https://images.unsplash.com/photo-1546484458-6904289cd4f0?w=600&q=80","caption":"Good times at The Lawn, Canggu","category":"people"},{"src":"https://images.unsplash.com/photo-1570789210967-2cac24afeb00?w=600&q=80","caption":"Exploring Bali by scooter","category":"people adventures"},{"src":"https://images.unsplash.com/photo-1514922130690-95dcdfbe563f?w=600&q=80","caption":"Family sunset at Seminyak","category":"people"},{"src":"https://images.unsplash.com/photo-1544091441-9cca7fbe8923?w=600&q=80","caption":"Couple goals in Sidemen","category":"couples"},{"src":"https://images.unsplash.com/photo-1575573330964-db3dad170190?w=600&q=80","caption":"Gate of Heaven magic","category":"couples culture"},{"src":"https://images.unsplash.com/photo-1533511090-0d488f53e769?w=600&q=80","caption":"The famous Bali Swing","category":"couples luxury"},{"src":"https://images.unsplash.com/photo-1668276490368-409a6002756d?w=600&q=80","caption":"Infinity pool paradise","category":"luxury"},{"src":"https://images.unsplash.com/flagged/photo-1573648817925-1ce7b75c049c?w=600&q=80","caption":"Floating breakfast goals","category":"luxury"},{"src":"https://images.unsplash.com/photo-1712226652059-a34d334e6cd0?w=600&q=80","caption":"Spa & relaxation","category":"luxury"},{"src":"https://images.unsplash.com/photo-1553902000-e036b7d05af5?w=600&q=80","caption":"Tanah Lot Temple","category":"culture"},{"src":"https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80","caption":"Lake Bratan Temple","category":"culture"},{"src":"https://images.unsplash.com/photo-1755077005329-13ce030aa794?w=600&q=80","caption":"Kecak Fire Dance","category":"culture"},{"src":"https://images.unsplash.com/photo-1608335715837-1994a535d5c3?w=600&q=80","caption":"Golden hour rice fields","category":"culture"}]};

const FALLBACK_BUSINESS = {"guideName":"Kadek","whatsapp":"6281999235447","email":"baliparadisetravels@gmail.com","location":"Ubud, Bali","yearsExperience":"15+","reviewsUrl":"https://maps.app.goo.gl/Lucm7mpu2UtnnKXX6","profileImage":"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80","googleRating":"4.9","calendlyUrl":"https://calendly.com/baliparadisetravels","instagramUrl":"","facebookUrl":"","tripadvisorUrl":""};

const FALLBACK_TESTIMONIALS = {"testimonials":[{"name":"Sarah & James","quote":"Kadek made our honeymoon unforgettable. The sunrise trek was magical and he knew exactly where to go for the best photos without the crowds.","rating":5,"country":"Australia"},{"name":"Michael T.","quote":"Best guide in Bali, hands down. We did 3 tours and each one was perfectly organised. The kids loved the rafting!","rating":5,"country":"United Kingdom"},{"name":"Emma L.","quote":"So glad we found Kadek. No tourist traps, no rushing, just genuine Bali experiences. Already planning our return trip.","rating":5,"country":"New Zealand"}]};

const FALLBACK_ABOUT = {"title":"Hi, I'm Kadek One","bio":["I was born and raised in Bali, and this island is my home, my culture, and my passion. I started guiding because I wanted to share the Bali that guidebooks don't show — the hidden waterfalls, the secret temple ceremonies, the family-run coffee farms where they still roast beans by hand.","What began as showing friends around has grown into a full-time adventure company. But my philosophy hasn't changed: every tour is personal, every guest is a friend, and every day in Bali should feel magical.","I'm fully insured and I speak fluent English. Whether you want heart-pumping adventure or peaceful cultural immersion, I'll design the perfect Bali experience for you."],"stats":[{"number":"500+","label":"Happy Guests"},{"number":"5+","label":"Years Experience"},{"number":"4.9","label":"Google Rating"}],"values":[{"title":"Small Groups Only","description":"Your tour, your pace. No waiting for 30 other people. Just you, your group, and your guide."},{"title":"Local Knowledge","description":"We take you to spots only Balinese locals know. Skip the tourist traps, find the real magic."},{"title":"No Hidden Costs","description":"The price we quote is the price you pay. Transport, guide, entries — all included. No surprises."},{"title":"Safety First","description":"Certified guides, full insurance, proper equipment, and safety briefings on every adventure tour."},{"title":"Flexible Cancellation","description":"Plans change — we understand. Free cancellation up to 24 hours before your tour. No questions asked."},{"title":"Pay on the Day","description":"No upfront payment or credit card needed. Book now, pay your guide directly on the day of the tour."}]};

async function fetchJSON(path, fallback) {
  try {
    const res = await fetch(path);
    if (!res.ok) return fallback;
    return await res.json();
  } catch (e) {
    return fallback;
  }
}

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
  BUSINESS = await fetchJSON('_data/business.json', FALLBACK_BUSINESS);

  document.querySelectorAll('[data-cms-business]').forEach(el => {
    const key = el.getAttribute('data-cms-business');
    if (!BUSINESS[key]) return;
    if (el.tagName === 'IMG') el.src = BUSINESS[key];
    else if (el.tagName === 'A') el.href = BUSINESS[key];
    else el.textContent = BUSINESS[key];
  });

  updateSocialLinks();
  updateGoogleRating();
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
  if (window.location.protocol === 'file:') return;

  const originalContent = container.innerHTML;

  try {
    const data = await fetchJSON('_data/tours.json', FALLBACK_TOURS);
    if (!data || !data.tours || !data.tours.length) return;

    const whatsapp = BUSINESS ? BUSINESS.whatsapp : '6281999235447';

    const rendered = data.tours.map((tour, i) => `
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
                ${(tour.itinerary || []).map(item => `
                  <div class="itinerary-item">
                    <span class="itinerary-time">${item.time}</span>
                    <span class="itinerary-activity">${item.activity}</span>
                  </div>
                `).join('')}
              </div>

              <div class="inclusions">
                ${(tour.inclusions || []).map(item => `
                  <div class="inclusion-item">
                    <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    ${item}
                  </div>
                `).join('')}
              </div>

              <div class="tour-pricing-box">
                <h4>Pricing</h4>
                ${(tour.pricing || []).map(p => `
                  <div class="price-row">
                    <span class="price-label">${p.label}</span>
                    <span class="price-value">${p.value}</span>
                  </div>
                `).join('')}
              </div>

              <div class="tour-cta-buttons">
                <a href="https://wa.me/${whatsapp}?text=${encodeURIComponent(tour.whatsappMessage || '')}" target="_blank" class="btn btn-whatsapp">Book via WhatsApp</a>
                <a href="contact.html" class="btn btn-outline">Send Enquiry</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    `).join('');

    if (rendered && rendered.trim().length > 0) {
      container.innerHTML = rendered;
    }
  } catch (e) {
    container.innerHTML = originalContent;
  }
}

async function loadGallery() {
  const container = document.getElementById('gallery-container');
  if (!container) return;
  if (window.location.protocol === 'file:') return;

  const originalContent = container.innerHTML;

  try {
    const data = await fetchJSON('_data/gallery.json', FALLBACK_GALLERY);
    if (!data || !data.photos || !data.photos.length) return;

    const rendered = data.photos.map(photo => `
      <div class="gallery-item fade-in" data-category="${photo.category || 'all'}">
        <img src="${photo.src}" alt="${photo.caption || 'Gallery photo'}" loading="lazy">
        <div class="caption">${photo.caption || ''}</div>
      </div>
    `).join('');

    if (rendered && rendered.trim().length > 0) {
      container.innerHTML = rendered;
    }
  } catch (e) {
    container.innerHTML = originalContent;
  }

  initGalleryFilters();
  initLightbox();
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

  const data = await fetchJSON('_data/testimonials.json', FALLBACK_TESTIMONIALS);
  if (!data.testimonials || !data.testimonials.length) return;

  container.innerHTML = data.testimonials.map(t => `
    <div class="testimonial-card fade-in">
      <div class="testimonial-stars">${'&#9733;'.repeat(t.rating)}</div>
      <p class="testimonial-quote">"${t.quote}"</p>
      <p class="testimonial-author">${t.name} <span>— ${t.country}</span></p>
    </div>
  `).join('');
}

async function loadAbout() {
  const bioContainer = document.getElementById('about-bio');
  const statsContainer = document.getElementById('about-stats');
  const valuesContainer = document.getElementById('about-values');
  if (!bioContainer && !statsContainer && !valuesContainer) return;

  const data = await fetchJSON('_data/about.json', FALLBACK_ABOUT);

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
}

async function loadContactForm() {
  const tourSelect = document.getElementById('tour');
  if (!tourSelect) return;

  const data = await fetchJSON('_data/tours.json', FALLBACK_TOURS);
  if (!data.tours || !data.tours.length) return;

  tourSelect.innerHTML = '<option value="">Select a tour...</option>' +
    data.tours.map(t => `<option value="${t.title}">${t.title}</option>`).join('') +
    '<option value="Custom">Custom / Not sure yet</option>';
}

async function loadCalendly() {
  if (!BUSINESS || !BUSINESS.calendlyUrl) return;
  const widget = document.querySelector('.calendly-inline-widget');
  if (widget) {
    widget.setAttribute('data-url', BUSINESS.calendlyUrl + '?hide_event_type_details=1&hide_gdpr_banner=1');
  }
}

document.addEventListener('DOMContentLoaded', loadCMSData);
