# Bali Paradise Adventure Guide

Private guided tours and adventures in Bali, Indonesia. A static website built for tour guide Kadek One, based in Ubud.

**Live Site:** [https://baliparadisetravels-art.github.io/bali-paradise/](https://baliparadisetravels-art.github.io/bali-paradise/)


## Overview

A fully responsive, dark-themed static website for a Bali-based private tour guide business. Features 6 tour packages, photo gallery, booking via Calendly, WhatsApp contact integration, and a headless CMS for content management.

- No build step required — pure HTML, CSS, and JavaScript
- Hosted free on GitHub Pages
- Content editable via Decap CMS (no code knowledge needed)
- Bilingual Terms & Conditions (English + Bahasa Indonesia)


## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero section, featured tours, trust bar, how it works, about preview, Google Reviews |
| Tours | `tours.html` | All 6 tour packages with itineraries, inclusions, and pricing |
| Gallery | `gallery.html` | 36 photos with category filters and lightbox viewer |
| About | `about.html` | Guide bio, stats, values, Google Reviews card, embedded map |
| Contact | `contact.html` | WhatsApp enquiry form, contact cards, embedded Google Map |
| Booking | `booking.html` | Calendly embedded widget for date/time selection |
| Terms | `terms.html` | Bilingual terms and conditions with language toggle |


## Tour Packages

1. **Mount Batur Sunrise Trek** — Active volcano summit at 1,717m (10 hours, Moderate)
2. **Explore Ubud** — Monkey Forest, rice terraces, coffee plantation, waterfall (8-9 hours, Easy)
3. **Gate of Heaven** — Lempuyang Temple, Tirta Gangga, hidden waterfall (8-9 hours, Easy)
4. **Ubud White Water Rafting** — Jungle gorge rapids with lunch (5 hours, Moderate)
5. **ATV Quad Bike Adventure** — Rice fields, forests, rivers, villages (5-6 hours, Moderate)
6. **North Bali UNESCO Tour** — Heritage rice terraces, temples, waterfalls (8-9 hours, Easy)


## Tech Stack

- **HTML5** — Semantic markup, Open Graph meta tags
- **CSS3** — Custom properties, CSS Grid, Flexbox
- **JavaScript** — Vanilla JS (no frameworks)
- **Fonts** — Google Fonts (DM Sans + Playfair Display)
- **Hosting** — GitHub Pages (HTTPS enforced)
- **Booking** — Calendly embedded widget
- **Contact** — WhatsApp click-to-chat
- **Maps** — Google Maps embed


## File Structure

```
bali-paradise/
├── _data/          # Content data (JSON)
├── admin/          # CMS dashboard (OAuth-protected)
├── css/            # Styles (fully responsive)
├── images/         # Tour and profile photos
├── js/             # Navigation, animations, content loader
├── about.html
├── booking.html
├── contact.html
├── gallery.html
├── index.html
├── terms.html
└── tours.html
```


## CMS (Content Management)

The site includes a headless CMS so the client can edit content without touching code.

### What's editable:

- Business details and contact info
- About page content
- Tours (add/edit/delete)
- Gallery photos
- Homepage hero and testimonials
- Booking settings

Setup documentation is provided separately to the client.


## Design

- **Dark theme** — Forest green + gold accent palette
- **Fully responsive** — 6 breakpoints from large desktop to small mobile
- **No build tools** — No npm, webpack, or compilation needed
- **WhatsApp-first** — Primary contact method for Bali tourism
- **Pay on the day** — No online payment processing needed


## Deployment

The site deploys automatically via GitHub Pages whenever changes are pushed to the `main` branch. Rebuilds take 1-2 minutes.


## Contact

Contact details are available on the live website.


## Credits

- **Design & Development:** [ENORBY Systems](https://enorby.co.nz)
- **Photography:** Unsplash contributors + Kadek One
- **Fonts:** Google Fonts (DM Sans, Playfair Display)
- **CMS:** Decap CMS (open source)
- **Hosting:** GitHub Pages (free)


## Licence

This website is built for Bali Paradise Adventure Guide. All rights reserved.
Stock photography sourced from Unsplash under the [Unsplash Licence](https://unsplash.com/license).
