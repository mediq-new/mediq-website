import type { Components } from "react-markdown";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

/** Map markdown cross-links in docs/legal to site routes. */
const legalLinkMap: Record<string, string> = {
  "./privacy-policy.spec.md": "/legal/privacy-policy",
  "./privacy-policy.md": "/legal/privacy-policy",
  "./terms-and-conditions.spec.md": "/legal/terms-of-service",
  "./terms-of-service.md": "/legal/terms-of-service",
  "./refund-policy.spec.md": "/legal/refund-policy",
  "./refund-policy.md": "/legal/refund-policy",
  "./cookie-policy.spec.md": "/legal/cookie-policy",
  "./cookie-policy.md": "/legal/cookie-policy",
  "./disclaimer.spec.md": "/legal/disclaimer",
  "./disclaimer.md": "/legal/disclaimer",
};

const markdownComponents: Components = {
  h1: ({ children }: { children?: React.ReactNode }) => (
    <h1 className="mt-8 text-3xl font-bold tracking-tight text-[#1a1c1e] first:mt-0">{children}</h1>
  ),
  h2: ({ children }: { children?: React.ReactNode }) => (
    <h2 className="mt-10 border-b border-[#e1e5ea] pb-2 text-xl font-bold text-[#1a1c1e]">{children}</h2>
  ),
  h3: ({ children }: { children?: React.ReactNode }) => (
    <h3 className="mt-6 text-lg font-semibold text-[#1a1c1e]">{children}</h3>
  ),
  p: ({ children }: { children?: React.ReactNode }) => (
    <p className="mt-4 text-sm leading-relaxed text-[#41474d]">{children}</p>
  ),
  ul: ({ children }: { children?: React.ReactNode }) => (
    <ul className="mt-4 list-disc space-y-2 pl-6 text-sm text-[#41474d]">{children}</ul>
  ),
  ol: ({ children }: { children?: React.ReactNode }) => (
    <ol className="mt-4 list-decimal space-y-2 pl-6 text-sm text-[#41474d]">{children}</ol>
  ),
  li: ({ children }: { children?: React.ReactNode }) => <li className="leading-relaxed">{children}</li>,
  a: ({ href, children }) => {
    const resolved = href ? (legalLinkMap[href] ?? href) : undefined;
    const isInternal = resolved?.startsWith("/");
    if (isInternal && resolved) {
      return (
        <a href={resolved} className="font-medium text-[#0052cc] underline-offset-2 hover:underline">
          {children}
        </a>
      );
    }
    return (
      <a
        href={resolved}
        target={resolved?.startsWith("http") ? "_blank" : undefined}
        rel={resolved?.startsWith("http") ? "noopener noreferrer" : undefined}
        className="font-medium text-[#0052cc] underline-offset-2 hover:underline"
      >
        {children}
      </a>
    );
  },
  strong: ({ children }: { children?: React.ReactNode }) => (
    <strong className="font-semibold text-[#1a1c1e]">{children}</strong>
  ),
  hr: () => <hr className="my-8 border-[#e1e5ea]" />,
  table: ({ children }: { children?: React.ReactNode }) => (
    <div className="mt-4 overflow-x-auto rounded-lg border border-[#e1e5ea]">
      <table className="min-w-full divide-y divide-[#e1e5ea] text-sm">{children}</table>
    </div>
  ),
  thead: ({ children }: { children?: React.ReactNode }) => <thead className="bg-[#f8fafc]">{children}</thead>,
  th: ({ children }: { children?: React.ReactNode }) => (
    <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-[#71787e]">{children}</th>
  ),
  td: ({ children }: { children?: React.ReactNode }) => (
    <td className="px-4 py-3 text-[#41474d]">{children}</td>
  ),
  tbody: ({ children }: { children?: React.ReactNode }) => <tbody className="divide-y divide-[#e1e5ea] bg-white">{children}</tbody>,
  tr: ({ children }: { children?: React.ReactNode }) => <tr>{children}</tr>,
  blockquote: ({ children }: { children?: React.ReactNode }) => (
    <blockquote className="mt-4 border-l-4 border-[#0052cc] pl-4 text-sm italic text-[#41474d]">{children}</blockquote>
  ),
  code: ({ children }: { children?: React.ReactNode }) => (
    <code className="rounded bg-[#f8fafc] px-1.5 py-0.5 font-mono text-xs text-[#1a1c1e]">{children}</code>
  ),
};

export function LegalDocumentView({ content }: { content: string }) {
  return (
    <article className="legal-document">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
        {content}
      </ReactMarkdown>
    </article>
  );
}
