# Terms and Conditions (Terms of Service) — content specification

**Document type:** Terms of Service / Terms & Conditions  
**Product:** Medikue (MediQ Smart OP Orchestration System)  
**Provider:** Longbyte Software Private Limited  
**PRD reference:** MediQ PRD v9.0 — Executive Summary, Personas, Fees, Booking states, Escrow, §10.1 Auth, Appendix C  
**Status:** Spec for legal drafting — not publishable as-is

---

## 1. Agreement structure

- Binding contract between user and **Longbyte Software Private Limited**.
- Separate **Hospital Partner Agreement** / escrow tri-party terms for hospitals (Medikue + hospital + RazorpayX trustee) — patients are **not** party to that agreement but affected by hospital-configured rules.
- By using Medikue (app, PWA, staff dashboard where applicable, website), user accepts these Terms.
- Age capacity: 18+ to contract, or guardian for minors `[PLACEHOLDER]`.

## 2. Service description

Medikue provides (PRD §1, §4):

- **Smart Queue** — unified online + walk-in queue per doctor OP session.
- **Virtual tokens** and live queue position / **EWT** (Estimated Wait Time).
- **QR check-in** at hospital desk.
- **Booking** with optional Hospital Consultation Fee pre-payment.
- **Priority Tokens** when surgery block or hospital session cancellation occurs.
- **OP Visit Policy** enforcement (hospital-configured follow-up limits).
- **Token cap** per session; session full messaging.
- **Prescription record** (informational, staff-entered) — not a legal prescription unless hospital says otherwise.
- **Notifications** (push, SMS).
- **Lobby display** (read-only, truncated names).

**Explicit exclusions:**

- Medikue does not provide medical advice, diagnosis, or treatment.
- Doctors and hospitals remain responsible for clinical decisions.
- EWT is **estimate only**, not a guarantee (cross-link Disclaimer).

## 3. User roles and accounts

| Role | Access | Authentication (PRD §10.1) |
|------|--------|----------------------------|
| Patient | App / PWA | Phone OTP (MFA), JWT 30-day refresh |
| Hospital staff | Staff Dashboard | Phone OTP + Hospital Code; 8h session; 15 min idle lock |
| Super Admin | Internal portal | Email + TOTP; 4h session |

- User must provide accurate information.
- Prohibited: sharing staff credentials, manipulating queue without authorisation, automated scraping, reverse engineering.

## 4. Relationship with hospitals

- Hospitals are **independent** service providers; Medikue is a technology platform.
- Hospital sets: OP visit policy, token cap, cancellation/no-show rules, consultation fees, surgery blocks.
- Hospital may cancel sessions; patient remedies per Refund Policy and Priority Token rules.
- Medikue not liable for hospital medical negligence, facility conditions, or staffing.

## 5. Booking, tokens, and queue rules

### 5.1 Token states (patient-visible outcomes)

From PRD: Booked → Confirmed → At-Clinic → In-Consultation → Completed; also No-Show, Cancelled, Rescheduled; future Diagnostics-Hold.

### 5.2 Patient obligations

- Arrive and **check in** via QR when required.
- Monitor notifications; keep phone number current.
- Late arrival may result in **bump** in queue (PRD scenarios).
- No-show after “Next” called may forfeit fees per hospital policy.

### 5.3 Staff / hospital controls

- Staff may reorder queue (emergency, VIP, paediatric/elderly nudge) with **mandatory reason** (audit).
- Emergency / critical insertions may increase EWT for others.
- Session pause, surgery block, session cancellation.

### 5.4 OP Visit Policy

- Hospital-configured: first visit window, max follow-ups, warn vs hard block modes.
- Patient informed on booking when policy breached.

### 5.5 Token cap

- When cap reached: online booking blocked; walk-in blocked at staff discretion.

### 5.6 Priority Token (surgery block / session cancel)

- Issued at **no additional Platform Fee** for next session with same doctor.
- Hospital Consultation Fee may transfer to new token (escrow).
- Valid **90 days** (PRD default; confirm in Terms).
- Queue priority ahead of standard bookings in next session.

### 5.7 Reschedule

- Token reschedule within allowed window — Platform Fee not charged again (PRD).

## 6. Fees and payments

| Fee type | Payer | Notes |
|----------|-------|-------|
| **Platform Convenience Fee** | Patient | Charged by Medikue per booking |
| **Hospital Consultation Fee** | Patient (optional pre-pay) | Held in escrow until release conditions met |

- Payment processor: **Razorpay** (India).
- Escrow: **RazorpayX Escrow+** (Axis Trustee Services / RBL Bank or ICICI per agreement).
- Platform Fee is **non-refundable** in all cancellation scenarios listed in PRD (surgery block, session cancel, patient cancel, no-show) unless `[PLACEHOLDER: future policy change]`.
- Hospital Consultation Fee subject to **Refund Policy** and hospital-configured windows.

## 7. Escrow (patient summary)

Plain-language summary (detail in Refund Policy):

- Pre-paid hospital fees held until session completed, cancelled, disputed, or Priority Token rules apply.
- Payout to hospital typically within **24 hours** after session completion (PRD SLA).
- Disputes may freeze funds up to **14 days** resolution.

## 8. Communications

- User consents to transactional SMS/push for bookings, queue updates, surgery block, refunds.
- Walk-in: SMS if phone given; printed slip if not (PRD §10.3).
- Marketing messages: separate opt-in `[PLACEHOLDER]`.

## 9. Acceptable use

- No abuse of staff, fraudulent bookings, payment chargebacks in bad faith.
- Medikue may suspend accounts for fraud, policy breach, or legal request.

## 10. Intellectual property

- Medikue brand, UI, software owned by Longbyte / licensors.
- User grants licence to use data needed to operate the service.

## 11. Availability and changes

- Target **99.9%** uptime (PRD NFR) — no absolute guarantee; maintenance windows.
- Staff app **offline up to 4 hours** (local-first) — explain sync limitations.
- Medikue may modify features; material adverse changes with notice.

## 12. Limitation of liability

- Cap damages to fees paid in prior 12 months `[PLACEHOLDER: counsel to set]`.
- Exclude indirect, consequential damages where law permits.
- EWT / queue position errors — see Disclaimer.
- Not liable for payment gateway or hospital acts.

## 13. Indemnity

- User indemnifies Longbyte for misuse, false information, violation of Terms (subject to counsel review).

## 14. Dispute resolution

- Governing law: **India**.
- Courts / arbitration: `[PLACEHOLDER: city, e.g. Hyderabad]`.
- Consumer forum rights preserved for eligible users under Indian law.

## 15. Termination

- User may stop using service; deletion per Privacy Policy.
- Longbyte may terminate for breach; effect on unused Priority Tokens and escrow per Refund Policy.

## 16. Contact

- **support@medikue.com**
- Registered office: `[PLACEHOLDER: address, CIN]`

---

## Open PRD items for legal (Terms annex)

- PRD Q3: Refund policy when patient cancels voluntarily — hospital-configurable; reference in Terms + Refund Policy.
- PRD Q13: Platform Fee refunded on surgery block? — v9 says **retained**; Terms must match.
- PRD Q17: Legal status of in-app prescription — informational only.
- PRD Q19: Tri-party escrow agreement scope per hospital tier.
