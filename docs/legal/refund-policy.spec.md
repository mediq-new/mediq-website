# Refund & Cancellation Policy

**Medikue — Smart OP Orchestration Platform**

**Last updated:** 17 May 2026  
**Version:** 1.0 (aligned with live platform logic)

This policy explains how **refunds and cancellations** work on **Medikue**, a product operated by **Longbyte Software Private Limited** (“**Longbyte**”, “**we**”, “**us**”, “**our**”). It reflects **actual system behaviour** as implemented in our payment and booking services (Razorpay Route transfers, reversal, and refund APIs). If this policy conflicts with an older marketing description, **this policy and the Platform’s in-app status prevail**.

---

## 1. Fees on a typical booking

A confirmed OP booking may include:

| Fee | Paid to | Refundable? |
|-----|---------|-------------|
| **Platform convenience fee** | Medikue | **Never**, in any scenario |
| **Hospital consultation fee** | Hospital (via Razorpay Route to the hospital’s linked account) | **Sometimes**, per rules below |

Amounts are shown at checkout. Multi-seat bookings (up to **3 seats** per booking) charge platform and consultation fees in proportion to the number of seats selected.

---

## 2. Platform fee tiers and Razorpay costs (transparency)

This section is for **patients and hospitals** so you understand what Medikue charges versus what **Razorpay** deducts from money that moves through the payment system.

### 2.1 Medikue platform convenience fee (by hospital tier)

Hospitals are assigned a **subscription tier** that sets the **platform convenience fee per seat** charged to the patient at checkout. The consultation fee is set by the hospital; the platform fee is set by Medikue per tier.

| Hospital tier | Platform convenience fee (per seat, per booking) | Notes |
|---------------|--------------------------------------------------|--------|
| **Starter** | ₹[TIER_STARTER_AMOUNT] | Shown at checkout before payment |
| **Growth** | ₹[TIER_GROWTH_AMOUNT] | Shown at checkout before payment |
| **Enterprise** | ₹[TIER_ENTERPRISE_AMOUNT] | Shown at checkout before payment |

- Fees are charged **per seat** on multi-seat bookings (up to 3 seats).
- The platform fee is **paid to Medikue**, is **non-refundable** in all scenarios (see §3 and summary table), and is **separate** from the hospital consultation fee.
- Exact amounts for your hospital appear in the patient app at checkout and in hospital onboarding materials.

### 2.2 Razorpay payment processing on the consultation fee

When a patient pre-pays the **hospital consultation fee**, Razorpay charges **payment-processing fees** on that transaction. These are **not** Medikue’s platform fee—they are **Razorpay’s** charges for card/UPI/netbanking and Route transfer mechanics.

| Item | Who pays (typical) | Detail |
|------|-------------------|--------|
| **Razorpay payment gateway fee** | Usually borne from the **consultation fee** flow (deducted by Razorpay before/settlement) | Percentage + fixed component per Razorpay’s published pricing (e.g. ~**2% + GST** on domestic cards/UPI—confirm current Razorpay schedule) |
| **Route / linked-account transfer** | Part of Razorpay’s marketplace settlement | Applied on the consultation portion transferred to the hospital’s linked account |
| **Medikue platform fee** | Patient pays at checkout | **Not** reduced by Razorpay’s consultation-fee processing; retained by Medikue |

**Example (illustrative — replace with live numbers):**

- Consultation fee: **₹500**
- Razorpay processing (e.g. 2% + 18% GST on fee): **~₹11.80** deducted from the consultation settlement path
- Hospital receives (approximately): **₹488.20** after Razorpay charges, before any other adjustments
- Platform fee (e.g. Starter tier **₹29**): paid to **Medikue** in full; patient total at checkout = **₹529**

Hospitals should budget consultation pricing knowing **Razorpay’s per-transaction cost applies to the consultation fee**, not to Medikue’s platform fee. Medikue does not mark up Razorpay’s gateway fee beyond what Razorpay charges on the payment.

