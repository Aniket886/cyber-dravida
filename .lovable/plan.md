

## Add Vercel Analytics

Since this is a React (Vite) project, not Next.js, the correct import is `@vercel/analytics/react` instead of `@vercel/analytics/next`.

### Steps

1. **Install `@vercel/analytics`** package
2. **Update `src/App.tsx`** — Add `import { Analytics } from "@vercel/analytics/react"` and render `<Analytics />` inside the component tree (after `<BrowserRouter>`)

