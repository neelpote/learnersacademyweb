---
inclusion: always
---

# Design System — The Learners' Academy

Complete design, styling, SEO, and schema reference for the project. Everything implemented is documented here.

---

## Project Overview

| Property | Value |
|----------|-------|
| Site | The Learners' Academy |
| Live URL | https://www.thelearnersacademy.in |
| Framework | Next.js 16.1.1 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 + custom CSS (globals.css) |
| CMS | Sanity v3 |
| Icons | Lucide React (layout only — use emojis on landing pages) |
| Hosting | Vercel (auto-deploy from main branch) |
| Analytics | Google Analytics 4 — `G-0LEM8EPG51` |
| Forms | Web3Forms |

---

## Brand Colors

These are the exact brand colors. Never use arbitrary hex values — always use CSS variables or the utility classes defined below.

| Name | Hex | CSS Variable | Usage |
|------|-----|-------------|-------|
| Dark Maroon | `#800000` | `--heading-color` | Headings, CTAs, accents, navbar hover |
| Dark Blue | `#070A73` | `--foreground` | Body text, borders, primary text |
| Faint Silver | `#EAEAEA` | `--background` | Page backgrounds, button text on maroon |
| Muted Gray | `#4A4A4A` | `--muted-text` | Secondary/supporting text |

### CSS Variable Definitions (`globals.css`)

```css
:root {
  --background: #EAEAEA;        /* Faint Silver */
  --foreground: #070A73;        /* Dark Blue */
  --heading-color: #800000;     /* Dark Maroon */
  --surface: #EAEAEA;
  --border: #070A73;
  --button-primary-bg: #800000;
  --button-primary-text: #EAEAEA;
  --button-secondary-border: #d1d1d1;
  --muted-text: #4A4A4A;
  --font-heading: var(--font-geist-sans), system-ui, sans-serif;
  --font-body: var(--font-geist-sans), system-ui, sans-serif;
}
```

### Tailwind Utility Classes

```
Backgrounds:   .bg-brand-silver   .bg-brand-maroon   .bg-brand-blue
Text:          .text-brand-maroon .text-brand-blue    .text-brand-silver  .text-muted
Borders:       .border-brand-blue .border-brand-maroon
```

---

## Typography

### Font Stack (layout.tsx)

Three fonts are loaded via `next/font/google`:

| Variable | Font | Role | Weights |
|----------|------|------|---------|
| `--font-heading` | Playfair Display | Section headings, hero titles | 400, 600, 700 |
| `--font-body` | Inter | Body text, paragraphs, nav | 300, 400, 500, 600 |
| `--font-sub` | Lato | Labels, subheadings, captions | 300, 400, 700 |

All fonts use `display: swap` for performance.

### Responsive Fluid Type Scale (`globals.css`)

```css
h1 { font-size: clamp(2.5rem, 5vw, 4rem);   font-weight: 700; letter-spacing: -0.02em; }
h2 { font-size: clamp(1.8rem, 3.5vw, 2.8rem); font-weight: 600; letter-spacing: -0.01em; }
h3 { font-size: clamp(1.1rem, 2vw, 1.5rem);   font-weight: 500; }
h4 { font-size: clamp(1rem, 1.8vw, 1.3rem);   font-weight: 500; }
```

All headings default to `color: var(--foreground)` (Dark Blue) via `.app-root h1-h6`.
Override to maroon using `.text-brand-maroon` or `text-brand-maroon` Tailwind class.

---

## Layout System

| Pattern | Class |
|---------|-------|
| Max content width | `max-w-7xl mx-auto` |
| Section vertical padding | `py-20` (desktop), `py-16` (mobile) |
| Horizontal padding | `px-4 sm:px-6 lg:px-8` |
| Flexbox stacking | `flex flex-col gap-*` |
| Grid layouts | `grid grid-cols-1 md:grid-cols-3 gap-6` |
| Responsive prefix | `sm:` for mobile-first breakpoints |

### `.section-container` (CSS class)
```css
max-width: 1200px;
margin: 0 auto;
padding: 0 24px;
background-color: var(--background);
```

---

## Component Patterns

### Buttons

Two types — both use `rounded` (not `rounded-full`), brand colors, no box-shadow at rest.

**Primary Button** — `.btn-primary`
- Background: `#800000` (maroon), text: `#EAEAEA` (silver)
- Hover: `opacity: 0.9`, `translateY(-2px)`, maroon shadow
- Mobile override: white background, maroon border + text (inverts on hover)

**Secondary Button** — `.btn-secondary`
- Background: transparent, border: `#d1d1d1`, text: Dark Blue
- Hover: fills to Dark Blue background, silver text

