# JotilLabs pricing strategy

**Date:** 2026-04-19
**Status:** Living document. Updated per-product as we brainstorm through each.
**Scope:** Market analysis, positioning, tier structure, overage model, and Enterprise mechanics for all six JotilLabs products.
**Out of scope:** Implementation of the pricing pages (handled in a separate plan once this doc is approved).

## 0. Resume context

- Pricing philosophy picked: **D (no strong preference, recommend per product based on category)**.
- Ordering: **Messenger → Outreach → Space → Flow → Avatar**. Receptionist already has a reasonable tier structure; revisit only if the other products produce a convention change.
- Each product section is added after brainstorming and user approval.

## 1. Global pricing framework

### 1.1 Tier naming convention
Standardize on **Essentials / Starter / Pro / Business / Enterprise** across every product.

- **Essentials**: solopreneur / freelancer entry point. Self-serve only. Under $50/mo. New - added after research showed prospect bounce at $89+ minimum.
- **Starter**: small-business entry. Under $100/mo where possible.
- **Pro**: highlighted default. SMB sweet spot. Mid-range price, most value.
- **Business**: serious SMB / multi-location. Concrete price, not "Contact us".
- **Enterprise**: Custom pricing, talk-to-sales. Above the Business cap.

**Why the "Essentials" name:**
- Customer-centric: signals "what's essential for YOUR business," not a stripped-down version.
- Proven across big SaaS (Dropbox Essentials, Adobe Essentials, Shopify equivalents) - prospects recognize the label instantly.
- Doesn't carry "cheap / not serious" connotations like Lite or Basic.
- Ladders cleanly across all six products (Essentials works for Messenger, Receptionist, Outreach, Space, Flow, Avatar).

Why 4 visible + Enterprise Custom:
- Essentials captures the price-first comparison shopper who currently bounces.
- Starter / Pro / Business keep the SMB comparison clean.
- Enterprise preserves pricing power for custom deals.
- 4 cards + 1 link is still scannable, especially if Essentials is styled as a "quiet" discovery card above the 3-card comparison grid (recommended layout).

### 1.2 Overage policy
Every usage-metered tier ships with an **overage rate per unit** billed at end of cycle. Rate is set so the **break-even upgrade point** happens at a reasonable overage volume (i.e., if a customer is consistently hitting overage, the math nudges them to upgrade).

Formula:
```
overage_rate = next_tier_price / (next_tier_included - current_tier_included)
```

This means: if you consistently use overage until you match the next tier's included quota, you pay exactly the next tier's price. Upgrade is the obviously-better choice before that.

Customer-facing copy: "Soft cap with per-unit overage billed at end of cycle. Alerts at 90% and 100% of included volume. Upgrade anytime to avoid overage."

### 1.3 Enterprise mechanics (applies to all products)

"Enterprise / Custom" is NOT just "call us for a number". It is a concrete tier with:

- **Minimum annual commit**: typically $15-30K ARR depending on product.
- **Volume above the Business tier cap** on the relevant metric (conversations, minutes, users, executions, interactions).
- **Paid POC / pilot**: $2-5K, credited against year-1 contract if they convert.
- **Dedicated CS + onboarding specialist.**
- **SLA guarantees**: 99.9% uptime with credits for misses.
- **SSO/SAML and advanced RBAC.**
- **Data residency option**: US, EU.
- **Custom AI fine-tuning on customer data.**
- **Custom integrations** beyond the standard connector set.
- **White-glove migration** from competitor tool.
- **Annual billing preferred** (monthly negotiable at 20%+ premium).

**Sales process:**
1. Inbound lead from pricing page "Enterprise: Talk to sales" CTA.
2. Discovery call (30 min). Needs, volume, timeline, current tool.
3. Paid POC scoped. 2-4 weeks.
4. Annual contract.

### 1.4 Unit economics framework
Assumptions (revisit quarterly with actual COGS):

| Cost element | Estimate |
|---|---|
| LLM API (per conversation, ~5-10 turns) | $0.01 - $0.05 depending on model choice |
| Twilio SMS (per outbound) | $0.0075 |
| Twilio voice (per minute, outbound AI call) | $0.015 - $0.025 |
| WhatsApp session (24h window) | ~$0.005 |
| Voice synthesis (Retell, per minute) | $0.07 - $0.12 |
| HeyGen avatar (per minute interactive) | ~$0.30 - $0.50 |
| Compute / infra overhead amortized | $0.01 - $0.02 per interaction |

**Gross margin target: 60-80%** at Pro and Business tiers. Starter can run slim for acquisition.

## 2. JotilMessenger

### 2.1 Current state (before rewrite)
- Starter $79 / 500 conversations / basic
- Professional $249 / 5,000 conversations / multi-channel
- Enterprise Custom / unlimited

### 2.2 Market analysis - full competitor tier breakdown

#### Tidio + Lyro AI (closest SMB competitor)
| Tier | Price | Lyro conversations | Channels | Notes |
|---|---|---|---|---|
| Free | $0 | 50 Lyro/mo | Web chat | Bait. Limited features. |
| Starter | $29 / mo | 100 Lyro/mo | Web chat | No SMS, no WhatsApp |
| Growth | $59 / mo | 250 Lyro/mo | Web chat | No SMS, no WhatsApp |
| Plus | $749 / mo | 5,000 Lyro/mo | + some channels | Big step, steep |
| Premium | $2,999 / mo | 10,000 Lyro/mo | All channels | $0.30 per conversation - expensive |

