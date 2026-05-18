// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// GitHub Pages: static prerender (no Cloudflare worker). Set in CI via GITHUB_PAGES=true.
const isGitHubPages = process.env.GITHUB_PAGES === "true";
// Custom domain medikue.com — assets at root (/)
const pagesBase = process.env.GITHUB_PAGES_BASE ?? "/";

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// @cloudflare/vite-plugin builds from this — wrangler.jsonc main alone is insufficient.
export default defineConfig({
  ...(isGitHubPages ? { cloudflare: false } : {}),
  tanstackStart: {
    server: { entry: "server" },
    ...(isGitHubPages ? { prerender: { enabled: true } } : {}),
  },
  ...(isGitHubPages
    ? {
        vite: {
          base: pagesBase,
        },
      }
    : {}),
});
