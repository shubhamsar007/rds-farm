# Performance Marketing — RD Developers

---

## Phase 1 — Pixel Setup (At Launch)

Install tracking before running any ads. Even if ads start 3 months later, the data collected now makes campaigns significantly more effective.

- [ ] **Meta Pixel** — installed on all pages via Next.js
- [ ] **GA4** — installed on all pages
- [ ] **Google Ads Conversion Tag** — install now, use later

This builds warm retargeting audiences passively while the site gets organic traffic.

---

## Phase 2 — Instagram + Facebook Ads

### Why Meta First
- Indian hospitality audiences (weddings, parties, family outings) are heavily active on Instagram and Facebook
- Visual content (farm reels, hotel photos) performs natively on these platforms
- **Click-to-WhatsApp ads** remove all landing page friction — ad CTA opens a WhatsApp chat directly, perfect for this inquiry-based model

### Campaign Types

| Campaign | Target Audience | Format | Season |
|---|---|---|---|
| Wedding venue | Women 22–35, Ahmedabad + surrounding districts, engaged / recently engaged | Reels, carousel | Nov–Feb |
| Corporate events | Men/Women 28–45, Ahmedabad, job titles: manager / director / HR | Single image, lead gen | Year-round |
| Weekend farm getaway | Families 30–50, Ahmedabad city | Reel of farm + nature | Mar–Jun, monsoon |
| Party plot bookings | 20–35, Ahmedabad, interest in events/parties | Stories, Reels | Oct–Jan |
| Retargeting | Anyone who visited the site (Meta Pixel audience) | Offer flash card as ad creative | Always-on |

### Click-to-WhatsApp Ads
- Ad format: Reel or single image
- CTA button: "Send Message" → opens WhatsApp chat with pre-filled message
- Pre-filled message example: "Hi, I'm interested in booking [Hotel/Farm]. Can you share details?"
- No landing page needed — inquiry happens directly in WhatsApp
- Best performing ad type for Indian hospitality at this price point

### Ad Creative Guidelines
- Use client-provided photos and videos (real property visuals outperform stock)
- Farm Reels: golden hour shots, event setups, wide landscape shots of both plots together
- Hotel Reels: room walkthroughs, restaurant food shots, lobby ambience
- No prices in creatives — leads with experience, ends with "Contact us"
- Always include a clear CTA: "WhatsApp Now", "Call to Book", "Enquire Today"

### Suggested Monthly Ad Budget (Starting Point)

| Campaign | Monthly Budget |
|---|---|
| Wedding venue (seasonal) | ₹5,000–₹10,000 |
| Corporate events | ₹3,000–₹5,000 |
| Weekend getaway | ₹3,000–₹5,000 |
| Retargeting (always-on) | ₹1,500–₹2,000 |

Scale up campaigns that generate inquiries, pause what doesn't.

---

## Phase 3 — Google Search Ads

Lower volume than Meta but significantly higher intent — user is actively searching.

### Target Keywords

| Keyword | Match Type | Landing Page |
|---|---|---|
| `party plot booking Ahmedabad` | Exact | `/rds-farm` |
| `resort near Ahmedabad` | Phrase | `/rds-farm` |
| `3 star hotel Ahmedabad` | Exact | `/hotel` |
| `wedding venue Ahmedabad` | Phrase | `/rds-farm` |
| `farmhouse booking near Ahmedabad` | Phrase | `/rds-farm-2` |
| `corporate event venue Ahmedabad` | Phrase | `/rds-farm` |

### Rules
- Always send traffic to the specific property page, not the homepage
- Ad copy must not mention prices (consistent with site policy)
- Call extension enabled on all ads — one click to call from search results
- WhatsApp extension if available in Google Ads for India

---

## Tracking & Reporting

| Metric | Tool | What to Watch |
|---|---|---|
| Website traffic by property | GA4 | Which property page gets most visits |
| Ad click-through rate | Meta Ads Manager | CTR per creative — pause below 1% |
| WhatsApp inquiry volume | Manual count or WhatsApp Business | Leads per week |
| Cost per inquiry | Meta Ads Manager | Budget ÷ WhatsApp conversations started |
| Organic vs paid split | GA4 | Balance between SEO growth and paid spend |

---

## Timeline

| Phase | When |
|---|---|
| Meta Pixel + GA4 install | At site launch |
| First Meta campaign | 1–2 months post-launch (after pixel warms up) |
| Retargeting campaign | After 500+ site visitors tracked by pixel |
| Google Search Ads | 3–6 months post-launch (once SEO baseline is set) |
| Scale budget | Based on cost-per-inquiry data from first campaigns |
