# RSMultiXIndia Website

A responsive, SEO-conscious static business website built with HTML5, CSS3 and vanilla JavaScript. No build step, backend, database or paid dependency is required.

## Files

```text
RSMultiXIndia-Website/
├── index.html
├── style.css
├── script.js
├── robots.txt
├── sitemap.xml
├── README.md
└── assets/
    ├── logo.svg
    ├── favicon.svg
    └── og-cover.svg
```

## Preview locally

1. Download or clone the repository.
2. Open `index.html` in a modern browser.
3. For a local web-server preview, use VS Code Live Server or run `python -m http.server` in the project folder. No compilation is required.

## Publish with GitHub Pages

1. Create a GitHub repository (for example, `rsmultixindia-website`).
2. Upload the contents of this folder to the repository root. Ensure `index.html` is at the root, not nested inside another folder.
3. Open the repository's **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/(root)` folder, then save.
6. Wait for the Pages deployment to finish. GitHub will show the published URL under Settings → Pages.

### Custom domain: rsmultixindia.com

The website is configured for `https://rsmultixindia.com/` as its primary URL. Before pointing the domain to GitHub Pages:

1. Confirm you control the domain and decide whether `rsmultixindia.com` or `www.rsmultixindia.com` will be primary.
2. In **Settings → Pages → Custom domain**, enter the chosen domain and save. Follow GitHub's current DNS instructions for your domain type.
3. Add the DNS records required by GitHub Pages at your domain registrar. Do not copy records from an unrelated site; use the values GitHub provides for your repository.
4. Wait for DNS to propagate and enable **Enforce HTTPS** when the option becomes available.
5. If you choose `www` as primary, update the canonical URL, Open Graph URL, JSON-LD URL, sitemap and robots sitemap to match that primary domain. Avoid publishing duplicate versions as competing canonicals.

The canonical and sitemap currently point to `https://rsmultixindia.com/` per the supplied business information. If this domain is not yet connected to this deployment, change these URLs before launch or after the domain is configured.

## Edit business details and links

- **Phone, WhatsApp, email and website:** edit the `BUSINESS` object near the top of `script.js`. Also update the contact details and JSON-LD in `index.html` if the business information changes.
- **Social profiles:** edit `SOCIAL_LINKS` in `script.js`. A blank string hides a profile. Add only URLs you have verified and control. The LinkedIn URL is intentionally blank until a verified URL is supplied.
- **Services:** edit the `SERVICES` array in `script.js`.
- **Courses:** edit the `COURSES` array in `script.js`. Course availability, syllabus and inclusions should be confirmed before publishing specific commitments.
- **Portfolio:** edit `PORTFOLIO_PROJECTS` in `script.js`. The current cards are clearly marked demo concepts. Replace these with approved real project details and images only when you have permission to publish them. To use an image, add a property such as `image: "assets/project-name.webp"` to the project and update `createProjectCard()` in `script.js` to render it with descriptive alt text. Use compressed WebP/AVIF images when possible.
- **Branding:** update `assets/logo.svg`, `assets/favicon.svg`, `assets/og-cover.svg`, and the CSS variables at the top of `style.css`.

## Enquiry form

The form validates fields in the browser and prepares a WhatsApp message. It does not store submissions or send data to a server. Visitors must review and send the message in WhatsApp. If you later want a conventional web form, connect a trusted form service and update the privacy notice and form handling appropriately.

## SEO and launch checklist

- [ ] Connect the intended custom domain and verify HTTPS.
- [ ] Confirm canonical, Open Graph, JSON-LD, `robots.txt` and `sitemap.xml` URLs match the primary domain.
- [ ] Verify business name, phone, email, location and all social profile links.
- [ ] Replace sample portfolio demos with approved real work, or keep the demo labels visible.
- [ ] Test navigation, filters, service/course WhatsApp links, call and email links on desktop and mobile.
- [ ] Test form validation and verify that WhatsApp opens with the expected pre-filled message.
- [ ] Check keyboard navigation, focus states, contrast and reduced-motion behavior.
- [ ] Validate HTML and structured data; run Google Search Console URL inspection after publishing.
- [ ] Submit the sitemap in Search Console after the domain is verified.
- [ ] Test mobile usability, page performance and image sizes with Lighthouse or PageSpeed Insights.
- [ ] Confirm all licensed software claims and course inclusions accurately reflect what is offered.

## Notes

- No testimonials, client names, project results, placement promises or company statistics are fabricated.
- Portfolio items are explicitly labelled sample demos until replaced with genuine work.
- Google Fonts is an optional external font resource. The site has generic sans-serif fallbacks if it is unavailable.