### Cards

**Standard Card** — `.card` / `.card-elevated` / `.feature-card`
```css
background: var(--background);
border: 1px solid rgba(7, 10, 115, 0.15);
border-radius: 12px;
padding: 24px;
```
Hover: border turns maroon, `translateY(-6px)`, maroon shadow.

**Info Card** — `.info-card`
- White background with `backdrop-filter: blur(4px)`
- No button appearance, purely informational

**White rounded cards** — `.bg-white.rounded-lg` / `.bg-white.rounded-xl`
- Global hover: `translateY(-4px)`, maroon-tinted shadow

### FAQ Accordion

Used on all 5 landing pages. `FAQItem` component pattern:
```tsx
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)
  // toggle on click
  // question: font-semibold text-brand-maroon
  // answer: text-brand-blue
  // chevron icon: ChevronUp / ChevronDown text-brand-maroon
}
```

**Note:** Use emojis instead of Lucide icons on landing page content sections — Lucide icons render as red squares on some mobile browsers.

### Navigation (`Header.tsx`)

- Logo + maroon background nav bar
- Uses `usePathname()` to detect current route
- On home page (`/`): scroll to `#section` anchor
- On other pages: navigate to `/#section` or dedicated route
- `gap-12 text-lg` — do not change these values

### Fixed UI Elements

| Component | Position | Color |
|-----------|----------|-------|
| `ScrollToTop.tsx` | Bottom-right circle | Maroon |
| `FloatingBookDemo.tsx` | Bottom-right pill | Maroon |
| `WhatsAppButton.tsx` | Bottom-left | Green |
| `WelcomePopup.tsx` | Center modal on home load | Brand colors |

---

## CSS Architecture

### Scoping — `.app-root`

All brand CSS rules are scoped to `body.app-root` to prevent bleeding into Sanity Studio. The `app-root` class is applied in `layout.tsx`:
```tsx
<body className={`app-root ${playfair.variable} ${inter.variable} ${lato.variable} antialiased`}>
```

### Maroon Section Text Override

Inside any `.bg-brand-maroon` container, all text is forced white:
```css
.app-root .bg-brand-maroon h1-h6  { color: white !important; }
.app-root .bg-brand-maroon p, li  { color: white !important; }
.app-root .bg-brand-maroon span, a { color: white !important; }
```
Exception: `a.bg-white` inside maroon sections gets maroon text.

### Footer Text Override

```css
.app-root footer * { color: white !important; }
.app-root footer a:hover { color: #e5e7eb !important; }
```

### Animations

| Class | Effect | Duration |
|-------|--------|----------|
| `.animate-fade-in-up` | `opacity 0 → 1`, `translateY(30px → 0)` | 0.6s |
| `.animate-fade-in` | `opacity 0 → 1` | 0.6s |
| `.animate-scale-in` | `scale(0.95 → 1)` | 0.5s |
| `.animate-slide-in-left` | `translateX(-30px → 0)` | 0.6s |
| `.animate-slide-in-right` | `translateX(30px → 0)` | 0.6s |
| `.animate-marquee` | Infinite scroll right-to-left | 30s |

Stagger delays: `.animate-delay-100` through `.animate-delay-600` (100ms increments).

**Accessibility:** All animations respect `prefers-reduced-motion` — reduced to `0.01ms` duration.

### Scrollbar Styling

Custom scrollbar using maroon thumb on silver track. Both vertical (`*`) and horizontal (`.overflow-x-auto`) scroll containers styled.

### Results Ticker

```css
.results-ticker {
  background-color: var(--heading-color); /* maroon */
  color: var(--background) !important;    /* silver text */
}
```

---

## SEO & Schema Implementation

### Global Schema (layout.tsx — applied to every page)

Three JSON-LD blocks injected in `<head>`:

#### 1. EducationalOrganization + LocalBusiness
```json
{
  "@type": ["EducationalOrganization", "LocalBusiness"],
  "@id": "https://www.thelearnersacademy.in/#organization",
  "name": "The Learners' Academy",
  "telephone": "+91-86054-68382",
  "address": "302, Tejas Eternity, Balewadi Phata, Baner, Pune 411045",
  "geo": { "latitude": "18.5679", "longitude": "73.7781" },
  "openingHours": "Mon-Fri 07:00-21:00, Sat-Sun 08:00-18:00",
  "priceRange": "₹₹",
  "areaServed": ["Baner", "Aundh", "Pashan", "Balewadi"],
  "hasOfferCatalog": {
    "Maths Tuition in Baner",
    "Science Tuition in Baner",
    "Class 10 Maths Coaching Pune"
  }
}
```

