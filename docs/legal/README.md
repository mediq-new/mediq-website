# Medikue — Legal & policy documents

Product-aligned policy drafts (May 2026). **Legal review required** before publication.

| Document | File |
|----------|------|
| Privacy Policy | [privacy-policy.spec.md](./privacy-policy.spec.md) |
| Terms of Service | [terms-and-conditions.spec.md](./terms-and-conditions.spec.md) |
| Refund & Cancellation Policy | [refund-policy.spec.md](./refund-policy.spec.md) |
| Cookie Policy | [cookie-policy.spec.md](./cookie-policy.spec.md) |
| Disclaimer | [disclaimer.spec.md](./disclaimer.spec.md) |

**Contact (all policies):** support@medikue.com

**Legal entity:** Longbyte Software Private Limited  
**Product / brand:** Medikue (internal product of Longbyte)

All published policies should name **Longbyte** as the contracting party and data fiduciary, and **Medikue** as the service users interact with.

**Intentionally excluded from these documents:** escrow accounts, Priority Tokens, and age-based queue priority or special handling for children, minors, or elderly patients.

**Refund Policy source of truth:** live API logic (`cancellation-refund-tier.ts`, `cancel-patient-booking.use-case.ts`, `cancel-op-session.use-case.ts`, `payment-cancellation-refund.service.ts`) plus PRD v10 payment architecture (Route transfers, no escrow).
