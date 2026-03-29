

## Connect Contact Form to Web3Forms

Send form submissions to cyberdravida@gmail.com using Web3Forms (free, no backend needed).

### How It Works
Web3Forms provides a free API endpoint. You register at web3forms.com to get an access key, then POST form data to their API. They deliver it to your email inbox.

### Steps

1. **Get your Web3Forms access key**
   - Go to [web3forms.com](https://web3forms.com)
   - Enter `cyberdravida@gmail.com` and get your free access key
   - You'll need to paste it when prompted

2. **Update `src/components/Contact.tsx`**
   - Replace the current no-op `onSubmit` with a `fetch` POST to `https://api.web3forms.com/submit`
   - Send `access_key`, `name`, `email`, `message`, and `subject` ("New Contact from Cyber Dravida Website")
   - Add loading state on the submit button
   - Show success/error toast based on API response
   - Keep all existing validation and UI intact

### Technical Details
- Web3Forms access key is a public key (safe to include in frontend code)
- No backend route needed — direct client-side POST
- Rate limiting is handled by Web3Forms (100 submissions/month on free tier)
- The email you receive will contain the sender's name, email, and message