#### 2. Speakable / WebPage (AI SEO)
```json
{
  "@type": "WebPage",
  "@id": "https://www.thelearnersacademy.in/#webpage",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", "h2", ".speakable"]
  }
}
```
Marks `h1`, `h2`, and `.speakable` elements as readable by AI voice assistants and LLM crawlers (Google SGE, Bing AI, etc.). This is the "AI SEO" schema.

#### 3. SiteLinksSearchBox / WebSite
```json
{
  "@type": "WebSite",
  "@id": "https://www.thelearnersacademy.in/#website",
  "potentialAction": {
    "@type": "SearchAction",
    "urlTemplate": "https://www.thelearnersacademy.in/blog?q={search_term_string}"
  }
}
```
Enables Google to show a search box in search results.

---

### Per-Page Schema (all 5 landing pages)

Every landing page has three additional JSON-LD blocks:

| Schema Type | Purpose |
|-------------|---------|
| `FAQPage` | Enables FAQ rich results in Google |
| `BreadcrumbList` | Shows page path in search results |
| `Course` | Marks page as a course offering |

#### FAQPage Schema Pattern
```tsx
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(f => ({
    "@type": "Question",
    "name": f.question,
    "acceptedAnswer": { "@type": "Answer", "text": f.answer }
  }))
})}} />
```

#### BreadcrumbList Pattern
```json
{
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.thelearnersacademy.in" },
    { "@type": "ListItem", "position": 2, "name": "[Page Name]", "item": "[page URL]" }
  ]
}
```

#### Course Schema Pattern
```json
{
  "@type": "Course",
  "name": "[Page title]",
  "provider": { "@type": "Organization", "name": "The Learners' Academy" },
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "onsite",
    "location": "302, Tejas Eternity, Balewadi Phata, Baner, Pune 411045"
  }
}
```

---

### Landing Page Schema Coverage

| Page | FAQPage | BreadcrumbList | Course |
|------|---------|---------------|--------|
| `/maths-tuition-baner` | ✅ 10 FAQs | ✅ | ✅ |
| `/science-tuition-baner` | ✅ | ✅ | ✅ |
| `/class-10-maths-coaching-pune` | ✅ | ✅ | ✅ |
| `/best-tuition-classes-baner` | ✅ | ✅ | ✅ |
| `/tutor-in-baner-pune` | ✅ | ✅ | ✅ |

---

### Blog Post Schema

Each `/blog/[slug]` page generates:
```json
{
  "@type": "BlogPosting",
  "headline": "[post title]",
  "author": { "@type": "Person" },
  "datePublished": "[publishedAt from Sanity]",
  "image": "[mainImage from Sanity]"
}
```

---

### Global Metadata (layout.tsx)

- Title template: `%s | The Learners' Academy`
- OpenGraph: type `website`, locale `en_IN`, image `1200×630`
- Twitter card: `summary_large_image`
- Robots: `index: true, follow: true`, full googlebot config
- Theme color: `#800000` for both light and dark mode
- `lang="en-IN"` on `<html>`
- Canonical: `https://www.thelearnersacademy.in`

---

### Sitemap & Robots

- `/sitemap.xml` — Static pages with priorities + dynamic blog slugs from Sanity (revalidates on build)
- `/public/robots.txt` — Present, allows all crawlers

---

## Pages & Structure

| Route | Type | Key Sections |
|-------|------|-------------|
| `/` | Home | Hero (Vanta.js), Results Ticker, Why Choose Us, Stats, Pricing, Teachers, Success Stories, Blog, Resources, About, CTA |
| `/contact` | Static | Web3Forms, phone/email/address, map |
| `/courses` | Static | Pricing plans |
| `/resources` | CMS | PDFs from Sanity, download gate form |
| `/maths-tuition-baner` | Landing | Hero, Intro, Why Us, Courses, Teaching Method, FAQ (10), Schema |
| `/science-tuition-baner` | Landing | Same structure, science content, 6-step method |
| `/class-10-maths-coaching-pune` | Landing | Board exam focus, 5-step method, FAQ |
| `/best-tuition-classes-baner` | Landing | General tuition, Class 7-10, FAQ |
| `/tutor-in-baner-pune` | Landing | Tutoring services, FAQ |
| `/blog` | CMS list | Grid of all posts, revalidates every 60s |
| `/blog/[slug]` | CMS dynamic | PortableText, sidebar, BlogPosting schema |
| `/not-found.tsx` | Error | Branded 404 |
| `/studio` | Admin | Sanity Studio (white text override) |

---

## Component File Map

