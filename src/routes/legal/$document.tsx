import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import logo from "@/assets/medikue-logo.png";
import { LegalDocumentView } from "@/components/legal-document-view";
import { isLegalDocumentSlug, legalDocuments } from "@/lib/legal-documents";

export const Route = createFileRoute("/legal/$document")({
  loader: ({ params }) => {
    if (!isLegalDocumentSlug(params.document)) {
      throw notFound();
    }
    return legalDocuments[params.document];
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData.title} | Medikue` },
      { name: "description", content: `${loaderData.title} for Medikue — Longbyte Software Private Limited.` },
    ],
  }),
  component: LegalDocumentPage,
});

function LegalDocumentPage() {
  const doc = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-[#1a1c1e]">
      <header className="sticky top-0 z-40 border-b border-[#e1e5ea] bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Medikue" className="h-8 w-auto" />
            <span className="text-lg font-bold tracking-tight text-[#0052cc] lowercase">medikue</span>
          </Link>
          <Link to="/" className="text-sm font-medium text-[#0052cc] hover:underline">
            ← Back to home
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-10 pb-16">
        <LegalDocumentView content={doc.content} />
      </main>

      <footer className="border-t border-[#e1e5ea] bg-white py-6 text-center text-xs text-[#71787e]">
        © 2025 Longbyte software private limited. All rights reserved.
      </footer>
    </div>
  );
}
