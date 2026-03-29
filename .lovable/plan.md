

## Fix Contact Form Error on cyberdravida.in

### Root Cause
The `Content-Security-Policy` meta tag in `index.html` restricts outbound requests via `connect-src` to only `'self'` and `https://api.groq.com`. The contact form's POST to `https://api.web3forms.com` is being blocked by this CSP rule.

### Fix
**Update `index.html`** — Add `https://api.web3forms.com` to the `connect-src` directive. Also add `https://va.vercel-scripts.com` for Vercel Analytics/Speed Insights to work properly.

The updated CSP `connect-src` will be:
```
connect-src 'self' https://api.groq.com https://api.web3forms.com https://va.vercel-scripts.com;
```

### Changes
1. **`index.html` line 15** — Update the `connect-src` directive to include `https://api.web3forms.com` and `https://va.vercel-scripts.com`

Single-line change. No other files affected.

