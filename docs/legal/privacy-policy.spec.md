# Privacy Policy

**Medikue — Smart OP Orchestration Platform**

**Last updated:** 20 May 2026  
**Version:** 1.1

This Privacy Policy describes how **Longbyte Software Private Limited** (“**Longbyte**”, “**we**”, “**us**”, “**our**”) collects, uses, stores, and shares personal data through **Medikue** when you use the Medikue patient mobile application, hospital staff tools, administrative portals, and related services (collectively, the “**Platform**”).

This policy is intended to align with the **Digital Personal Data Protection Act, 2023 (India)** (“**DPDP Act**”) and other applicable laws. It supplements—but does not replace—any hospital-specific notices you may receive at the point of care.

---

## 1. Who we are

Longbyte operates **Medikue**, a **staff-centric outpatient (OP) queue and booking platform** that connects patients, hospitals, and clinical staff for scheduled and walk-in visits. We act as a **technology and payments intermediary**: patient payments for eligible bookings are processed through our payment partner (Razorpay); hospital consultation fees are routed to hospital-linked accounts per our payment architecture.

**Data fiduciary / contact:**  
Longbyte Software Private Limited (Medikue)  
**Email:** support@medikue.com  
**Grievance officer:** support@medikue.com *(appoint named officer per DPDP Act before publication)*

---

## 2. Scope

This policy applies to:

- **Patients** using the Medikue patient app (booking, queue tracking, payments, notifications).
- **Hospital staff** using staff dashboards for queue management, check-in, and session operations.
- **Hospital administrators** configuring sessions, policies, and viewing operational ledgers where enabled.
- **Visitors** to public lobby displays that show anonymised queue information.

It does **not** govern clinical treatment decisions, which remain between you and the hospital and treating clinician.

---

## 3. Personal data we collect

| Category | Examples | Purpose |
|----------|----------|---------|
| **Identity & contact** | Name, phone number (E.164), email (if provided), beneficiary details for multi-seat bookings | Account access, OTP authentication, booking, notifications |
| **Visit & queue data** | Booking ID, session date/time, token number, check-in status, queue position, estimated wait | Operating the Smart Queue and displaying status |
| **Payment data** | Order/payment references, amounts (platform fee and consultation fee in paise), refund status — **not** full card/UPI credentials (handled by Razorpay) | Processing payments, refunds, and reconciliation |
| **Device & app data** | Push notification tokens (FCM), app version, locale | Delivering push notifications and improving reliability |
| **Technical & audit logs** | IP address, API timestamps, queue/payment audit events | Security, fraud prevention, dispute resolution |
| **Walk-in data (hospital-entered)** | Name/phone where staff captures them; or anonymised walk-in tokens with no PII | Issuing walk-in tokens and optional SMS |

We do **not** intentionally collect special categories of sensitive personal data (e.g. detailed medical diagnoses) for queue operation. Clinical records outside the Platform remain the hospital’s responsibility.

---

## 4. How we use personal data

We process personal data to:

1. Authenticate users (phone OTP for patients and staff; email/TOTP for platform administrators).
2. Create and manage bookings, virtual tokens, and real-time queue state.
3. Process payments and refunds via Razorpay (including route transfers to hospital linked accounts and reversals/refunds where applicable).
4. Send transactional notifications (push and SMS) such as booking confirmation, queue updates, and cancellation/refund notices.
5. Display privacy-aware information on lobby screens (e.g. truncated names where configured).
6. Maintain audit logs for queue changes, cancellations, and financial events.
7. Comply with law, enforce our Terms, and protect the Platform.

We process data on lawful bases under the DPDP Act including **consent** (where required), **performance of contract** (providing the service you request), and **legitimate uses** (security, fraud prevention, and legal compliance).

---

## 5. How we protect personal data

Measures described in our product architecture include:

- **Encryption in transit:** HTTPS/TLS for all API communication.
- **Encryption at rest** for designated PII in databases and backups.
- **Encrypted logging:** Where personal data or PII appears in application, audit, or security logs, those fields are **encrypted or tokenised** in log storage—not stored as plain-text identifiers in log systems.
- **Phone number protection:** Storage using one-way hashing/HMAC for lookup where implemented; limited retention of raw numbers in transient systems for SMS delivery only.
- **Role-based access:** Hospital staff access is scoped to their hospital; administrative access is restricted.
- **Audit trails** for material queue and payment actions.
- **Financial record retention** for statutory periods (e.g. seven years for accounting-related logs where applicable).

