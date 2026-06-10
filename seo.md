# SEO Strategy — RD Developers

---

## Local SEO (Highest ROI)

| Target Keyword | Page |
|---|---|
| `3 star hotel in Ahmedabad` | `/hotel` |
| `hotel with restaurant Ahmedabad` | `/hotel` |
| `resort near Ahmedabad` | `/rds-farm` |
| `farmhouse booking Ahmedabad` | `/rds-farm`, `/rda-farm-2` |
| `party plot Ahmedabad` | `/rds-farm`, `/rda-farm-2` |
| `wedding venue near Ahmedabad` | `/contact`, `/rds-farm` |
| `corporate event venue Ahmedabad` | `/rds-farm`, `/rda-farm-2` |
| `large event venue Ahmedabad` | Combined farm section or `/contact` |

---

## Technical SEO

Built directly into the Next.js site at launch.

- **JSON-LD structured data** per page type:
  - `Hotel` schema → `/hotel`
  - `FoodEstablishment` schema → `/hotel` (restaurant section)
  - `EventVenue` schema → `/rds-farm`, `/rda-farm-2`
  - `LocalBusiness` schema → `/`, `/contact`
  - `BlogPosting` schema → `/blog/[slug]`
- **`generateMetadata()`** — unique title + description per page, pulled from Sanity where applicable
- **`sitemap.xml`** — auto-generated from all static routes + dynamic blog slugs from Sanity
- **`robots.txt`** — allow all, disallow `/api/`
- **Canonical URLs** — prevent duplicate content across property pages
- **Core Web Vitals** — ISR + Sanity CDN images keeps LCP and CLS in green
- **Mobile-first** — majority of Indian hospitality traffic is mobile

---

## Content SEO (Ongoing via Sanity Blog)

Client manages blog posts via Sanity Studio. Content strategy targets high-intent and informational queries.

### Recommended Post Topics

**High intent (conversion-focused):**
- "Best wedding venues near Ahmedabad" — targets competitor audience
- "Top party plots in Ahmedabad for large gatherings"
- "Corporate retreat venues near Ahmedabad"
- "Farm stay near Ahmedabad — what to expect"

**Informational (authority-building):**
- "What to expect at a 3-star hotel in Ahmedabad"
- "How to plan a destination wedding near Ahmedabad"
- "Indoor vs outdoor event venues — which is right for your event?"

**Seasonal (timely traffic spikes):**
- "Best venues for New Year parties near Ahmedabad"
- "Monsoon farm stay ideas near Ahmedabad"
- "Diwali party plot bookings — plan ahead"
- "Summer corporate offsites near Ahmedabad"

### Blog SEO Checklist (per post)
- Unique meta title and description (set in Sanity)
- Target keyword in H1 and first 100 words
- Internal links to relevant property pages
- At least one image with alt text (served via Sanity CDN)
- `BlogPosting` JSON-LD schema auto-applied

---

## Google Business Profile (GBP) SEO

Three separate GBP listings — treated as independent local SEO assets.

| Listing | Categories |
|---|---|
| RD Hotel | Hotel, Restaurant |
| RDS Farm | Resort, Event Venue, Party Plot |
| RDA Farm 2 | Resort, Event Venue, Party Plot |

### Per Listing Optimisation
- 10+ professional photos at launch
- All attributes filled: hours, amenities, parking, capacity, payment methods
- Services list with descriptions
- 5–10 Q&A entries pre-populated
- Website link pointing to correct property page on rddevelopers.com
- Regular GBP posts — minimum 2 per month (offers, events, seasonal updates)

### Ongoing GBP Maintenance
- Respond to every review (positive and negative) within 48 hours
- Upload fresh photos monthly — Google favours active listings
- Monitor and answer new Q&A entries
- Update hours/info for holidays and special events

### Review Generation
- After every guest stay or event, client sends a WhatsApp message with the direct GBP review link
- More recent reviews = better local ranking
- Aim for 10+ reviews per listing in first 3 months

---

## SEO Timeline

| Month | Activity |
|---|---|
| Launch | Technical SEO live, sitemap submitted to Google Search Console, GBP listings created |
| Month 1–2 | First 4–6 blog posts published, GBP photos uploaded, review generation begins |
| Month 3 | Core Web Vitals audit, keyword ranking check, GBP posts routine established |
| Month 6 | Content gap analysis — identify new keyword opportunities based on Search Console data |
| Ongoing | 2 blog posts/month, monthly GBP posts, review responses |
