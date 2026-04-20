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

## 3. JotilOutreach

*To be added after Messenger is approved.*

## 4. JotilSpace

*To be added after Outreach is approved.*

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

## 8. Open questions

- COGS numbers above are industry-general. Want to tighten with real JotilLabs infra bills.
- Enterprise floor $1,500/mo assumes paid POC preceding. Confirm this fits the current sales motion.
- Annual discount percentage for each tier (standard is 17% = 2 months free). Not decided yet.
- Taxation / billing platform (Stripe, Chargebee, etc.): assumed Stripe but confirm.
