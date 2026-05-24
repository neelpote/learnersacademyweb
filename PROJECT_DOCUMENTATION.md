# The Learners' Academy — Project Documentation

## Overview
A production-ready Next.js website for **The Learners' Academy**, a tuition centre in Baner, Pune offering Maths and Science coaching for Class 7–10 students.

**Live URL:** https://www.thelearnersacademy.in  
**GitHub:** https://github.com/neelpote/learnersacademyweb  
**Deployed on:** Vercel (auto-deploy from main branch)

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16.1.1 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| CMS | Sanity v3 (headless CMS) |
| Fonts | Playfair Display (headings), Inter (body), Lato (labels) |
| Icons | Lucide React |
| Background | Vanta.js + Three.js |
| Forms | Web3Forms |
| Analytics | Google Analytics 4 (G-0LEM8EPG51) |
| Rich Text | @portabletext/react |
| Image CDN | Sanity Image URL builder |
| Hosting | Vercel |
| Domain | thelearnersacademy.in |

---

## Brand Colors

| Name | Hex | Usage |
|------|-----|-------|
| Dark Maroon | `#800000` | Headings, CTAs, accents |
| Dark Blue | `#070A73` | Body text, borders |
| Faint Silver | `#EAEAEA` | Backgrounds |
| Muted Gray | `#4A4A4A` | Secondary text |

---

## Pages Built

### 1. Home Page — `/`
- Hero section with animated background (Vanta.js)
- Results ticker (scrolling marquee)
- Why Choose Us section (4 feature cards)
- Stats section (1000+ students, 100% passing rate, etc.)
- Pricing Section (Super 15, Super 10, Super 10 Plus plans)
- Teachers Section (from Sanity CMS, paginated)
- Success Stories Section (from Sanity CMS)
- Blog Section (latest 4 posts, links to /blog)
- Resources Section (numbered list, links to /resources)
- About Section (expandable with founder info, core values, mission/vision)
- Final CTA section
- Welcome Popup on load
- Floating Book Demo button (bottom-right)
- WhatsApp button (bottom-left, green)
- Scroll to Top button

### 2. Contact Page — `/contact`
- Contact form (Web3Forms integration)
- Phone, email, address info
- Business hours
- Map embed

### 3. Courses Page — `/courses`
- Pricing plans display
- Same as PricingSection on home

### 4. Resources Page — `/resources`
- All downloadable PDFs from Sanity CMS
- Numbered list layout (not boxes)
- Download form popup (collects name/email before download)
- Header + Footer

### 5. Maths Tuition Baner — `/maths-tuition-baner`
- Hero with classroom image
- Introduction section
- Why Choose Us (6 emoji cards)
- Courses Offered (Class 7–10)
- Teaching Method (5-step process with image)
- Who Should Join
- Results & Benefits
- Local Trust section
- CTA section (maroon background)
- FAQ section (10 FAQs with schema markup)
- SEO metadata in layout.tsx

### 6. Science Tuition Baner — `/science-tuition-baner`
- Same structure as maths page
- Science-specific content from document
- 6-step teaching method (3-column grid, not cramped)
- Images: polotno.jpeg (hero), Gemini images for teaching/CTA
- FAQ section with schema markup
- SEO metadata in layout.tsx

### 7. Class 10 Maths Coaching Pune — `/class-10-maths-coaching-pune`
- Board exam focused content
- 5-step teaching method
- Results & Benefits with image
- Local Trust section
- CTA + FAQ
- SEO metadata in layout.tsx (added later)

### 8. Best Tuition Classes Baner — `/best-tuition-classes-baner`
- General tuition page targeting broad keyword
- Class 7–10 all subjects
- Teaching method, who should join, results
- CTA + FAQ
- SEO metadata in layout.tsx (added later)

### 9. Tutor in Baner Pune — `/tutor-in-baner-pune`
- Tutoring services page
- Same structure as other landing pages
- SEO metadata in layout.tsx (added later)

### 10. Blog List — `/blog`
- Server component (fast load, revalidates every 60s)
- Grid of all posts from Sanity CMS
- Each card: image, title, excerpt, author, date
- Links to individual post pages
- CTA section at bottom

### 11. Blog Post — `/blog/[slug]`
- Dynamic route, auto-generated for each Sanity post
- Full PortableText rendering (headings, bold, italic, links, images, lists)
- Clickable links via @portabletext/react marks
- Sidebar: academy info, phone, address, Book Demo, course links
- SEO metadata generated per post (title, description, canonical, OpenGraph)
- BlogPosting schema markup
- CTA section at bottom

### 12. 404 Not Found — `/not-found.tsx`
- Custom branded error page
- Links to Home, Contact, and key pages
- "Page Not Found" with large decorative 404

