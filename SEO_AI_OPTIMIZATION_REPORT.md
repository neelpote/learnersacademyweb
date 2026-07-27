# SEO and AI Discovery Implementation Report

Date: 26 July 2026
Website: https://www.thelearnersacademy.in

## What was added or improved

### AI assistant discovery

- Added a specification-style [`/llms.txt`](https://www.thelearnersacademy.in/llms.txt) with a concise academy summary, verified contact details, service areas, program links, educational content, and canonical URLs.
- Added an HTML discovery link for `llms.txt`.
- Updated `robots.txt` to explicitly allow OAI-SearchBot, ChatGPT-User, GPTBot, Claude search/user crawlers, Perplexity crawlers, and Google-Extended while keeping `/studio/` and `/api/` private.
- Removed the rule blocking `/_next/`; search engines may need these assets to render and understand a Next.js page correctly.

Why: AI search products primarily need crawlable, well-structured public pages. `llms.txt` is an emerging discovery convention, while crawler access and indexable HTML are the more important foundations.

### Structured data

- Centralized consistent business information and added a connected schema graph for:
  - `EducationalOrganization` + `LocalBusiness`
  - `WebSite`
  - homepage `WebPage`
  - founder, address, coordinates, service areas, hours, languages, and contact point
- Added `CollectionPage`, `ItemList`, and `BreadcrumbList` markup to Courses, Resources, and Blog.
- Added complete `BlogPosting` and breadcrumb markup to every Sanity blog article, including author, publication date, modified date, image, publisher, and canonical URL.
- Preserved the visible FAQ, Course, and breadcrumb markup already present on the focused service pages.
- Removed inaccurate or unsupported markup, including a site-search action for a search feature that does not exist and unverified social profile URLs.

Why: Connected, factual schema helps search engines and retrieval systems identify the academy as one entity and understand how its pages relate.

### Metadata and technical SEO

- Fixed the duplicate homepage canonical that was being emitted on every route.
- Added unique canonical URLs, titles, descriptions, Open Graph data, Twitter cards, and real preview images for all major pages.
- Added missing metadata for Courses, Resources, and the Blog index.
- Removed references to image/icon files that do not exist and removed the text placeholder previously served as `favicon.ico`; Next.js now serves the real app favicon.
- Improved the XML sitemap with all key landing pages, all published Sanity posts, accurate post modification dates, and image entries.
- Added `noindex` response headers for Sanity Studio.
- Added optional Google Search Console verification through `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`.
- Updated the Content Security Policy so configured Google Analytics can load and record referral traffic.

Why: Clear canonicals prevent duplicate-page confusion, valid previews improve sharing/click-through, and a truthful sitemap speeds page discovery.

### Topical authority and internal linking

- Replaced JavaScript-only header/footer navigation with real crawlable links.
- Added a sitewide “Popular Programs” cluster linking the main tuition, Maths, Science, Class 10, and tutor pages.
- Added proper navigation and footer links to the standalone Courses and Contact pages.
- Removed placeholder social links that pointed to `#`.

Why: Contextual internal links show both users and crawlers that the site has a coherent tuition/coaching topic cluster rather than isolated landing pages.

## Verification completed

- Production build passed successfully.
- TypeScript passed with no errors.
- Targeted lint checks passed for all new SEO/schema files and edited infrastructure components.
- All generated static routes and 14 current Sanity blog posts built successfully.
- Generated HTML was checked for unique canonicals and valid JSON-LD.
- `robots.txt`, `llms.txt`, and the generated image sitemap were inspected.

## Important expectations

These changes make the website easier to crawl, understand, cite, and index, but no technical change can guarantee rankings or inclusion in an AI answer. `llms.txt` is still a proposed convention, not a confirmed ranking factor. OpenAI specifically identifies OAI-SearchBot access as important for ChatGPT Search visibility.

## Recommended next actions after deployment

1. Submit `https://www.thelearnersacademy.in/sitemap.xml` in Google Search Console and Bing Webmaster Tools, then request re-indexing for the homepage and five program pages.
2. Verify that the academy’s Google Business Profile uses the same name, phone, address, hours, and website URL.
3. Confirm the schema facts—especially Monday–Saturday 8:00 AM–8:00 PM, Sunday by appointment, email address, and service areas.
4. Add real social profile URLs to schema only after the exact official URLs are confirmed.
5. Publish useful, teacher-authored articles regularly around Maths, Science, board preparation, study methods, and local parent questions; topical authority grows from strong content and reputable mentions, not markup alone.
6. Monitor Google Search Console, Bing Webmaster Tools, and analytics for indexing, rich-result warnings, organic queries, and ChatGPT referral traffic.

## Reference guidance

- OpenAI publisher guidance: https://help.openai.com/en/articles/12627856-publishers-and-developers-faq
- Google structured data guidance: https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
- Google sitemap guidance: https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview
- `llms.txt` proposal: https://llmstxt.org/