No security measure is perfect. You are responsible for safeguarding your device and OTP codes.

---

## 6. Offline walk-ins and hospital privacy

When patients register **offline** at the hospital (walk-in without using the patient app), hospitals may choose to **anonymise** identifying details on the Platform—e.g. issuing tokens without name or phone—so the hospital can meet its own privacy and operational policies for on-site visitors.

- **Anonymised walk-ins:** No name or phone is stored on Medikue; only token/queue metadata needed to run the session.
- **Identified walk-ins:** Where staff enter name and/or phone, that data is processed like other visit data and subject to this policy and hospital rules.

Hospitals remain responsible for their own paper registers, local privacy notices, and clinical records outside Medikue.

---

## 7. Sharing and processors

We share personal data only as needed to operate the Platform:

| Recipient type | Role |
|----------------|------|
| **Hospitals** | Receive booking, token, and check-in information for patients attending their facility |
| **Razorpay** | Payment aggregation, linked-account transfers, refunds, and merchant onboarding (hospitals complete KYC on Razorpay’s portal) |
| **SMS / push providers** (e.g. Twilio, Firebase) | Delivering notifications |
| **Cloud infrastructure** | Hosting databases, caches, and application services |
| **Professional advisers** | Legal, audit, or compliance where required by law |

We do **not** sell your personal data.

International transfers, if any, will be conducted with appropriate safeguards required by law.

---

## 8. Retention

We retain personal data only as long as necessary for the purposes above, including:

- **Active account and visit history** while you use the Platform and as needed for support and disputes.
- **Audit and payment logs** for longer periods where required by law or legitimate business needs (financial logs may be retained for up to **seven years** where applicable).
- **Notification logs** for operational periods defined in our internal retention schedule.

When retention ends, we delete or anonymise data subject to backup and legal exceptions.

---

## 9. Your rights and account deletion (India)

Subject to the DPDP Act and applicable rules, you may have the right to:

- **Access** personal data we hold about you.
- **Correct** inaccurate data.
- **Erase** personal data when eligible.
- **Withdraw consent** where processing is consent-based (without affecting prior lawful processing).
- **Nominate** another person to exercise rights on your behalf in defined circumstances.
- **Grievance redressal** through our grievance officer.

### Delete account

Medikue supports **in-app account deletion** for:

- **Patients** — removes your Medikue account profile, visit/booking history, notification preferences, and other personal data held on Medikue for your user ID, subject to legal retention exceptions below.
- **Hospital staff** — removes your staff profile and personal identifiers on Medikue; operational audit entries may retain minimal non-identifying references where required for security or financial compliance.

After a successful deletion request, we **do not retain your personal data on Medikue** except where law requires (e.g. payment/audit records for statutory periods). Aggregated or fully anonymised analytics may remain.

To exercise rights or request deletion, contact **support@medikue.com**. We will respond within timelines prescribed by law.

If you are unsatisfied with our response, you may escalate to the **Data Protection Board of India** when constituted and as permitted by law.

---

## 10. Booking eligibility (all ages)

- **No age restriction on booking:** Anyone may book or be booked for an OP visit through Medikue, including **children and minors**, subject to hospital availability and hospital rules.
- If date of birth or age is collected, it is for identification or hospital operational purposes only—not to deny minors access.
- Where a parent or guardian books on behalf of a child, the account holder confirms they are authorised to do so.
- Medikue does **not** operate automated age-based queue priority; queue order follows standard rules and hospital staff actions.

---

## 11. Hospital KYC and Razorpay

Hospitals onboard to receive consultation fees through **Razorpay linked accounts**. Medikue collects business contact and setup metadata; **PAN, bank, and KYC documents are submitted by hospitals directly to Razorpay**, not stored by Medikue for document review.

---

## 12. Cookies and similar technologies

See our **[Cookie Policy](./cookie-policy.spec.md)** for web portals and related technologies. The patient mobile app primarily uses device identifiers and push tokens rather than browser cookies.

---

## 13. Changes

We may update this Privacy Policy. Material changes will be notified in-app or by other reasonable means. The “Last updated” date reflects the current version.

---

## 14. Contact

**Privacy, support, and grievance:** support@medikue.com

---

*This document is a product-aligned policy draft. Legal counsel should review before external publication.*
