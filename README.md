# beachamgroupllc.com

Static one-page site for Beacham Group LLC. Hosted on Cloudflare Workers (static assets) with
`beachamgroupllc.com` and `www.beachamgroupllc.com` as Custom Domains; `src/index.js` redirects
http and www to the canonical host.

- Edit `public/index.html`.
- Deploy: `wrangler deploy` (requires `wrangler login` as the Cloudflare account owner).