For current Razorpay rates, see [Razorpay pricing](https://razorpay.com/pricing/) and your hospital’s Razorpay dashboard. Contact **support@medikue.com** for tier or fee questions.

---

## 3. How hospital consultation fees are held

When you pre-pay the consultation fee:

1. Payment is **captured** through Razorpay on Medikue’s merchant account.
2. The consultation portion is **transferred** to the hospital’s linked Razorpay account with a **settlement hold** until the end of the **session day (India Standard Time)**, unless released earlier when the visit outcome is known (see §8).
3. The **platform fee** remains with Medikue and is **not** part of the hospital transfer.

This is **not** an escrow account. Funds flow through Razorpay’s standard Route and settlement mechanics.

---

## 4. Patient-initiated cancellation

You may cancel a **confirmed** booking in the patient app **only if every seat (token) on that booking is still before desk check-in** — statuses equivalent to *pending*, *booked*, or *confirmed*. If **any** seat has progressed further (e.g. checked in, in consultation, completed, or marked no-show), **the whole booking cannot be self-cancelled** in the app; contact the hospital.

### Consultation fee refund (patient cancel)

| When you cancel | Consultation fee refund |
|-----------------|------------------------|
| **Before** the scheduled session **start time** | **100%** of the consultation fee paid for that booking |
| **During** the scheduled session window (from start time until session end) | **0%** — no consultation refund |
| **After** the session window has ended | **0%** — treat as post-session / no-show handling |

The session end time is the scheduled end time, or a default window from the start time if no end was set.

### Platform fee

The **platform convenience fee is never refunded** for patient cancellation.

### Booking status

A successful patient cancel marks the booking **cancelled** and cancels all associated pre-check-in tokens.

### Partial seat cancellation (multi-seat)

**Not supported** in the patient app today. You cannot cancel individual seats while keeping others active on the same order. Hospital staff or hospital-initiated session actions may apply different rules (§5).

---

## 5. Hospital-initiated cancellation

### 5.1 Full OP session cancellation

When a hospital **cancels an entire OP session**:

- Tokens still **before check-in** (*pending*, *booked*, *confirmed*) are voided.
- Eligible consultation fees for those tokens/bookings receive a **100% consultation refund** (hospital-initiated / surgery-block reason in payment records).
- Tokens already **checked in** (*at clinic*), **in consultation**, **completed**, or **no-show** are **not** voided or refunded by this action.
- The **platform fee is not refunded**.

### 5.2 Surgery block

When a session is configured and cancelled as a **surgery block**, refund treatment for eligible pre-check-in bookings matches **full consultation refund** as for hospital session cancellation. Platform fee remains with Medikue.

### 5.3 Multi-seat / proportional refunds (hospital paths)

Where the system processes hospital-initiated refunds for a subset of seats on a shared payment, the consultation refund amount is calculated **proportionally** by seat count (rounded down to whole paise; minimum refund rules apply).

---

## 6. No-show

If you do not attend and staff marks your token **no-show** (or equivalent terminal no-show handling applies):

- The **consultation fee is retained by the hospital** (no refund to you).
- The **platform fee is not refunded**.

No-show is separate from patient voluntary cancellation during the session window (which also yields 0% consultation refund).

---

## 7. Completed consultation

Once your consultation is marked **completed**, the consultation fee is earned by the hospital. **No refund** is issued for that visit. Settlement hold on the hospital transfer may be **released early** when the visit is completed (see §8).

---

## 8. Settlement timing (when the hospital receives funds)

- Consultation fees are typically held on the Route transfer until **23:59:59 IST on the session date**, then settled per Razorpay’s schedule (often **T+2 business days** to the hospital’s bank after release).
- When a visit is **completed** or marked **no-show**, the Platform may **release the hold earlier** so settlement can begin sooner, provided no refund is in progress and all seats on the payment are in a terminal state for payout.

---

## 9. How refunds are processed technically

1. **Reversal** of the held Route transfer (full or partial consultation amount), when applicable.
2. **Refund** to your original payment method via Razorpay (`POST` refund on the captured payment).

Minimum refundable consultation amount per Razorpay rules: **₹1.00 (100 paise)**. Smaller amounts may be marked as no refund in the system.

### Refund timing to your bank/card/UPI

After Medikue **initiates** a refund:

- Many refunds complete in **minutes** when your bank and payment method support accelerated processing.
- Otherwise, crediting typically takes **5–7 working days**, depending on Razorpay and your issuer.

The app may show **refund initiated** before your bank posts the credit.

### After hospital settlement

If the consultation fee was already released/settled to the hospital before a qualifying refund, Medikue may **refund you from Medikue** and record an internal **hospital recovery** balance to reconcile with the hospital separately. This does not change your right to receive an eligible refund.

---

## 10. What we do not refund

- **Platform convenience fee** — all scenarios.
- Consultation fee when policy is **0%** (e.g. patient cancel during session window, no-show, completed visit).
- Bookings that cannot be cancelled because tokens are no longer pre-check-in.
- Payments that failed or were never captured (voided orders — you were not charged).

---

## 11. Failed refunds and disputes

If a refund fails at the payment gateway, our systems may **retry** a limited number of times. Persistent failures are escalated for **manual operations** review.

For clinical or billing disputes about a specific visit, **contact the hospital first**. For Platform payment status, contact **support@medikue.com** with your booking/order reference.

Chargebacks and payment disputes are handled under Razorpay and banking network rules; Medikue may share transaction records with issuers as required.

---

## 12. Booking horizon

Sessions may be booked only within Medikue’s **advance booking window** (currently up to **90 days** ahead). This keeps payments within Razorpay’s practical refund windows.

---

## 13. Changes

We may update this policy when product logic changes. Material changes will be communicated reasonably in-app or on our website.

---

## 14. Summary table

| Event | Platform fee | Consultation fee |
|-------|--------------|------------------|
| Patient cancel — before session start | Not refunded | **100%** refund if pre-check-in |
| Patient cancel — during session window | Not refunded | **No** refund |
| Patient cancel — any seat past pre-check-in | Not refunded | **Cancel blocked** in app |
| Hospital / surgery-block session cancel — pre-check-in | Not refunded | **100%** refund |
| Hospital session cancel — already at clinic+ | Not refunded | **No** refund via session cancel |
| No-show | Not refunded | **Retained by hospital** |
| Consultation completed | Not refunded | **Retained by hospital** |

---

## 15. Contact

**support@medikue.com**

---

*This policy is aligned with Medikue API implementation (patient cancel, hospital session cancel, payment outbox, and cancellation policy modules) as of May 2026. Legal counsel should review before external publication.*
