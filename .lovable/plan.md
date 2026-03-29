

## Add Honeypot Spam Protection to Contact Form

### What
Add a hidden honeypot field that bots will fill out but humans won't see. If the field has a value on submit, silently reject the submission.

### Changes — `src/components/Contact.tsx`

1. Add a hidden input field named `botcheck` (Web3Forms supports this natively) inside the form
2. The field is visually hidden with CSS (`display: none`) so real users never see it
3. Web3Forms automatically rejects submissions where `botcheck` has a value

Since Web3Forms has built-in honeypot support, we just need to add:
```tsx
<input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
```

inside the `<form>` element. No schema or logic changes needed — Web3Forms handles the rest server-side.

Single line addition. No other files affected.

