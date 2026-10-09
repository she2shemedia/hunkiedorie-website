# amfrench.com

The A. M. French / Hunkie Dorie website, rebuilt as plain HTML and CSS so it can live on GitHub and Cloudflare Pages instead of Wix. No build tools, no frameworks: every page is a regular `.html` file.

## What's in here

| File / folder | What it is |
| --- | --- |
| `public/` | Everything that gets published. All the files below live inside it |
| `wrangler.jsonc` | Tells Cloudflare to publish the `public` folder |
| `index.html` | Home page (hero, paw menu, The Story, The Storyteller, Friends in Need, Hunkie's Cupboard, Busy Paws, Kind Words, video, Letters from Hunkie) |
| `shop.html` | Hunkie's Cupboard (replaces the Wix store at `/category/all-products`) |
| `busypaws.html`, `coloringpages.html` | Free printables |
| `press-media.html` | Media kit |
| `terms-and-conditions.html`, `privacy-policy.html`, `refund-policy.html`, `shipping-policy.html`, `accessibility-statement.html` | Policy pages |
| `thank-you.html` | Shown after someone signs up for Letters from Hunkie |
| `404.html` | Friendly "page not found" page |
| `css/style.css` | All the styling |
| `js/main.js` | Phone menu, "Show More" buttons, fade-ins, footer year |
| `_redirects` | Sends old Wix addresses (like `/category/all-products`) to the new pages |
| `images/`, `video/`, `downloads/` | All pictures, the Hunkie Dorie video, and the PDF printables and media kit |

## Hosting on Cloudflare Pages

In Cloudflare: **Workers & Pages → Create → Pages → Connect to Git**, pick the repository, and use:

- Framework preset: **None**
- Build command: *(leave empty)*
- Build output directory: `/`

Then add `amfrench.com` under the project's **Custom domains** tab.

## Things to finish yourself

1. **Social icons** (footer, every page): the Wix site was linking to Wix Studio's own Facebook, Instagram, and TikTok. Swap in your profile addresses where the comment says `SOCIAL LINKS`.
2. **Letters from Hunkie sign-ups** go to `lettersfromhunkie@amfrench.com` through FormSubmit (free). The first sign-up triggers a one-time "Activate" email from FormSubmit – click it and you're set. To use Mailchimp or MailerLite instead, replace the `action="..."` address on the form.
3. **Shop buttons:** "Buy Now" on the paperback goes to Amazon. Each "Pre-Order" button opens an email to you with the product name in the subject line. When you set up Stripe or PayPal payment links, paste each one in place of the `mailto:` link in `shop.html`.
4. **Terms & Conditions** and **Accessibility Statement** were still Wix's fill-in-the-blank templates. They now contain plain starter text using your details – worth a read before going live.

## Editing later

Text lives right in the `.html` files – search for the sentence you want to change and edit it. Colors and fonts are at the top of `css/style.css`. Header, footer, and sign-up form are repeated on each page, so a change there needs making in every `.html` file (a find-and-replace across the folder does it in one go).
