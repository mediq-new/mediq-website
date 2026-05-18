# Cookie Policy — content specification

**Document type:** Cookie Policy / Cookie Notice  
**Product:** Medikue marketing website + web surfaces  
**Provider:** Longbyte Software Private Limited  
**PRD reference:** MediQ PRD v9.0 — tech stack (web apps), §10 security; marketing site scope (limited vs full app)  
**Status:** Spec for legal drafting — not publishable as-is

---

## 1. Scope

This policy covers cookies and similar technologies on:

| Property | Technology (PRD) | Cookie intensity |
|----------|------------------|------------------|
| **medikue.com** marketing site | TanStack Start / React (current repo) | Low — mostly essential + analytics placeholders |
| **Staff Dashboard** | React web (tablet) | Session/auth cookies when live |
| **Patient PWA / web** | React Native + PWA | Auth, preferences, analytics `[when deployed]` |
| **Lobby Display** | Static HTML + SSE | Minimal — likely no tracking cookies |

- Native **mobile apps** may use device identifiers and local storage — cross-reference Privacy Policy; mention if app store privacy labels differ.

## 2. What are cookies

- Short plain-language explanation of cookies, local storage, session storage, pixels.
- Similar technologies: SDK analytics, FCM tokens (push — not cookies but disclose in Privacy Policy).

## 3. Types of cookies used

### 3.1 Strictly necessary (essential)

| Name / purpose | Duration | Legal basis |
|----------------|----------|-------------|
| Session / auth tokens (JWT) | Session / 30-day refresh (patients per PRD) | Contract / legitimate interest |
| CSRF / security | Session | Security |
| Cookie consent preference | 12 months `[typical]` | Consent storage |
| Load balancing / CDN | Session | Service delivery |

- **Cannot be disabled** without breaking site.

### 3.2 Functional (optional)

| Purpose | Examples |
|---------|----------|
| Language preference | EN / TE / HI (PRD localisation v1) |
| Large-text / accessibility mode | WCAG 2.1 AA target in PRD |

### 3.3 Analytics (placeholder — configure before publish)

| Provider | Status | PRD note |
|----------|--------|----------|
| `[PLACEHOLDER: e.g. Google Analytics 4, Plausible, PostHog]` | Not confirmed in PRD | Add only after DPA and consent banner |
| Product analytics for queue KPIs | Internal — hospital-facing, not marketing site | |

- Require **opt-in consent** before non-essential analytics cookies in India/EU-facing flows `[counsel: DPDP + IT Rules]`.

### 3.4 Marketing (placeholder)

| Purpose | Status |
|---------|--------|
| Retargeting pixels | `[PLACEHOLDER: none unless added]` |
| Social embeds | `[PLACEHOLDER]` |

- Default: **none** on v1 marketing site unless explicitly added.

## 4. Third-party cookies

List when integrated:

| Third party | Service | Cookies? |
|-------------|---------|----------|
| Razorpay | Checkout (future) | Payment session |
| Firebase | Push (app) | May use app instance ID |
| Cloudflare / AWS | Hosting | Security, performance |
| `[Analytics vendor]` | Web stats | Yes — consent required |

- Link to third-party privacy policies.

## 5. How we use cookie data

- Understand website traffic and improve marketing pages.
- Remember consent choices.
- Secure login for staff/admin portals.
- **Not** used to make automated medical decisions.

## 6. Managing cookies

- **Browser settings** — how to block/delete cookies.
- **Consent banner** on first visit (marketing site):
  - Accept all / Reject non-essential / Customise
  - Link to this policy and Privacy Policy
- In-app: OS-level controls for mobile.

## 7. Do Not Track

- State whether service honours DNT signals `[typically: no, with explanation]`.

## 8. Updates

- Policy version date; notify via banner on material changes.

## 9. Contact

- **support@medikue.com**
- Data protection queries cross-reference Privacy Policy grievance officer `[PLACEHOLDER]`.

---

## Implementation checklist (engineering)

- [ ] Inventory actual cookies set by `mediQ_website` dev/prod builds
- [ ] Add consent banner before enabling analytics
- [ ] Document cookies in privacy annex table after launch
- [ ] Staff Dashboard: document session cookie names in security appendix
- [ ] Cookie Policy URL: `/legal/cookies` (wire footer from `index.tsx`)

## PRD gaps

- PRD does not specify marketing analytics stack — treat as **placeholder** until stack chosen.
- Patient app cookies covered primarily under Privacy Policy § device identifiers.