### 13. Sanity Studio — `/studio`
- Admin CMS interface
- White text override to fix dark theme visibility issue
- Manages: Blog Posts, Teachers, Success Stories, Resources, Courses

---

## Components Built

### Layout Components
- `Header.tsx` — Logo + maroon nav bar, scroll-to-section on home, navigate to page on other routes
- `Footer.tsx` — Links, contact info, white text
- `BackgroundAnimation.tsx` — Vanta.js animated background
- `ScrollToTop.tsx` — Fixed bottom-right circle button
- `FloatingBookDemo.tsx` — Fixed bottom-right "Book Free Demo" pill button
- `WhatsAppButton.tsx` — Fixed bottom-left green WhatsApp button with pre-filled message

### Form Components
- `BookDemoForm.tsx` — Modal form, Web3Forms, rate limited
- `ResourceDownloadForm.tsx` — Collects info before PDF download
- `WelcomePopup.tsx` — Shows on home page load

### Section Components
- `sections/AboutSection.tsx` — Expandable about section
- `sections/BlogSection.tsx` — 4 latest posts grid
- `sections/CoursesSection.tsx`
- `sections/PricingSection.tsx` — 3 plans, desktop grid + mobile carousel
- `sections/ResourcesSection.tsx` — Numbered list layout
- `sections/SuccessStoriesSection.tsx`
- `sections/TeachersSection.tsx` — Paginated, redesigned card layout
- `sections/WhyChooseUsSection.tsx`
- `ResultsTicker.tsx` — Scrolling marquee of student results

### Blog Components
- `BlogListView.tsx` — Client wrapper for blog list page
- `BlogPostView.tsx` — Full blog post with PortableText, sidebar, CTA

### UI
- `ui/Button.tsx`

---

## SEO Implementation

### Global (layout.tsx)
- Title template: `%s | The Learners' Academy`
- Meta description, keywords
- OpenGraph + Twitter cards
- `LocalBusiness` + `EducationalOrganization` schema
- Opening hours, address, phone, geo coordinates
- AggregateRating (4.8 stars, 150 reviews)
- Course catalog schema
- Canonical URL: `https://www.thelearnersacademy.in`

### Per Page
- Each landing page has `layout.tsx` with unique title, description, keywords, canonical
- Blog posts get auto-generated metadata from Sanity content
- FAQPage schema on all 5 landing pages
- BreadcrumbList schema on all 5 landing pages
- Course schema on all 5 landing pages
- BlogPosting schema on each blog post

### Sitemap (`/sitemap.xml`)
- All static pages with priorities
- Dynamic blog post URLs auto-generated
- Revalidates on build

### Robots.txt
- Present in `/public/robots.txt`

---

## Bugs Fixed & Issues Encountered

### Bug 1 — Blue text on maroon backgrounds
**Problem:** Global CSS `h1-h6, p, span, a { color: var(--foreground) }` overrode Tailwind color classes  
**Fix:** Added `.bg-brand-maroon` CSS rules with `!important` to force white text, used inline `style={{}}` for elements outside maroon sections  
**Files:** `globals.css`, `maths-tuition-baner/page.tsx`

### Bug 2 — Lucide icons rendering as red squares on mobile
**Problem:** Lucide React icons showed as red squares on mobile browsers  
**Fix:** Replaced all icons in landing pages with emojis (🎓🧠👥🎯📝📈)  
**Files:** All landing pages

### Bug 3 — Duplicate import syntax error
**Problem:** `} from 'lucide-react'` appeared twice in maths page causing build failure  
**Fix:** Removed duplicate import line  
**Files:** `maths-tuition-baner/page.tsx`

### Bug 4 — Background animation overlapping content
**Problem:** Vanta background z-index was higher than page content  
**Fix:** Added `z-10`, `z-20`, `z-30` layering to header, main, sections  
**Files:** `maths-tuition-baner/page.tsx`

### Bug 5 — CTA button text invisible (white on white)
**Problem:** Button had `bg-white` class but global CSS forced `a { color: white }` inside `.bg-brand-maroon`  
**Fix:** Used inline `style={{ color: '#800000' }}` directly on the `<a>` tag, removed span wrapper  
**Files:** `science-tuition-baner/page.tsx`, `maths-tuition-baner/page.tsx`

### Bug 6 — Event handlers cannot be passed to Client Component props
**Problem:** Blog post page was a Server Component but passed `onBookDemo={() => {}}` to Header (Client Component)  
**Fix:** Created `BlogPostView.tsx` as a Client Component that wraps Header, Footer, FloatingBookDemo, BookDemoForm  
**Files:** `blog/[slug]/page.tsx`, `BlogPostView.tsx`

### Bug 7 — GROQ query parse error: param $slug not provided
**Problem:** `params` in Next.js 15 is a Promise, not a plain object  
**Fix:** Added `const { slug } = await params` before using it  
**Files:** `blog/[slug]/page.tsx`

