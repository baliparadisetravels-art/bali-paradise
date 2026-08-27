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
- **CSS3** — Custom properties, CSS Grid, Flexbox, 6 responsive breakpoints
- **JavaScript** — Vanilla JS (no frameworks), IntersectionObserver for scroll animations
- **Fonts** — Google Fonts (DM Sans + Playfair Display)
- **Hosting** — GitHub Pages (free, HTTPS enforced)
- **CMS** — Decap CMS with GitHub backend
- **Booking** — Calendly embedded widget
- **Contact** — WhatsApp Business API (click-to-chat)
- **Maps** — Google Maps embed
- **Images** — Unsplash (stock) + custom photos


## File Structure

```
bali-paradise/
├── _data/                    # CMS content (JSON)
│   ├── about.json            # About page content
│   ├── booking-config.json   # Booking page settings
│   ├── business.json         # Business details, contact info, social links
│   ├── gallery.json          # 36 gallery photos with categories
│   ├── homepage-hero.json    # Hero section text
│   ├── testimonials.json     # Guest reviews
│   └── tours.json            # All 6 tours with full data
├── admin/                    # CMS dashboard
│   ├── config.yml            # Decap CMS configuration
│   └── index.html            # CMS login page
├── css/
│   └── style.css             # All styles (1,725 lines, fully responsive)
├── images/
│   ├── atv-quad-bike.jpg     # ATV tour photo
│   └── guide-kadek.jpg       # Guide profile photo
├── js/
│   ├── cms-loader.js         # Loads JSON data into pages dynamically
│   └── main.js               # Navigation, scroll animations, mobile menu
├── .nojekyll                 # Tells GitHub Pages to skip Jekyll processing
├── about.html
├── booking.html
├── contact.html
├── gallery.html
├── index.html
├── terms.html
└── tours.html
```


## CMS (Content Management)

The site uses [Decap CMS](https://decapcms.org/) (formerly Netlify CMS) so the client can edit content without touching code.

**Admin panel:** `https://baliparadisetravels-art.github.io/bali-paradise/admin/`

### What's editable via CMS:

- **Business Details** — Guide name, WhatsApp, email, Google rating, Calendly URL, social links
- **About Page** — Bio paragraphs, stats, values/promises
- **Tours** — Add/edit/delete tours, itineraries, inclusions, pricing
- **Gallery** — Add/remove/reorder photos, captions, categories
- **Homepage** — Hero text, testimonials
- **Booking** — Calendar settings

### CMS Setup Requirements:

1. GitHub OAuth App (for authentication)
2. Netlify account (free — provides OAuth bridge only, not hosting)
3. See `Docs_Reference/DECAP-CMS-SETUP-INSTRUCTIONS.txt` for full setup guide


## How It Works (Technical)

### Content Loading Strategy

Pages have content hardcoded directly in HTML (ensures content displays immediately, even on `file://` protocol). The `cms-loader.js` script overlays updated content from `_data/` JSON files when served from a web server (GitHub Pages). On local `file://` viewing, the CMS loader skips overwriting to prevent blank pages.

### Responsive Breakpoints

| Breakpoint | Target |
|------------|--------|
| 1400px+ | Large desktop |
| 992px–1199px | Laptop / small desktop |
| 768px–991px | Tablet landscape |
| 576px–767px | Tablet portrait |
| 376px–575px | Mobile |
| ≤375px | Small mobile (iPhone SE) |

### Key Design Decisions

- **Dark theme** — Forest green (#1a2e1a) + gold (#c9a84c) accent palette
- **No build tools** — No npm, webpack, or compilation needed
- **WhatsApp-first** — Primary contact method (fastest response for Bali tourism)
- **Pay on the day** — No online payment processing needed
- **`.nojekyll`** — Prevents GitHub Pages Jekyll from ignoring `_data/` folder


## Deployment

The site deploys automatically via GitHub Pages whenever changes are pushed to the `main` branch.

### To push changes from VS Code:

1. Open the repo folder in VS Code
2. Make changes to files
3. Source Control panel (Ctrl+Shift+G) → Stage → Commit
4. Click "Sync Changes" or run `git push origin main`
5. If prompted, authorize VS Code to access GitHub (one-time only)
6. Wait 1-2 minutes for GitHub Pages to rebuild

### Manual upload via GitHub.com:

1. Go to the repo Code tab
2. Click "Add file" > "Upload files"
3. Drag files from the `Website_Live` folder
4. Commit directly to main


## Contact

- **WhatsApp:** [+62 819 9923 5447](https://wa.me/6281999235447)
- **Email:** baliparadisetravels@gmail.com
- **Google Maps:** [Bali Paradise Adventure Guide](https://maps.app.goo.gl/Lucm7mpu2UtnnKXX6)
- **Google Rating:** 4.9 stars


## Credits

- **Design & Development:** [ENORBY Systems](https://enorby.co.nz)
- **Photography:** Unsplash contributors + Kadek One
- **Fonts:** Google Fonts (DM Sans, Playfair Display)
- **CMS:** Decap CMS (open source)
- **Hosting:** GitHub Pages (free)


## Licence

This website is built for Bali Paradise Adventure Guide. All rights reserved.
Stock photography sourced from Unsplash under the [Unsplash Licence](https://unsplash.com/license).
