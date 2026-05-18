# Privacy Policy — content specification

**Document type:** Privacy Policy / Privacy Notice  
**Product:** Medikue (MediQ Smart OP Orchestration System)  
**Controller:** Longbyte Software Private Limited  
**PRD reference:** MediQ PRD v9.0 — §10 Security & Compliance, §12.2 Data Retention, Appendix C (KYC), §10.3 Walk-In Consent  
**Status:** Spec for legal drafting — not publishable as-is

---

## 1. Introduction

- Identify **Longbyte Software Private Limited** as the data fiduciary / service provider operating **Medikue**.
- Explain that the policy applies to:
  - **Patients** using the mobile app / PWA and web booking surfaces
  - **Hospital staff** using the Staff Dashboard (tablet web)
  - **Hospital administrators** onboarded to the platform
  - **Visitors** to the marketing website (medikue.com)
- State effective date and how users will be notified of material changes.
- Contact: **support@medikue.com**; add `[PLACEHOLDER: Grievance Officer name, email]` for DPDP.

## 2. What Medikue does (context)

- Queue orchestration for hospital **OP (outpatient)** visits: booking, walk-in registration, live queue position, EWT (Estimated Wait Time), check-in via QR, notifications.
- **Not** a hospital, not a telemedicine provider, not an insurer — technology platform between patients and participating hospitals.

## 3. Categories of personal data collected

### 3.1 Patients

| Data | Purpose | PRD basis |
|------|---------|-----------|
| Phone number | OTP login (MFA), SMS/push notifications | §10.1 Patient auth: Phone OTP |
| Name | Queue display, booking, prescriptions view | Lobby display uses truncated names |
| Age / age flags (paediatric, elderly) | Queue fairness nudges for staff | Age &lt; 5 or &gt; 70 flags |
| Booking & token history | OP visit policy, revisit reminders | `patient_visit_history`, visit policy |
| Payment metadata | Platform Fee, optional Hospital Consultation Fee | Razorpay — not full card storage by Medikue |
| Device / app identifiers | Push (FCM), session security | Notification stack |
| Location | `[PLACEHOLDER: only if collected — specify or exclude]` | |

### 3.2 Walk-in patients (no app account)

- Staff may register walk-ins **with or without** phone number (PRD §10.3).
- If phone provided: SMS receipt; if not: printed token slip only.
- Disclose that walk-in data is entered by hospital staff on the patient’s behalf.

### 3.3 Hospital staff & admins

| Data | Purpose |
|------|---------|
| Phone + hospital code | Staff authentication |
| Staff actions (audit) | Queue reorder reasons, policy overrides |
| Email + TOTP | Super Admin only |

### 3.4 Hospital KYC (business data)

- Legal entity name, PAN, GST, CIN/Trust ID, ROHINI ID (if applicable), bank account, cancelled cheque, signatory details (PRD Appendix C).
- **Access:** Super Admin only; encrypted at rest (PRD §10.2).
- **Not** patient-facing — clarify hospitals submit this under separate hospital agreement.

### 3.5 Prescription records

- **Informational, non-legal** medication/instruction records entered by staff after consultation (PRD glossary).
- Visible to patient in-app; retention **5 years** (PRD §12.2).
- State prescriptions are **not** a substitute for official hospital medical records unless hospital policy says otherwise.

### 3.6 Website visitors

- Cookies / analytics (cross-reference Cookie Policy).
- Hospital onboarding form on marketing site: hospital name, location, optional email.

## 4. Sensitive personal data

- Health-related context: queue status, doctor name, session time, prescription **information** — treat as sensitive under DPDP where applicable.
- Do **not** claim to collect clinical diagnoses unless product actually does in v1.
- Special categories: document legal basis (consent / legitimate use for service delivery).

## 5. How data is used

- Provide and improve queue, booking, EWT, check-in, notifications.
- Enforce **OP Visit Policy** (follow-up limits per hospital rules).
- Process payments and escrow (Razorpay / RazorpayX Escrow+ with trustee partners).
- Fraud prevention, audit, dispute resolution.
- Aggregated analytics (lobby density, EWT accuracy) — de-identified where possible.
- Marketing: `[PLACEHOLDER: opt-in only if used]`.

## 6. Legal bases (India — DPDP Act 2023)

- Consent for account creation, notifications, optional pre-pay.
- **DPDP consent** flag for hospitals at onboarding (`dpdp_consent_given` in PRD data model).
- Legitimate uses: security, fraud, legal compliance, service integrity.
- Explain right to withdraw consent and effect on service (e.g. cannot book without phone OTP).

## 7. Sharing and processors

| Recipient | Purpose |
|-----------|---------|
| Participating **hospitals** | Care queue operations — patient name, token, visit history per that hospital |
| **Razorpay** / **RazorpayX Escrow+** (Axis Trustee / RBL Bank) | Payments, escrow hold/release |
| **Firebase FCM**, **Twilio** | Push and SMS |
| **AWS** | Hosting |
| **Kafka / internal services** | Event processing — state as infrastructure |
| Super Admin / Longbyte staff | Support, KYC verification, escrow disputes |

- No sale of personal data.
- Sub-processor list `[PLACEHOLDER: URL or annex]`.
- Cross-border transfers: `[PLACEHOLDER: if AWS region outside India]`.

## 8. Security measures (high level)

From PRD §10.2–10.4:

- PII encrypted at rest (AES-256).
- Phone numbers: HMAC-hashed in primary DB; raw numbers only in transient notification cache.
- Public lobby displays: **truncated names** only (e.g. Rav** S.).
- HTTPS/TLS 1.3; OWASP mitigations.
- Role-based access; hospital KYC restricted to Super Admin.
- Append-only audit logs for queue changes, escrow, KYC updates.

## 9. Data retention

| Data type | Retention | PRD §12.2 |
|-----------|-----------|-----------|
| Queue / token data | 2 years | ✓ |
| Financial / escrow records | 7 years | ✓ |
| Audit logs | 5 years | ✓ |
| Notification logs | 90 days | ✓ |
| Prescription records | 5 years | ✓ |
| Patient PII | Until deletion request; max **3 years** inactive | ✓ |
| Hospital KYC | 7 years post-offboarding | ✓ |

## 10. Individual rights (patients)

- Access, correction, deletion request (DPDP: fulfil within **30 days** per PRD §10.2).
- Deletion scope includes: visit history, revisit schedules, prescriptions.
- SMS opt-out: reply **STOP** (PRD §10.3).
- Download/portability: `[PLACEHOLDER]`.
- Nominate contact for incapacity: `[PLACEHOLDER per DPDP]`.

## 11. Children

- Paediatric flag (&lt; 5) is for queue priority only — clarify if accounts for minors require guardian consent.

## 12. Changes to this policy

- Notice via app, email, or website banner for material changes.

## 13. Grievance and authority

- Grievance officer details `[PLACEHOLDER]`.
- Right to complain to Data Protection Board of India under DPDP.

---

## Drafting notes

- PRD open question #7: NABH / NMC compliance for digital queue records — legal to assess separately; do not over-promise certification in privacy policy.
- Align with hospital’s own privacy notices where hospital is independent controller for clinical records.