### Bug 8 — Blog import syntax error (two imports on one line)
**Problem:** An edit accidentally merged two import lines: `import { useEffect, useState } from 'react'import Link from 'next/link'`  
**Fix:** Split into two separate lines  
**Files:** `blog/page.tsx`

### Bug 9 — npm install wiped package.json and source files
**Problem:** Running `npm install @portabletext/react` rewrote `package.json` removing all other dependencies (sanity, tailwind-merge, clsx, three, vanta etc.) and reset `page.tsx`, `globals.css`, `layout.tsx` to Next.js defaults  
**Fix:** Restored `package.json` with all original dependencies, ran clean `npm install`, restored source files from git history  
**Impact:** Site went down showing default Next.js starter page  
**Files:** `package.json`, `package-lock.json`, `page.tsx`, `globals.css`, `layout.tsx`

### Bug 10 — URL auto-detect crashing the site
**Problem:** Added regex to auto-detect URLs in blog body text, but React children aren't always plain strings — calling `.split()` on a React element crashed the app  
**Fix:** Reverted the auto-detect code entirely  
**Files:** `BlogPostView.tsx`

### Bug 11 — Blog body images crashing (Unable to resolve image URL)
**Problem:** GROQ query fetched `body` as-is, returning raw Sanity image references without the asset URL data. `urlFor()` needs the full asset object  
**Fix:** Added `asset->` dereference in GROQ query, added null check before calling `urlFor`  
**Files:** `blog/[slug]/page.tsx`, `BlogPostView.tsx`

### Bug 12 — Sanity Studio text invisible (dark theme)
**Problem:** Global CSS color overrides bled into Sanity Studio's own HTML document  
**Fix 1:** Scoped all CSS rules to `.app-root` class, added `app-root` to main layout body  
**Fix 2:** Added `* { color: white !important }` in studio's own `layout.tsx`  
**Files:** `globals.css`, `layout.tsx`, `studio/[[...tool]]/layout.tsx`

### Bug 13 — Navbar not working on non-home pages
**Problem:** All nav items used `document.querySelector('#section')` which only works on the home page  
**Fix:** Used `usePathname()` to detect current page. On home: scroll to section. On other pages: navigate to `/#section` or dedicated page URL  
**Files:** `Header.tsx`

### Bug 14 — Navbar font size accidentally reduced
**Problem:** While fixing the navbar, changed `gap-12 text-lg` to `gap-10 text-base`  
**Fix:** Reverted to original values  
**Files:** `Header.tsx`

### Bug 15 — @portabletext/react not found on Vercel
**Problem:** Package was in `package.json` but Vercel's cached build didn't have it after the npm install disaster  
**Fix:** Reinstalled all packages, pushed updated `package-lock.json`  
**Files:** `package.json`, `package-lock.json`

### Bug 16 — Google showing old Vercel domain in search
**Problem:** `baseUrl` in `layout.tsx` was hardcoded to `learners-kohl.vercel.app`  
**Fix:** Changed to `https://www.thelearnersacademy.in`, updated canonical tags, sitemap, and env variables  
**Files:** `layout.tsx`, `sitemap.ts`, `.env.local`

---

## Deployments & Infrastructure

- **Platform:** Vercel (free tier)
- **Auto-deploy:** Every push to `main` branch triggers a new deployment
- **Domain:** `thelearnersacademy.in` → redirects to `www.thelearnersacademy.in` (primary)
- **Old domain:** `learners-kohl.vercel.app` → redirects to `www.thelearnersacademy.in`
- **Environment Variables on Vercel:**
  - `NEXT_PUBLIC_SANITY_PROJECT_ID`
  - `NEXT_PUBLIC_SANITY_DATASET`
  - `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`
  - `NEXT_PUBLIC_GA_ID` = `G-0LEM8EPG51`
  - `NEXT_PUBLIC_SITE_URL`

---

## Sanity CMS Schema Types

| Type | Fields |
|------|--------|
| `post` | title, slug, mainImage, excerpt, body (PortableText), publishedAt, author (ref to teacher) |
| `teacher` | name, photo, qualification, subject, teachingPhilosophy |
| `successStory` | studentName, photo, marks, rank, testimonialQuote, year |
| `resource` | title, description, pdfFile, slug, category |
| `course` | title, gradeLevel, subject, syllabus, slug |

---

## Pending / Future Work

- WhatsApp integration is live but no tracking
- Google Analytics ID set but GA_ID was placeholder for a long time
- No real student testimonials with photos (currently hardcoded/empty)
- No appointment scheduling system
- No student portal
- Vanta.js background is heavy (~500KB) — consider replacing with CSS animation on mobile
- Source folders (Page 3, 4, 5) are committed to git — should be removed
- `styled-components` in package.json but likely unused