Per-conversation at Starter: $0.29. At Plus: $0.15. At Premium: $0.30. Not cheap at scale.

#### Intercom Fin (AI-add to Intercom)
| Line | Price | Notes |
|---|---|---|
| Intercom seat | $39-$139 / user / mo | Required baseline |
| Fin AI add-on | $0.99 / resolution | On top of seat |

Unpredictable monthly spend. A high-traffic month can balloon bills. Enterprise-trend pricing disguised as SMB.

#### ChatBot.com
| Tier | Price | Conversations | Notes |
|---|---|---|---|
| Starter | $52 / mo | 1,000 | Basic rule-based + limited AI |
| Team | $142 / mo | 5,000 | Web + FB Messenger |
| Business | $424 / mo | 25,000 | Multi-channel |
| Enterprise | Custom | Unlimited | - |

Decent value per conversation but AI quality below Intercom/Tidio.

#### Drift AI Chatbot
| Tier | Price | Notes |
|---|---|---|
| Premium | Starting ~$2,500 / mo | Contracted annual |
| Advanced | Starting ~$5,000 / mo | Enterprise |
| Enterprise | Custom | $10K+/mo |

Enterprise-only. Not for SMB.

#### HubSpot Chatbot + ChatSpot AI
| Tier | Price | Notes |
|---|---|---|
| Free | $0 | Bundled in Marketing Hub Free. Limited AI. |
| Starter | $45 / mo | Marketing Hub Starter bundle. Low-tier AI. |
| Professional | $800 / mo | Full AI features. Expensive. |
| Enterprise | $3,600+ / mo | Custom. |

Bundled with Marketing Hub, not pure-play AI chat. Appeals to customers who need the full stack.

#### Ada
| Tier | Price | Notes |
|---|---|---|
| All plans | $2,000+ / mo | Enterprise sales only |

Not SMB.

#### LivePerson (Conversational AI platform)
| Tier | Price | Notes |
|---|---|---|
| Entry | Custom, typically $1,500+/mo | Enterprise sales only |

Not SMB.

#### Competitor summary insights

1. **SMB price floor** in the category is $29-$52/mo (Tidio Starter, ChatBot.com Starter). Below this, all competitors are free tiers only.
2. **SMB Pro/Mid** is $59-$249/mo (Tidio Growth, ChatBot.com Team, Messenger proposed Pro).
3. **SMB Business** is $400-$800/mo (ChatBot.com Business, HubSpot Professional).
4. **Enterprise** starts at $1,500-$3,000/mo (Drift, Ada, LivePerson, HubSpot Enterprise).
5. **No competitor below Tidio Premium bundles web + SMS + WhatsApp + Teams in one SMB plan.** That multi-channel bundle is our wedge.
6. **Per-resolution/per-conversation metering** (Intercom Fin) is the outlier. SMBs hate unpredictable bills.

**Market finding:** SMB has converged on $50-$600/mo flat monthly tiers. JotilMessenger positioning should be:
- Essentials $39: undercuts Tidio Starter $29 only on per-conversation rate (Tidio gives 100, we give 100 at nearly identical price but include SMS).
- Starter $89: positions at-or-just-above Tidio Growth $59, with more conversations and SMS included.
- Pro $249: at SMB sweet spot, undercuts ChatBot.com Team $142 per-conversation, and multi-channel from day one.
- Business $599: far undercuts Tidio Plus $749 and ChatBot.com Business $424 on per-conversation AI capability.
- Enterprise: matches the $1,500+ Drift/Ada range but with SMB ergonomics.

### 2.3 Target customer
10-100 employee SMBs handling 500-10K customer messages per month. Dental, real-estate, small e-commerce, hospitality. Will not tolerate per-resolution metered uncertainty. Want a predictable monthly number with transparent overage.

### 2.4 Positioning
"The multi-channel AI chat SMB bundle: cheaper than Intercom, more channels than Tidio, transparent pricing."

### 2.5 Proposed tiers (revised with Essentials)

| Tier | Price | Included conversations | Knowledge bases | Channels | Key unlocks | Audience |
|---|---|---|---|---|---|---|
| **Essentials** | $39 / mo | 100 | 1 | Web chat + SMS | Basic analytics, email-only support (docs + AI bot first), self-serve signup | solopreneur, freelancer, single-practitioner, side business |
| **Starter** | $89 / mo | 500 | 1 | Web chat + SMS | Business-hours coverage, basic analytics, email support | small business (2-20 employees) |
| **Pro** (highlighted) | $249 / mo | 2,500 | 5 | + WhatsApp | 24/7, AI training, CRM sync, custom branding, chat + email support | growing SMB (10-50 employees) |
| **Business** | $599 / mo | 10,000 | 10 | + Teams, + API access | SSO, advanced analytics, priority support, multi-user admin | serious SMB / multi-location (20-100 employees) |
| **Enterprise** | Custom (from $1,500 / mo) | 10,000+ | Unlimited | All + dedicated infra | Custom AI fine-tuning, SLA, SSO/SAML, data residency, custom integrations | agency, franchise, 100+ employees |

