# Refund Policy — content specification

**Document type:** Refund & Cancellation Policy  
**Product:** Medikue (MediQ Smart OP Orchestration System)  
**Provider:** Longbyte Software Private Limited  
**PRD reference:** MediQ PRD v9.0 — Fee tables (pp. 3–5), Escrow release (§C.3), Cancellation matrix, Priority Token, Platform Fee policy v9  
**Status:** Spec for legal drafting — not publishable as-is

---

## 1. Purpose and scope

- Applies to **patients** who pay through Medikue:
  - **Platform Convenience Fee** (Medikue)
  - **Hospital Consultation Fee** (optional pre-pay, held in escrow for hospital)
- Does **not** replace hospital’s own billing for services paid directly at hospital desk outside Medikue.
- Refunds processed via **Razorpay** to original payment method unless otherwise stated.
- Timelines are **targets**; payment network delays may add 5–10 business days `[PLACEHOLDER]`.

## 2. Fee types (definitions)

| Fee | Refundable? | PRD default |
|-----|-------------|-------------|
| **Platform Convenience Fee** | **No** — retained in all listed cancellation scenarios | PRD glossary + cancellation table p.3 |
| **Hospital Consultation Fee** (pre-paid) | **Conditional** — per trigger below and hospital configuration | Escrow rules |

## 3. Platform Convenience Fee — no refund scenarios

State clearly that Platform Fee is **not refunded** when:

| Trigger | PRD reference |
|---------|---------------|
| Surgery block (hospital-initiated) | Retained; patient gets Priority Token |
| Session cancellation (hospital-initiated) | Retained |
| Patient voluntary cancellation | Retained |
| No-show (patient) | Retained |
| Token cap / booking failure after payment edge cases | `[PLACEHOLDER: Payment-Slot Conflict handling]` |

**v9 policy note (PRD Executive Summary):** Surgery block is **not cash-refunded** for platform fee; accommodation via **Priority Token** aligns with Indian hospital practice.

## 4. Hospital Consultation Fee — escrow and release

### 4.1 When hospital receives fee (no patient refund)

| Condition | Action |
|-----------|--------|
| Session marked **Completed** and all tokens processed | Release to hospital within **24 hours** (PRD Escrow Release SLA) |
| Patient **no-show** | Retain per hospital no-show policy — default **no release, no refund** to patient |
| **Priority Token used** for rescheduled visit | Release held fee to hospital when that consultation completes |

### 4.2 When patient receives refund

| Trigger | Refund amount | PRD reference |
|---------|---------------|---------------|
| **Session cancellation** (hospital-initiated) | **Full** Hospital Consultation Fee | PRD p.4 |
| **Patient voluntary cancellation** | Per hospital window: e.g. full if &gt;24h before session; **50%** if &lt;24h (example in PRD) | Hospital-configured at onboarding |
| **Priority Token expires** (90 days unused) | **Full** Hospital Consultation Fee to original payment method | PRD p.4–5 |
| **Dispute resolved** in patient’s favour | As per resolution: `refunded_to_patient` | Escrow dispute model |

### 4.3 Surgery block — special handling

- **Platform Fee:** not refunded.
- **Hospital Consultation Fee:** **not released** immediately; **frozen/transferred** against issued **Priority Token** for doctor’s next available session.
- If Priority Token **used:** fee released to hospital after that consultation.
- If Priority Token **expires (90 days):** refund Hospital Consultation Fee to patient.
- Patient messaging (PRD): Priority Token issued; no additional platform fee on rebooking.

### 4.4 Disputes

- Hospital or patient may raise **escrow dispute**; funds frozen pending Super Admin resolution.
- Target resolution: **14 days**; escalation to trustee after 14 days (PRD escrow agreement terms).
- Outcomes: release to hospital, refund to patient, split, or escalate.

## 5. Priority Token (non-cash remedy)

Explain when refund is **not** cash but a **Priority Token**:

- Surgery block on booked date
- Full hospital session cancellation (may combine with refund of pre-paid hospital fee per scenario table — PRD: session cancel = full hospital fee refund **and** messaging mentions refund; Priority Token also issued for surgery block)

**Clarify for legal:** Reconcile PRD patient messaging (“Full Hospital Fee refund + Priority Token for next visit” on session cancel p.2) vs fee retention table — counsel to harmonise.

Priority Token terms to include:

- Valid **90 days** (PRD default; PRD open Q20)
- No additional Platform Fee on redemption
- Priority placement in next session queue
- Expiry warning at **90 − 7 days** (notifications in PRD)

## 6. No-show and late arrival

| Scenario | Refund? |
|----------|---------|
| Late arrival / bumped slots | No automatic refund; new EWT applies |
| No-show after “Next” called | No refund (default); token cancelled |
| Diagnostics-Hold timeout (future) | No refund — consultation occurred (PRD) |

## 7. How to request a refund

- In-app support flow `[PLACEHOLDER]`
- Email: **support@medikue.com** with token ID, payment receipt, reason
- Escrow disputes: formal dispute via app or hospital

## 8. Chargebacks

- User should contact Medikue before card chargeback; fraudulent chargebacks may lead to account suspension.

## 9. Hospital-specific rules

- Each hospital may configure cancellation windows and no-show retention at onboarding (PRD Appendix C escrow agreement).
- **Most restrictive rule applies** where disclosed at checkout `[PLACEHOLDER: UX requirement]`.

## 10. Taxes and fees

- GST on Platform Fee: `[PLACEHOLDER: rate and invoice mechanism]`
- Refunds net of non-refundable gateway charges if applicable `[PLACEHOLDER]`.

## 11. Contact

- **support@medikue.com**
- Refund status SLA: acknowledge within `[PLACEHOLDER: 48h]`; process per trigger timelines above.

---

## Summary matrix (for final policy table)

| Event | Platform Fee | Hospital Fee (pre-paid) |
|-------|--------------|-------------------------|
| Session completed | Retained (earned) | Released to hospital |
| Patient cancel (early) | Retained | Refund per hospital % |
| Patient cancel (late) | Retained | Partial/no per hospital |
| Patient no-show | Retained | Retained (default) |
| Hospital session cancel | Retained | **Full refund** |
| Surgery block | Retained | Held → Priority Token / refund if expires |
| Priority Token used | N/A (no new platform fee) | Released to hospital on completion |
| Dispute (patient wins) | `[counsel]` | Refund per resolution |
