# Disclaimer — content specification

**Document type:** Medical, service, and liability disclaimer  
**Product:** Medikue (MediQ Smart OP Orchestration System)  
**Provider:** Longbyte Software Private Limited  
**PRD reference:** MediQ PRD v9.0 — EWT, Prescription Record glossary, Executive Summary, NFRs, open questions  
**Status:** Spec for legal drafting — not publishable as-is

---

## 1. General

- Medikue is a **software platform** for outpatient queue and appointment orchestration operated by **Longbyte Software Private Limited**.
- Content on website and app is for **informational** purposes.
- Using Medikue does **not** create a doctor–patient relationship with Longbyte or Medikue.

## 2. Not medical advice

- Medikue does **not** provide medical advice, diagnosis, treatment, or emergency services.
- **Call local emergency services** for medical emergencies — do not rely on queue status or EWT.
- All clinical decisions remain with **licensed healthcare providers** and **hospitals**.

## 3. Estimated Wait Time (EWT)

From PRD:

- EWT is a **prediction** based on rolling average consultation duration and queue state — **not a guarantee**.
- Target accuracy: variance &lt; 10 minutes for 85% of sessions (internal KPI) — **not promised** to users in legal text.
- EWT may change due to: emergencies, critical insertions, no-shows, late arrivals, session pause, doctor delay, system latency.
- User should rely on **live notifications** but remain prepared for variation.

## 4. Queue position and fairness

- Displayed token number and position may change due to **Smart Merge Engine** rules: walk-ins, emergencies, paediatric/elderly staff nudges, manual reorder with documented reason.
- Medikue is not liable for perceived unfairness when hospital staff apply authorised queue rules.

## 5. Hospital services

- Hospitals are **independent** third parties; Medikue does not control quality, availability, or conduct of hospitals, doctors, or staff.
- Consultation fees, clinical outcomes, wait times in physical facility, and facility safety are **hospital’s responsibility**.
- Hospital cancellation, surgery blocks, and policy enforcement are set by hospital — see Terms and Refund Policy.

## 6. Prescription records

Critical PRD language (Glossary):

> **Prescription Record** — An informational, non-legal record of medication/instructions recorded by staff after consultation; visible to patient in-app.

Disclaimer must state:

- In-app prescription is **informational** unless hospital or applicable law treats it otherwise.
- **Not** a substitute for original hospital prescription, discharge summary, or regulated e-prescription where required.
- PRD open Q17: legal status of in-app prescription — **do not claim** statutory e-prescription compliance until confirmed.
- Patient must verify medicines with doctor/pharmacist.

## 7. Payments and escrow

- Payment and escrow services provided by regulated third parties (**Razorpay**, trustee banks).
- Medikue facilitates booking payments but is not a bank.
- Refund outcomes depend on event type — see Refund Policy; no guarantee of instant refund.

## 8. Technology limitations

From PRD NFR:

- **99.9%** uptime target — service may be unavailable during maintenance or outages.
- Staff dashboard may operate **offline up to 4 hours** — sync delays possible.
- Real-time updates target **&lt;300ms** staff-to-patient — not guaranteed on all networks/devices.
- Lobby display and app may show stale data during connectivity issues.

## 9. Third-party links and integrations

- Future HIS/EMR integrations (HIMS, Practo, etc.) per PRD open questions — disclaimer for third-party data accuracy `[PLACEHOLDER]`.
- App Store / Play Store — separate platform terms apply.

## 10. No warranties

- Service provided **“as is”** and **“as available”** to extent permitted by Indian law.
- Disclaim implied warranties of merchantability, fitness for particular purpose.

## 11. Limitation of liability

- Cross-reference Terms limitation of liability.
- Not liable for: missed appointments due to user error, hospital closure, incorrect phone number, failure to receive SMS, medical harm, lost wages, travel costs.
- Aggregate cap linked to fees paid `[PLACEHOLDER per Terms]`.

## 12. Regulatory status

- Do not claim **NABH**, **NMC**, or **CDSCO** approval unless obtained (PRD open Q7).
- DPDP compliance is operational commitment — separate Privacy Policy.
- RBI/regulated escrow via licensed partners — describe factually without implying Longbyte is RBI-licensed unless true.

## 13. Changes

- Disclaimer may be updated; continued use constitutes acceptance of current version.

## 14. Contact

- **support@medikue.com**

---

## Prominent UI placements (implementation checklist)

- [ ] EWT shown near: “Estimate only — not guaranteed”
- [ ] Prescription view: “Informational record — confirm with your doctor”
- [ ] Booking checkout: link to Terms + Refund Policy
- [ ] Footer: Disclaimer link (already placeholder `#`)
