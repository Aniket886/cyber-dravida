

## Add hCaptcha to Contact Form

Web3Forms provides free hCaptcha integration with a shared sitekey (`50b2fe65-b00b-4b9e-ad62-3ba471098be2`). No separate hCaptcha account needed.

### Steps

1. **Install `@hcaptcha/react-hcaptcha`** package

2. **Update `src/components/Contact.tsx`**
   - Import `HCaptcha` from `@hcaptcha/react-hcaptcha` and add a `useRef` for the captcha
   - Add `h-captcha-response` to the form state/schema (or manage via ref + setValue)
   - Render `<HCaptcha sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2" />` below the message field
   - On captcha verify, store the token; include it in the Web3Forms POST body as `h-captcha-response`
   - Validate that captcha is completed before allowing submit (show error if not)
   - Reset captcha on form reset

3. **Update `index.html` CSP**
   - Add hCaptcha domains to CSP:
     - `script-src`: add `https://hcaptcha.com https://*.hcaptcha.com`
     - `frame-src`: add `https://hcaptcha.com https://*.hcaptcha.com`
     - `style-src`: add `https://hcaptcha.com https://*.hcaptcha.com`
     - `connect-src`: add `https://hcaptcha.com https://*.hcaptcha.com`

### Files Changed
- `src/components/Contact.tsx` — Add hCaptcha widget and token handling
- `index.html` — Update CSP to allow hCaptcha resources