```
src/
├── app/
│   ├── layout.tsx                  ← Global schema, fonts, GA, metadata
│   ├── globals.css                 ← All CSS variables, utilities, animations
│   ├── page.tsx                    ← Home page
│   ├── contact/page.tsx
│   ├── courses/page.tsx
│   ├── resources/page.tsx
│   ├── maths-tuition-baner/
│   │   ├── layout.tsx              ← Page-specific metadata + keywords
│   │   └── page.tsx                ← Full page + FAQ + 3 schema scripts
│   ├── science-tuition-baner/      ← Same structure
│   ├── class-10-maths-coaching-pune/
│   ├── best-tuition-classes-baner/
│   ├── tutor-in-baner-pune/
│   ├── blog/
│   │   ├── page.tsx                ← Server component, revalidate 60s
│   │   └── [slug]/page.tsx         ← Dynamic, BlogPosting schema
│   └── studio/[[...tool]]/
│       ├── layout.tsx              ← White text override for dark Sanity UI
│       └── page.tsx
└── components/
    ├── Header.tsx
    ├── Footer.tsx
    ├── BackgroundAnimation.tsx     ← Vanta.js + Three.js
    ├── ScrollToTop.tsx
    ├── FloatingBookDemo.tsx
    ├── WhatsAppButton.tsx
    ├── BookDemoForm.tsx            ← Web3Forms modal, rate limited
    ├── WelcomePopup.tsx
    ├── ResourceDownloadForm.tsx
    ├── ResultsTicker.tsx           ← marquee animation, maroon bg
    ├── BlogListView.tsx            ← Client wrapper
    ├── BlogPostView.tsx            ← Client wrapper (needed for event handlers)
    ├── ui/Button.tsx
    └── sections/
        ├── AboutSection.tsx
        ├── BlogSection.tsx
        ├── CoursesSection.tsx
        ├── PricingSection.tsx      ← Desktop grid + mobile carousel
        ├── ResourcesSection.tsx    ← Numbered list, not cards
        ├── SuccessStoriesSection.tsx
        ├── TeachersSection.tsx     ← Paginated
        └── WhyChooseUsSection.tsx
```

---

## Sanity CMS Schema Types

| Type | Key Fields |
|------|-----------|
| `post` | title, slug, mainImage, excerpt, body (PortableText), publishedAt, author (→teacher) |
| `teacher` | name, photo, qualification, subject, teachingPhilosophy |
| `successStory` | studentName, photo, marks, rank, testimonialQuote, year |
| `resource` | title, description, pdfFile, slug, category |
| `course` | title, gradeLevel, subject, syllabus, slug |

Blog post body uses `asset->` dereference in GROQ for images to work with `urlFor()`.

---

## Environment Variables

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sanity project |
| `NEXT_PUBLIC_SANITY_DATASET` | Sanity dataset |
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | Contact + demo forms |
| `NEXT_PUBLIC_GA_ID` | Google Analytics (`G-0LEM8EPG51`) |
| `NEXT_PUBLIC_SITE_URL` | Base URL |

`baseUrl` in `layout.tsx` is set dynamically:
```ts
const baseUrl = process.env.NODE_ENV === 'production'
  ? 'https://www.thelearnersacademy.in'
  : 'http://localhost:3000';
```

---

## Key Rules & Gotchas

1. **Lucide icons on landing pages** — Replace with emojis (🎓🧠👥🎯📝📈). Lucide renders as red squares on some mobile browsers inside landing page content sections.

2. **Color overrides** — Global CSS forces color on all elements inside `.app-root`. Use `.bg-brand-maroon` CSS rules for maroon sections, `style={{}}` inline when Tailwind classes are overridden.

3. **CTA buttons inside maroon sections** — If button has `bg-white`, set `style={{ color: '#800000' }}` directly on the `<a>` tag. Do not use a `<span>` wrapper — the global rule will override it.

4. **Server vs Client Components** — Pages that use event handlers (BookDemoForm, Header callbacks) must be Client Components or wrapped in a Client Component (see `BlogPostView.tsx` pattern).

5. **Next.js 15 params** — `params` is a Promise. Always `const { slug } = await params` before use.

6. **Sanity Studio CSS bleed** — All brand rules are scoped to `.app-root`. Studio has its own `layout.tsx` with `* { color: white !important }`.

7. **Never run `npm install <package>` directly** — It can overwrite `package.json`. Use `npm install --save <package>` and verify the file afterward.

8. **Navbar values** — Keep `gap-12 text-lg` in Header. These were accidentally changed once.

9. **`baseUrl` must be `https://www.thelearnersacademy.in`** in production — Not the Vercel preview URL.