**Pricing page layout:** Essentials sits as a "quiet" single-line entry above the 3-card comparison grid (Starter / Pro / Business). Enterprise is a "Need more? Talk to sales →" banner below the grid. Keeps scannable UX.

### 2.6 Overage rates (revised with Essentials)

| Tier | Included | Overage rate | Break-even upgrade point |
|---|---|---|---|
| Essentials | 100 conv | $0.30 / conv | ~166 overage conversations = same price as Starter. Aggressive upgrade nudge. |
| Starter | 500 conv | $0.20 / conv | ~800 overage conversations = same price as Pro. |
| Pro | 2,500 conv | $0.14 / conv | ~2,500 overage conversations = same price as Business. |
| Business | 10,000 conv | $0.08 / conv | At ~20K+ conversations/mo, Enterprise call becomes compelling. |

Customer microcopy: "Included conversations renew monthly. Need more? Overage is transparent and billed at end of cycle. Alerts at 90% and 100% of included volume."

### 2.7 Definition: conversation
A **conversation** = any customer-initiated thread, from the first customer message through 24 hours of silence (then a new customer message starts a new conversation). Industry-standard definition. Clear and predictable.

### 2.8 Unit economics check (revised with Essentials)

Per-conversation included cost at each tier:

| Tier | $/conversation included | Effective gross margin at typical use |
|---|---|---|
| Essentials | $0.390 | 80-87% (heavy headroom, but support cost drag) |
| Starter | $0.178 | 55-83% |
| Pro | $0.100 | 20-70% |
| Business | $0.060 | 0-50% at full cap, 30-70% at typical use |

**Assumed per-conversation COGS** (LLM + SMS/WhatsApp blend + infra): **$0.03 - $0.08**.

**Essentials tier operational caveats:**
- Revenue $39/mo. COGS at capped 100 conv = ~$3-8. Payment processing 3% = ~$1.20.
- Contribution margin BEFORE support: ~$30/mo/customer.
- If support cost averages $5-10/customer/mo, contribution margin NET is $20-25.
- LTV at 6% monthly churn = $300-400.
- CAC must stay below $100-150 (organic only) for Essentials to make sense. No paid ads for this tier.

**Break-even customer count check** (OPEX assumed $20-30K/mo):
- 700-1,000 Essentials customers, OR
- 200-300 Starter customers, OR
- 80-120 Pro customers, OR
- 35-50 Business customers.
Blended: realistic breakeven at ~200-300 SMB customers across all tiers.

### 2.9 Upsell path (revised)
- Essentials -> Starter: unlocked by volume >100 conv/mo, need for business-hours coverage, or staff beyond solo. Target: 15-25% in first 3-6 months.
- Starter -> Pro: unlocked by WhatsApp, AI training, CRM sync, or volume >500/mo. Target: 25-40% within 12 months.
- Pro -> Business: unlocked by Teams, API, SSO, or volume >2,500/mo. Target: 10-20% within 12 months.
- Business -> Enterprise: unlocked by volume >10K, custom AI, data residency, or security review. Target: 5-10% within 24 months.

### 2.10 Pricing page layout (customer-facing psychology)
- Essentials as small "quiet" card above the 3-card grid. Copy: *"Just getting started? Essentials at $39 →"*
- Three main cards side-by-side (Starter / Pro / Business). Pro highlighted.
- "Need more? Talk to sales →" banner below with Enterprise bullets.
- Per-card headline stat: **price + included conversations** (not just price). Makes per-conversation math visible so Tidio comparison flips to our favor.
- **Prominent 14-day free trial on Starter card** (already in data, needs surfacing).
- Toggle: Monthly / Annual. Annual = 2 months free (17% discount).

### 2.11 Open decisions (user to confirm)
- Essentials $39 tier in or out? **Recommend: in.**
- Starter price $89 vs $79: rounder anchor vs under-$80 psychological. **Default: $89.**
- Business price $599 vs publishing a higher number. **Default: $599.**
- Enterprise floor $1,500/mo or higher: **Default: $1,500/mo = $18K ARR minimum.** Lift to $2K/mo if sales finds it too low.
- Overage rates: agree with break-even-upgrade logic?
- Conversation definition (24h thread) OK?
- Annual discount 17% (2 months free) standard for all tiers?
- Essentials = fully self-serve (no sales involvement, docs + AI chatbot support only)?

### 2.12 Implementation notes (for later PR)
- Update `data/products.js` messenger.pricing block with all 5 tiers (Essentials added, Enterprise added as 5th).
- Add `overageRatePerConv` at the product level, mirroring how Receptionist has `overageRatePerMinute`.
- Add "conversation" definition tooltip/microcopy on the pricing page.
- Redesign pricing page layout: Essentials as quiet card, 3 cards main grid, Enterprise banner.
- Surface 14-day free trial prominently on Starter card.
- Add Monthly/Annual toggle.
- Under-the-hood: don't expose LLM model names on marketing page for Messenger (keep generic "best-in-class AI"). Model names exposed only on JotilSpace page.

### 2.13 Concierge Setup (current manual-onboarding reality)

