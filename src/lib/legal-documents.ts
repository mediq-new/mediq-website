import privacyPolicy from "../../docs/legal/privacy-policy.spec.md?raw";
import terms from "../../docs/legal/terms-and-conditions.spec.md?raw";
import refundPolicy from "../../docs/legal/refund-policy.spec.md?raw";
import cookiePolicy from "../../docs/legal/cookie-policy.spec.md?raw";
import disclaimer from "../../docs/legal/disclaimer.spec.md?raw";

export const legalDocuments = {
  "privacy-policy": {
    title: "Privacy Policy",
    content: privacyPolicy,
  },
  "terms-of-service": {
    title: "Terms of Service",
    content: terms,
  },
  "refund-policy": {
    title: "Refund Policy",
    content: refundPolicy,
  },
  "cookie-policy": {
    title: "Cookie Policy",
    content: cookiePolicy,
  },
  disclaimer: {
    title: "Disclaimer",
    content: disclaimer,
  },
} as const;

export type LegalDocumentSlug = keyof typeof legalDocuments;

export const legalDocumentSlugs = Object.keys(legalDocuments) as LegalDocumentSlug[];

export function isLegalDocumentSlug(slug: string): slug is LegalDocumentSlug {
  return slug in legalDocuments;
}
