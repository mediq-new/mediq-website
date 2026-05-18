# Medikue legal documents — specification index

These files are **content specifications** (not final legal text) derived from **MediQ PRD v9.0** (2026-04-12). Use them to draft publishable policies for the Medikue marketing site and product.

| Spec file | Footer link | Primary PRD sources |
|-----------|-------------|---------------------|
| [privacy-policy.spec.md](./privacy-policy.spec.md) | Privacy Policy | §10.2 Data Privacy, §12.2 Data Retention, §10.3 Walk-In Consent, KYC |
| [terms-and-conditions.spec.md](./terms-and-conditions.spec.md) | Terms of Service | Personas, fees, escrow, booking states, hospital relationship |
| [refund-policy.spec.md](./refund-policy.spec.md) | Refund Policy | §C.3 escrow release, cancellation table, Priority Token, Platform Fee |
| [disclaimer.spec.md](./disclaimer.spec.md) | Disclaimer | EWT, prescriptions, not medical advice, hospital responsibility |
| [cookie-policy.spec.md](./cookie-policy.spec.md) | Cookie Policy | Web properties, analytics placeholders, session/auth |

## Entity names (align all documents)

| Role | Name |
|------|------|
| Operating company | **Longbyte Software Private Limited** |
| Consumer product / brand | **Medikue** (public website); **MediQ** (internal PRD name — use consistently in legal drafts) |
| Support contact | **support@medikue.com** |
| Governing law (proposed) | **India** — DPDP Act 2023, RBI payment/escrow norms, applicable IT Rules |

## Before publication

- [ ] Legal counsel review (India healthcare + payments)
- [ ] Replace `[PLACEHOLDER]` fields (registered address, CIN, grievance officer)
- [ ] Wire footer links from `src/routes/index.tsx` to real routes (e.g. `/legal/privacy`)
- [ ] Version and “Last updated” date on each published page
- [ ] Hindi/Telugu summaries if required by hospital partners (PRD v1 localisation: EN + TE + HI)