Dev team sets up every account today (no self-serve infrastructure yet). Publish a **Concierge Setup** fee with strike-through messaging as a founding-customer perk.

**Banner copy under the tier grid:**
> **Concierge Setup included** - ~~$999~~ Free for founding customers.
> Our team configures your AI, knowledge base, and channels. No technical skills required - live in days, not weeks.
> [What's included in setup →]

(Note: Messenger strike-through updated from $499 to $999 to standardize across all products.)

**Setup scope by tier (Messenger-specific):**

| Tier | What concierge setup covers |
|---|---|
| Essentials | Knowledge base ingestion (1 source) + Web chat widget install + 1 SMS number + live test. No CRM, calendar, WhatsApp, or Teams. |
| Starter | Above + business-hours config + basic analytics dashboard |
| Pro | Above + WhatsApp channel + CRM sync (HubSpot / Salesforce) + AI training on your content |
| Business | Above + Teams channel + API access + SSO + advanced analytics |
| Enterprise | Full custom - model choice, data residency, white-glove migration, custom integrations |

**Add-ons (separate section, not on pricing cards):**
- Custom integration with a tool we do not support out of the box - from **$1,500**
- Custom AI fine-tuning on your data - from **$2,500**
- Branded customer portal / white-label deployment - from **$3,500**
- Dedicated phone number pool (multi-location) - from **$500/mo**

**Framing rationale:**
- "Founding customer" (not "limited-time offer") matches reality and is honest.
- Allows graceful escalation: setup fee returns after founding-customer cohort closes.
- Anchors the value of Concierge Setup without dark-pattern urgency.
- Tier-scoped features prevent Essentials from promising CRM/Calendar integrations it should not include.

**Current CTAs on pricing page (until self-serve infra ships):**

| Tier | CTA | Flow |
|---|---|---|
| Essentials | "Get started" | `/contact` form, tier-prefilled, dev onboards, Stripe invoice |
| Starter | "Start 14-day trial" | `/contact` form, tier-prefilled |
| Pro | "Start 14-day trial" | Same |
| Business | "Start 14-day trial" or "Talk to sales" | Same |
| Enterprise | "Talk to sales" | Calendar booking via Calendly/Cal.com (pending #56) |

**Self-serve infra is a separate initiative** - will unlock true Stripe checkout for Essentials and move away from manual setup. Targeted for later, not in this PR.

## 3. JotilOutreach

### 3.1 Current state (before rewrite)
- Starter $149 / 500 outbound calls + 2,000 SMS
- Professional $399 / 2,500 calls + 10,000 SMS
- Enterprise Custom / unlimited

Current volumes were enterprise-sized, not SMB. Revised below.

### 3.2 Market analysis - competitor tier breakdown

| Competitor | Tier / price | Notes |
|---|---|---|
| Goodcall | $49-$199 / mo | Voice + some SMS, SMB, decent AI. Closest apples-to-apples. |
| Synthflow | $89-$349 / mo | Voice only, SMB. No SMS bundled. |
| Squad AI | $99-$799 / mo | Outbound voice SMB |
| Bland.ai | ~$0.09 / min + platform fee | Developer, raw API, no campaign tooling |
| Retell | ~$0.07 / min base | Developer, raw API |
| Regal.io | $1,500-$5,000 / mo | Contact-center AI, enterprise |
| Air AI | $2,000-$5,000+ / mo | Enterprise only |
| Replicant | $10K+ / mo | Enterprise only |
| SimpleTexting / EZ Texting | $25-$299 / mo | SMS-only blast, no AI, no voice |
| Klaviyo SMS / Attentive | Usage-based | E-commerce SMS focus |

**Wedge:** No SMB platform bundles AI voice outbound + SMS campaigns + CRM sync in one plan. Competitors are voice-only, SMS-only, or enterprise-only.

### 3.3 Target customer + realistic volumes

| Segment | Typical outbound volume per month |
|---|---|
| Solo practitioner / solopreneur | 50-200 calls |
| Small business (1-10 staff) | 200-500 calls |
| Growing SMB (10-30 staff) | 500-1,000 calls |
| Multi-location SMB ceiling | 1,500-2,000 calls |
| Above 2,000 calls / mo | Call-center / enterprise |

**SMB outbound does not reach 10K calls/mo.** Enterprise-sized tier volumes don't exist in this segment. Revised pricing below reflects this.

Use cases by industry:
- Dental / medical: appointment reminders, lapsed-patient reactivation
- Real estate: lead follow-up, listing notifications
- HVAC / plumbing / field services: seasonal reactivation, scheduling
- Auto dealers: service reminders, trade-in campaigns
- Legal intake: consult booking
- Fitness / gyms: membership renewal, cold outreach

### 3.4 Positioning + wedge
"Voice + SMS outbound in one SMB-priced platform. TCPA-compliant, CRM-synced, scheduled campaigns without a call center."

### 3.5 Pricing model decision: CREDITS (unique to this product)

Why credits instead of separate voice-minutes and SMS buckets:
- Customers mix voice/SMS wildly across campaigns. Fixed buckets waste capacity for most customers.
- Simpler pricing messaging (one number on card vs two).
- Easier to extend (WhatsApp, future channels = one more credit rate).
- Matches industry patterns (Zapier tasks, Make operations, HeyGen credits).
- Better margin through flexible substitution.

**Conversion rate: 1 credit = 1 minute of outbound voice = 5 SMS.**

Why 1:5 ratio:
- 1 min outbound voice COGS ≈ $0.20 (Retell $0.07 + Twilio $0.014 + LLM $0.02 + dialer/pacing $0.04 + scheduling infra $0.025 + compliance $0.015)
- 5 SMS COGS ≈ $0.125 (5 × $0.025 with A2P + LLM)
- Ratio approximates cost parity, clean mental math

**Messenger stays on conversation-buckets (not credits) because chat conversations are naturally one unit.** Credits only for Outreach where channel mix is the flexibility driver.

### 3.6 Proposed tiers (credit-based)

| Tier | Price | Credits / mo | Voice-only max | SMS-only max | $/credit |
|---|---|---|---|---|---|
| **Essentials** | $149 / mo | 150 | 150 min (~100 calls at 90s avg) | 750 SMS | $0.99 |
| **Starter** | $249 / mo | 500 | 500 min (~330 calls) | 2,500 SMS | $0.50 |
| **Pro** (highlighted) | $599 / mo | 1,500 | 1,500 min (~1,000 calls) | 7,500 SMS | $0.40 |
| **Business** | $999 / mo | 3,000 | 3,000 min (~2,000 calls) | 15,000 SMS | $0.33 |
| **Enterprise** | Custom (from **$2,000 / mo**) | 5,000+ | Negotiated | Negotiated | Custom |

**$/credit decreases per tier = built-in volume discount ladder.** Pro is 60% cheaper per credit than Essentials.

**Call duration caps** (protect COGS): Essentials 3 min, Starter 5 min, Pro 7 min, Business 10 min, Enterprise negotiable. Realistic outbound calls are 60-120 sec.

### 3.7 Overage rates

| Tier | Over-credit rate | Break-even upgrade |
|---|---|---|
| Essentials | $1.20 / credit | ~85 overage credits = Starter price |
| Starter | $0.60 / credit | ~580 overage credits = Pro price |
| Pro | $0.40 / credit | ~1,000 overage credits = Business price |
| Business | $0.30 / credit | At 4K+ credits/mo, Enterprise conversation compelling |

### 3.8 Feature matrix

**Every tier baseline (non-negotiable):** TCPA + A2P 10DLC compliance, recording + transcription, basic AMD, opt-out tracking + audit trail, Concierge Setup (free for founding customers).

| Capability | Essentials | Starter | Pro | Business | Enterprise |
|---|---|---|---|---|---|
| Active campaigns | 1 | 3 | 10 | Unlimited | Unlimited |
| Concurrent (parallel) calls | 1 | 2 | 5 | 15 | 25+ |
| Channels: voice + SMS | yes | yes | yes | yes | yes |
| WhatsApp outbound | — | — | yes | yes | yes |
| Voicemail drops (AI) | — | — | yes | yes | yes |
| Live transfer (AI to human) | — | — | — | yes | yes |
| Contact upload (CSV) | 500 | 5,000 | 25,000 | Unlimited | Unlimited |
| CRM sync (HubSpot, Salesforce, Pipedrive) | — | — | yes | yes | yes + custom |
| Script source | AI templates | AI from your offer | AI trained on your KB | + custom scripts | Custom fine-tuning |
| Scheduling | Simple window | Time-zone aware | Advanced (best-time, drip) | + manual overrides | Custom logic |
| Retry logic | 1 retry | Up to 3 configurable | Smart (AMD-aware) | Smart + custom rules | Custom |
| A/B testing | — | — | yes | yes | yes |
| Analytics | Basic | Dashboard | Funnel + sentiment | + custom dashboards + scheduled reports | + data export |
| API access | — | — | — | yes | yes + priority |
| Team + roles | 1 user | 3 users | 10 users | Unlimited + RBAC | + SSO/SAML |
| Dedicated number pool | — | — | Shared | Dedicated | Dedicated + BYON |
| SLA | — | — | — | 99.5% | 99.9% with credits |
| Data residency | US | US | US | US | US or EU |
| Support | Docs + AI chatbot + email | Email | Chat + email | Priority (same-day) | Dedicated CSM |

**Reality flags (confirm before ship):** live transfer, voicemail drops, smart retry, best-time-to-contact ML, drip sequences, A/B testing, WhatsApp outbound, API, SSO/SAML - which are built vs roadmap? Roadmap items move to Enterprise as "available on request" or get cut.

### 3.9 Unit economics check

| Tier | All-voice max COGS | All-SMS max COGS | Mixed (60%) COGS | Margin at max-voice | Margin at 60% mixed |
|---|---|---|---|---|---|
| Essentials | 150 × $0.20 = $30 | 750 × $0.025 = $19 | ~$17 | 80% | 89% |
| Starter | 500 × $0.20 = $100 | 2,500 × $0.025 = $63 | ~$50 | 60% | 80% |
| Pro | 1,500 × $0.20 = $300 | 7,500 × $0.025 = $188 | ~$150 | 50% | 75% |
| Business | 3,000 × $0.20 = $600 | 15,000 × $0.025 = $375 | ~$300 | 40% | 70% |

Every tier clears 40%+ gross margin even at worst-case (all-voice, max usage). Typical use hits 70-80%+.

### 3.10 Concierge Setup scope per tier

| Tier | Setup includes | Estimated internal cost |
|---|---|---|
| Essentials | Caller ID + A2P 10DLC registration + 1 campaign + basic script + test calls | ~3 hrs (~$150) |
| Starter | + CRM CSV import + 2-3 templates + time-zone pacing | ~4 hrs (~$200) |
| Pro | + A/B testing + CRM sync + AI script training + AMD tuning | ~8 hrs (~$400) |
| Business | + API integration + dedicated number pool + SSO + custom analytics | ~15 hrs (~$750) |
| Enterprise | + TCPA compliance audit + custom AI fine-tuning + SLA + white-glove migration | Custom ($2,500-$5,000) |

**Setup-fee messaging on the pricing page:**

> **Concierge Setup included** - ~~$999~~ Free for founding customers.
> We configure your campaigns, register A2P 10DLC, connect your CRM, and train the AI on your scripts. No technical skills required. Live in days, not weeks.
> [What's included in setup →]

Strike-through set at $999 (not $499 like Messenger) because Outreach has materially higher setup overhead - A2P registration alone, compliance verification, caller ID, initial campaign design. Higher strikethrough anchors more perceived value.

### 3.11 Pricing page layout

Same pattern as Messenger:
- Essentials = quiet single-line entry card above main grid
- 3-card comparison grid: Starter / Pro (highlighted) / Business
- Enterprise = "Need more? Talk to sales →" banner below
- "Concierge Setup - $999 free" banner at bottom with expandable details
- Add-ons section (custom integrations, custom AI, dedicated infra)
- Monthly / Annual toggle (annual = 2 months free = 17%)
- On each card, show examples: "150 credits = ~100 calls OR 750 SMS OR any mix"

### 3.12 Current CTAs (until self-serve infra ships)

| Tier | CTA | Flow |
|---|---|---|
| Essentials | "Get started" | `/contact` form, tier-prefilled, dev onboards, Stripe invoice |
| Starter | "Start 14-day trial" | `/contact` form |
| Pro | "Start 14-day trial" | Same |
| Business | "Start 14-day trial" or "Talk to sales" | Same |
| Enterprise | "Talk to sales" | Calendar booking (pending #56) |

### 3.13 Implementation notes (for later PR)

- Update `data/products.js` outreach.pricing block to credit-based model (new shape, different from Messenger's conversation buckets).
- Add `pricing.type: 'credits'` discriminator so the pricing page renders the credit card UI vs bucket UI.
- Credit conversion rate stored alongside: `{ creditMinutesVoice: 1, creditSMS: 5 }`.
- Pricing card template: show credit count + "equals ~X calls OR Y SMS" examples.
- Feature matrix UI for comparison table (probably the existing `FeatureComparison` component needs extension).
- Concierge Setup strike-through: $999 for Outreach (different from Messenger's $499).
- Compliance copy callout on product page (A2P + TCPA as features, not warnings).

## 4. JotilSpace

### 4.1 Current state (before rewrite)
- Team $49 / user / mo / up to 10 users
- Business $99 / user / mo / unlimited users
- Enterprise Custom / custom deployment

### 4.2 Product scope
SMB workspace bundling: CRM + Help Desk / Tickets + Calendar + **multi-model AI Agents** (LibreChat-style). The ONLY JotilLabs product where model names (GPT-4o, Claude, Gemini) are exposed publicly because model choice IS the product value.

### 4.3 Market analysis

| Category | Competitor | Per-user price | Notes |
|---|---|---|---|
| CRM | HubSpot Starter / Pro | $18-$100 / user / mo | Strong SMB |
| CRM | Salesforce | $25-$330 / user / mo | Enterprise-weighted |
| CRM | Pipedrive | $14-$99 / user / mo | SMB standard |
| CRM | Zoho CRM | $14-$52 / user / mo | SMB |
| CRM | Copper | $29-$134 / user / mo | Gmail-first |
| Help desk | Zendesk | $19-$199 / user / mo | Category standard |
| Help desk | Freshdesk | Free-$83 / user / mo | SMB |
| Help desk | Intercom | $39-$139 / user / mo | Premium SMB |
| AI workspace | ChatGPT Team | $25 / user / mo | Single-model |
| AI workspace | Claude Team | $25-$30 / user / mo | Single-model |
| AI workspace | Poe / LibreChat cloud | $5-$20 / user / mo | Chat only, no CRM |
| Workspace | Monday CRM | $19-$28 / user / mo | Generic workspace |
| Workspace | Notion | $10-$15 / user / mo | Docs-first |
| Workspace | ClickUp | $7-$12 / user / mo | Project management |

### 4.4 Wedge
**No competitor bundles CRM + Tickets + Calendar + MULTI-MODEL AI in one product.** HubSpot Einstein locked to their model. Salesforce Einstein same. LibreChat is AI-only (no CRM). Our angle: *"Your CRM + Tickets + Calendar AND every frontier AI model (GPT, Claude, Gemini) in one interface. Stop paying for five subscriptions."*

### 4.5 Target customer
- SMB teams 2-50 users, some mid-market (up to 200 users)
- Currently paying for: CRM (HubSpot/Pipedrive) + Help desk (Zendesk) + Calendar + ChatGPT Team = $100-150/user aggregate
- Want consolidation, multi-model AI access, no enterprise complexity
- Model choice matters (different work suits different models)

### 4.6 Positioning
"One workspace. Your CRM, tickets, calendar, and every AI in one interface. Pay for what your team uses, not five separate subscriptions."

### 4.7 Proposed tiers (per-user, industry standard)

| Tier | Price / user / mo | AI queries / user / mo | Contacts | Tickets / mo | AI models |
|---|---|---|---|---|---|
| **Essentials** | $19 | 0 (no AI agents) | 500 | 200 | — |
| **Starter** | $39 | 500 | 2,500 | 1,000 | GPT-4o-mini |
| **Pro** (highlighted) | $79 | 2,500 | Unlimited | 5,000 | GPT-4o, Claude Sonnet, Gemini Pro |
| **Business** | $149 | 5,000 | Unlimited | Unlimited | All + concurrent multi-agent |
| **Enterprise** | Custom (from **$199 / user**, 25 user minimum) | Unlimited / negotiated | Unlimited | Unlimited | All + fine-tuned on your data |

### 4.8 Feature matrix

| Capability | Essentials | Starter | Pro | Business | Enterprise |
|---|---|---|---|---|---|
| CRM pipelines | yes | yes | + custom fields + sequences | + advanced automations | + custom workflow engine |
| Tickets | yes | yes | + AI auto-response | + AI triage + routing | + custom logic |
| Calendar | yes | + AI booking | + smart scheduling | + team calendars + rules | + custom integrations |
| AI Agents | — | 1 model, 500 q | 3 models, 2,500 q, concurrent | All models, 5,000 q | Custom + fine-tuned |
| Knowledge bases | 1 | 3 | 10 | 50 | Unlimited |
| Automations | — | 5 | 25 | Unlimited | Custom |
| Integrations | Email | + Zapier | + HubSpot/Salesforce + 100+ connectors | + API access | Custom |
| Team roles | 1 admin | Admin + member | + custom roles | RBAC + SSO | SSO/SAML + data residency |
| Analytics | Basic | Dashboard | + funnel + AI insights | + custom dashboards + scheduled reports | + data export |
| Support | Docs + email | Email | Chat + email | Priority (same-day) | Dedicated CSM |

### 4.9 Unit economics check

Per-user COGS assumptions (confirm with real infra data):
- LLM cost per query: $0.01 average (mix of cheap and frontier models)
- Base SaaS infra per user (DB, storage, compute, monitoring): $3-8/mo
- Payment processing: 3% of revenue

| Tier | LLM cost | Infra cost | Total COGS/user | Revenue/user | Margin |
|---|---|---|---|---|---|
| Essentials | $0 | $3 | $3 | $19 | 84% |
| Starter | $5 | $4 | $9 | $39 | 77% |
| Pro | $25 | $6 | $31 | $79 | 61% |
| Business | $50 | $8 | $58 | $149 | 61% |
| Enterprise | Capped per contract | $10+ | Custom | $199+ | Target 65%+ |

All tiers clear 60%+ gross margin. Healthy.

### 4.10 AI query definition
"Query" = one user-AI interaction that produces a model response. Multi-turn conversations = multiple queries (each new user message counts as 1). Token-capped at ~4K input + 2K output per query to prevent runaway cost. Overage rate: $0.05/query above included allotment. Alerts at 90% and 100%.

### 4.11 Concierge Setup

Setup includes:
- CRM pipeline configuration + data migration (from HubSpot/Pipedrive/Salesforce CSV)
- Ticket routing rules + templates
- Calendar integration (Google/Outlook)
- User provisioning + roles setup
- AI agents configured per tier (Starter+)
- Knowledge base ingestion (Starter+)
- Training session with admin user

Per-tier internal cost:

| Tier | Internal hours | Internal cost |
|---|---|---|
| Essentials | ~3 | ~$150 |
| Starter | ~5 | ~$250 |
| Pro | ~10 | ~$500 |
| Business | ~20 | ~$1,000 |
| Enterprise | Custom | $3,000-$10,000 |

**Setup fee: ~~$999~~ free for founding customers** (same strike-through as Outreach for consistency). Business tier's true cost approaches the $999 anchor; Essentials/Starter give room during founding phase.

### 4.12 Multi-model exposure on pricing page

Unlike other products, Space explicitly lists AI models because model choice IS the value:

- **Starter**: "GPT-4o-mini"
- **Pro**: "GPT-4o, Claude Sonnet, Gemini Pro"
- **Business**: "All frontier models + custom system prompts per agent"
- **Enterprise**: "All models + fine-tune on your data + custom deployment"

Copy guideline: *"Bring your own API key OR use ours"* as an Enterprise perk (customers with existing OpenAI/Anthropic contracts can use their own billing, reducing our LLM cost + giving them control).

### 4.13 Current CTAs (until self-serve infra ships)

| Tier | CTA | Flow |
|---|---|---|
| Essentials | "Get started" | `/contact` form, tier-prefilled |
| Starter | "Start 14-day trial" | `/contact` form |
| Pro | "Start 14-day trial" | Same |
| Business | "Start 14-day trial" or "Talk to sales" | Same |
| Enterprise | "Talk to sales" | Calendar booking (pending #56) |

### 4.14 Open decisions

1. Essentials $19 OK or push to $25 for margin safety?
2. Enterprise minimum = 25 users? Some SaaS set 50+; raises floor but harder to land.
3. Business $149 concrete vs "Talk to sales"?
4. Query cap = per-user-per-month vs pooled team quota? Per-user is standard; pooled is more flexible for small teams.
5. Which models are actually wired in the backend today? Marketing pages can only promise what's built.
6. "Bring your own API key" for Enterprise - confirm architecturally possible?

### 4.15 Implementation notes (for later PR)

- Update `data/products.js` space.pricing block to 5-tier per-user structure.
- Add `pricing.billingUnit: 'per_user'` discriminator.
- Add AI queries/user/mo as a field.
- Expose model list per tier on the pricing page (unlike Messenger/Outreach/Receptionist which use generic "best-in-class AI").
- Strike-through $999 Concierge Setup banner.
- Per-user pricing toggle: show monthly-per-user AND annual-per-user (with 17% discount).
- User-count input widget on pricing card: lets visitor enter team size, see total cost per month.

## 5. JotilFlow

*To be added after Space is approved.*

## 6. JotilAvatar

*To be added after Flow is approved.*

## 7. Decision log

| Date | Decision | Rationale |
|---|---|---|
| 2026-04-19 | Pricing philosophy = D (recommend per product) | User deferred positioning to me. |
| 2026-04-19 | Tier naming = Starter / Pro / Business / Enterprise across all products | Consistency over per-product labels. |
| 2026-04-19 | Enterprise always = concrete mechanics, not "call us for anything" | Protects margin, sets expectations. |
| 2026-04-19 | Overage formula = break-even-at-next-tier | Self-nudging upgrade path. |
| 2026-04-19 | Added **Essentials** tier at $39/mo across products | Captures price-first comparison shopper. Matches Tidio $29 psychological floor without racing to bottom. |
| 2026-04-19 | "Essentials" chosen over Solo / Lite / Basic / Launch / Spark | Customer-centric, works across all 6 products, proven in category (Dropbox, Adobe, Shopify). |
| 2026-04-19 | LLM model names (GPT, Gemini, Claude) NOT exposed on marketing pages | Avoid lock-in signaling, customer doesn't care, preserves flexibility. **Exception: JotilSpace page exposes model choice as a feature.** |
| 2026-04-19 | Annual discount = 17% (2 months free) on all tiers | Industry standard, cash-flow friendly. |
| 2026-04-20 | Messenger Concierge Setup scope limited per tier (Essentials does NOT include CRM/Calendar integrations) | Tier features must ladder. Essentials is a light-touch entry tier, not a full setup. |
| 2026-04-20 | Outreach uses CREDIT-BASED pricing, 1 cr = 1 min voice = 5 SMS | Multi-channel flexible use demands it. Messenger stays on conversation buckets. |
| 2026-04-20 | Outreach SMB volume ceilings corrected (Business = 3,000 credits ≈ 2,000 calls, not 10K) | Earlier proposal was enterprise-sized; SMB reality is 1.5-2K calls/mo max before call-center territory. |
| 2026-04-20 | Outreach Concierge Setup strike-through = $999 (vs Messenger $499) | Outreach has materially higher setup overhead: A2P registration, caller ID, campaign design, compliance verification. |
| 2026-04-20 | Concurrent/parallel call caps per tier (1/2/5/15/25+) | Parallel calls = real infra cost driver. Throttling protects margin and creates a speed-advantage reason to upgrade. |
| 2026-04-20 | Call duration caps per tier (3/5/7/10/custom min) | Protect COGS. Realistic outbound is 60-120s; caps are generous but prevent runaway cost. |
| 2026-04-20 | Space uses per-user pricing (not credits) | Industry standard for workspace/CRM. Users = seats = value metric. |
| 2026-04-20 | Space AI queries metered per-user-per-month (not pooled) | Standard SaaS AI pattern. Predictable per-seat economics. |
| 2026-04-20 | Space explicitly lists AI model names on pricing page | Multi-model IS the product wedge - naming models is the feature, not lock-in. Exception to the "don't name models" rule for other products. |
| 2026-04-20 | Space Enterprise minimum = 25 users | Reasonable floor. Below that, Business tier covers them. |
| 2026-04-20 | "Bring your own API key" as Enterprise perk | Reduces our LLM cost on the heaviest users. Customer benefits from their own rate-limits / contracts. |
| 2026-04-20 | Setup fee strike-through standardized at $999 across all three products analyzed so far (Messenger was $499; unified to $999 for messaging consistency) | ONE strike-through number across products simplifies marketing and anchors higher perceived value. Updated Messenger to $999 as well. |

## 8. Open questions

- COGS numbers above are industry-general. Want to tighten with real JotilLabs infra bills.
- Enterprise floor $1,500/mo assumes paid POC preceding. Confirm this fits the current sales motion.
- Annual discount percentage for each tier (standard is 17% = 2 months free). Not decided yet.
- Taxation / billing platform (Stripe, Chargebee, etc.): assumed Stripe but confirm.
