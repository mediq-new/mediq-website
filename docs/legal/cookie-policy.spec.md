# Cookie Policy

**Medikue — Smart OP Orchestration Platform**

**Last updated:** 17 May 2026  
**Version:** 1.0

This Cookie Policy explains how **Longbyte Software Private Limited** (“**Longbyte**”, “**we**”, “**us**”, “**our**”) uses cookies and similar technologies on **Medikue** on our **web-based** properties (hospital staff dashboard, admin portal, and related web tools) and how mobile apps use comparable identifiers.

For how we handle personal data generally, see the **[Privacy Policy](./privacy-policy.md)**.

---

## 1. What are cookies and similar technologies?

**Cookies** are small text files stored on your browser when you visit a website.

**Similar technologies** include:

- **Local storage / session storage** in browsers for app state and authentication tokens.
- **Push notification tokens** (e.g. Firebase Cloud Messaging) on mobile devices — not browser cookies but used for comparable delivery purposes.
- **Server-side session identifiers** and **JWTs** for authenticated API access.

This policy groups these under “cookies and similar technologies” where helpful.

---

## 2. Scope

| Surface | Technologies |
|---------|----------------|
| **Staff dashboard (web)** | Browser cookies, local storage, session tokens |
| **Admin portal (web)** | Browser cookies, local storage, session tokens |
| **Patient mobile app** | Secure storage for auth tokens; FCM device tokens — **not** traditional HTTP cookies |
| **Public lobby display** | Minimal storage; primarily real-time updates (e.g. SSE) without advertising trackers |

We do **not** describe escrow, payment-hold, or legacy financial cookie flows — those are not part of the current product.

---

## 3. Why we use them

### Strictly necessary

Required for the Platform to function. Without these, services cannot be provided.

| Purpose | Examples |
|---------|----------|
| **Authentication** | Keeping you signed in after OTP or staff login |
| **Security** | CSRF protection, session binding, fraud prevention |
| **Load balancing** | Routing requests to healthy servers |
| **Preference** | Language, hospital context for staff users |

**Legal basis:** Legitimate interest / contract necessity (not subject to consent in many jurisdictions for strictly necessary cookies).

### Functional

Improve experience but are not strictly required.

| Purpose | Examples |
|---------|----------|
| **UI state** | Remembering filters, table pagination, dashboard layout |
| **Feature flags** | Enabling staged rollouts per environment |

### Analytics (if enabled)

We may use first-party or privacy-oriented analytics to understand usage (pages visited, errors). **We do not use cookies for third-party advertising networks** in the current product scope.

If analytics cookies are introduced, we will update this policy and, where required, request consent before non-essential analytics on web properties.

### Communications

| Purpose | Technology |
|---------|------------|
| **Push notifications** | FCM registration tokens stored server-side |
| **SMS** | No cookie; phone numbers processed per Privacy Policy |

---

## 4. Cookies we may set (web)

Exact names may vary by deployment. Typical categories:

| Name / type | Type | Duration | Purpose |
|-------------|------|----------|---------|
| Session / auth token | HTTP-only cookie or local storage | Session or hours (staff: ~8h; admin: ~4h) | Authentication |
| Refresh token | Secure storage | Per role policy (e.g. 30 days patient JWT refresh where implemented) | Maintain login |
| `locale` / preferences | localStorage | Persistent until cleared | UI preferences |
| CSRF / correlation ID | Session cookie | Session | Security |

We do **not** maintain a public advertising cookie inventory because we do not run ad targeting cookies in the MVP product.

---

## 5. Third-party cookies and services

Third parties may set or process identifiers when you use integrated features:

| Provider | Purpose | Policy link |
|----------|---------|-------------|
| **Razorpay** | Checkout and payment iframes/APIs on web checkout flows | [Razorpay Privacy](https://razorpay.com/privacy/) |
| **Firebase (Google)** | Push notifications | [Google Privacy](https://policies.google.com/privacy) |
| **Twilio** (if SMS webhooks) | SMS delivery | [Twilio Privacy](https://www.twilio.com/legal/privacy) |
| **Hosting / CDN** | Infrastructure | Per provider |

We do not control third-party cookies. Review their policies when interacting with payment or auth widgets.

---

## 6. Managing cookies

### Web browsers

You can block or delete cookies via browser settings. Blocking **strictly necessary** cookies may prevent login or staff dashboard use.

### Mobile app

Clear app data or uninstall to remove locally stored tokens. Disable push notifications in device settings to stop FCM delivery.

### SMS opt-out

Reply **STOP** where supported on transactional SMS from Medikue or the hospital’s sender ID policy.

---

## 7. Do Not Track

We do not currently respond to browser “Do Not Track” signals because no industry standard is uniformly adopted. We minimise cross-site tracking by design.

---

## 8. Updates

We will update this Cookie Policy when technologies change. Check the “Last updated” date.

---

## 9. Contact

**support@medikue.com**

---

*Legal counsel should review before external publication.*
