# The Learners' Academy - Product Document

**Version:** 1.0  
**Date:** January 12, 2026  
**Product Type:** Educational Website & CMS Platform  
**Status:** Production Ready

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Product Overview](#2-product-overview)
3. [Target Audience](#3-target-audience)
4. [Features & Functionality](#4-features--functionality)
5. [Technical Architecture](#5-technical-architecture)
6. [Design System](#6-design-system)
7. [Content Management](#7-content-management)
8. [User Journey & Experience](#8-user-journey--experience)
9. [Performance & Security](#9-performance--security)
10. [Future Roadmap](#10-future-roadmap)

---

## 1. Executive Summary

### 1.1 Product Vision

The Learners' Academy website is a modern, full-featured educational platform designed to showcase the academy's offerings, attract prospective students, and provide comprehensive information about courses, teachers, and success stories. The platform embodies the academy's motto: **"Learn it the Learners' way!"**

### 1.2 Mission Statement

To provide a digital gateway that reflects The Learners' Academy's commitment to innovative education, making it easy for students and parents to discover courses, understand teaching methodologies, and begin their academic journey with confidence.

### 1.3 Key Objectives

- **Attract Students:** Showcase courses for classes 6-12 across multiple boards (ICSE, CBSE, State Board, MSBSHSE)
- **Build Trust:** Display success stories, teacher credentials, and proven results
- **Enable Engagement:** Provide easy demo booking and inquiry mechanisms
- **Share Knowledge:** Offer educational resources and blog content
- **Establish Authority:** Position the academy as a leader in personalized education

### 1.4 Success Metrics

- **500+ Students Taught** - Demonstrated track record
- **95% Success Rate** - Proven teaching effectiveness
- **50+ Top Rankers** - Excellence in competitive exams
- **8+ Years Experience** - Established educational institution

---

## 2. Product Overview

### 2.1 What is The Learners' Academy Website?

The Learners' Academy website is a comprehensive digital platform built with modern web technologies (Next.js 16, React 19, Sanity.io CMS) that serves as the primary online presence for The Learners' Academy - a tutoring institution founded in 2014 by Dr. Hrishi RajeBhosale.

### 2.2 Core Value Propositions

1. **Expert Teachers** - Highly qualified educators with years of experience
2. **Comprehensive Curriculum** - Complete syllabus coverage for all major boards
3. **Proven Results** - Consistent top rankings and excellent board results
4. **Personalized Attention** - Small batch sizes ensuring individual focus

### 2.3 Product Differentiators

- **Interactive Learning** - Engaging methods that make learning enjoyable
- **Optimal Batch Size** - Small classes for individual attention
- **Conceptual Tutoring** - Deep understanding through innovative techniques
- **State-of-the-art Classrooms** - Modern facilities for comfortable learning
- **FREE Services** - Vacation batches, test series, competitive exam coaching included

### 2.4 Educational Offerings

**Subjects:**
- Mathematics
- Physics
- Chemistry
- Biology
- English
- Spoken English (Special Program)

**Boards Covered:**
- ICSE
- CBSE
- State Board
- MSBSHSE

**Competitive Exam Preparation:**
- JEE, NEET, NDA, MH-CET
- KVPY, NTSE, NSO, IEO, IMO

---

## 3. Target Audience

### 3.1 Primary Audience

**Students (Classes 6-12)**
- Age Range: 11-18 years
- Academic Goals: Board exam excellence, competitive exam preparation
- Pain Points: Need for personalized attention, conceptual clarity, exam preparation
- Motivations: Academic success, college admissions, career goals

**Parents/Guardians**
- Age Range: 35-55 years
- Concerns: Quality education, proven results, safe environment, value for money
- Decision Factors: Teacher credentials, success rate, facilities, curriculum coverage
- Engagement: Actively involved in educational decisions

### 3.2 Secondary Audience

**Educational Counselors**
- Seeking quality tutoring recommendations
- Evaluating academic support options for students

**School Administrators**
- Potential partnership opportunities
- Supplementary education providers

### 3.3 User Personas

**Persona 1: "Ambitious Arjun"**
- Class 10 ICSE student
- Goal: 95%+ in boards, JEE preparation
- Needs: Conceptual clarity, competitive exam coaching
- Tech-savvy, researches online before decisions

**Persona 2: "Concerned Parent Priya"**
- Mother of Class 8 student
- Goal: Find reliable tutoring with proven results
- Needs: Transparent information, teacher credentials, success stories
- Values: Safety, individual attention, comprehensive curriculum

**Persona 3: "Career-Focused Kavya"**
- Class 12 student preparing for NEET
- Goal: Medical college admission
- Needs: Intensive coaching, test series, expert guidance
- Motivated, seeks specialized competitive exam preparation

---

## 4. Features & Functionality

### 4.1 Core Features

#### 4.1.1 Results Ticker
**Purpose:** Showcase recent student achievements in real-time  
**Implementation:** Animated scrolling banner displaying top results  
**Value:** Builds credibility and social proof immediately upon page load

#### 4.1.2 Navigation Header
**Components:**
- Academy logo and branding
- Smooth scroll navigation to all sections
- Sticky header that adapts on scroll
- Mobile-responsive hamburger menu
- Prominent "Book a Demo" CTA button

**User Experience:**
- Always accessible navigation
- Clear visual hierarchy
- Smooth transitions between sections

#### 4.1.3 Hero Section
**Elements:**
- Compelling headline: "Unlock Your Academic Potential"
- Value proposition messaging
- Dual CTAs: "Start Your Journey" and "Explore Courses"
- Visual badge: "Transform Your Future Today"

**Psychology:** Creates immediate impact and guides users to primary actions

#### 4.1.4 Statistics Dashboard
**Metrics Displayed:**
- 500+ Students Taught
- 95% Success Rate
- 50+ Top Rankers
- 8+ Years Experience

**Design:** Bold, high-contrast display on maroon background with icons  
**Impact:** Quantifiable proof of academy's effectiveness

### 4.2 Content Sections

#### 4.2.1 Courses Section
**Features:**
- Dynamic course catalog from Sanity CMS
- Grouped by grade level (Classes 6-12)
- Subject-wise organization
- Syllabus preview (first 3 topics)
- Small batch size and flexible timing indicators

**Data Structure:**
```
Course {
  title: string
  gradeLevel: string
  subject: string
  syllabus: string[]
  slug: string
}
```

**User Value:** Easy course discovery and curriculum transparency

#### 4.2.2 Teachers Section
**Features:**
- Teacher profiles with photos
- Qualifications and specializations
- Years of experience
- Teaching philosophy
- Subject expertise

**Purpose:** Build trust through teacher credentials and personality

#### 4.2.3 Success Stories Section
**Features:**
- Student testimonials
- Achievement highlights
- Board exam results
- Competitive exam success
- Before/after narratives

**Impact:** Social proof and inspiration for prospective students

#### 4.2.4 Blog Section
**Features:**
- Educational articles
- Study tips and strategies
- Exam preparation guides
- Subject-specific insights
- CMS-managed content

**SEO Value:** Drives organic traffic through educational content

#### 4.2.5 Resources Section
**Features:**
- Downloadable study materials
- Practice papers
- Reference guides
- Educational tools
- Free resources for students

**Engagement:** Provides immediate value to visitors

#### 4.2.6 About Section
**Expandable Design:**
- Collapsed header with "Learn More" interaction
- Founder's story: Dr. Hrishi RajeBhosale
- Mission and Vision statements
- "The Learners' Way" philosophy
- Salient features
- FREE services offered
- Spoken English program details
- Faculty information

**UX Pattern:** Progressive disclosure - essential info visible, details on demand

### 4.3 Interactive Features

#### 4.3.1 Book Demo Form
**Fields:**
- Student Name
- Parent Name
- Contact Number
- Email Address
- Grade/Class
- Subject Interest
- Preferred Time Slot
- Message/Special Requirements

**Integration:** Web3Forms API for form submissions  
**Validation:** Client-side validation with error messaging  
**Feedback:** Success confirmation and follow-up expectations

#### 4.3.2 Smooth Scroll Navigation
**Implementation:** JavaScript-based smooth scrolling to sections  
**Enhancement:** Improves single-page application experience  
**Accessibility:** Keyboard navigation support

#### 4.3.3 Mobile Menu
**Features:**
- Slide-out navigation
- Full section access
- CTA button included
- Clean close interaction

---

## 5. Technical Architecture

### 5.1 Technology Stack

#### Frontend Framework
**Next.js 16.1.1**
- React 19.2.3 for UI components
- Server-side rendering (SSR) for performance
- Static site generation (SSG) for content pages
- API routes for backend functionality
- Image optimization with next/image

#### Styling
**Tailwind CSS 4**
- Utility-first CSS framework
- Custom design system implementation
- Responsive design utilities
- PostCSS for processing

#### Content Management
**Sanity.io**
- Headless CMS for content management
- Real-time content updates
- GROQ query language
- Sanity Vision for content exploration
- Structured content modeling

#### Form Handling
**Web3Forms**
- Serverless form submissions
- Email notifications
- Spam protection
- Rate limiting

#### Icons
**Lucide React**
- Modern icon library
- Tree-shakeable imports
- Consistent design language

### 5.2 Project Structure

```
learners/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Main homepage
│   │   ├── layout.tsx        # Root layout
│   │   ├── globals.css       # Global styles
│   │   └── sitemap.ts        # SEO sitemap
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── BookDemoForm.tsx
│   │   ├── ResultsTicker.tsx
│   │   ├── sections/
│   │   │   ├── AboutSection.tsx
│   │   │   ├── CoursesSection.tsx
│   │   │   ├── TeachersSection.tsx
│   │   │   ├── SuccessStoriesSection.tsx
│   │   │   ├── BlogSection.tsx
│   │   │   └── ResourcesSection.tsx
│   │   └── ui/
│   │       └── Button.tsx
│   └── lib/
│       ├── sanity.ts         # Sanity client config
│       ├── rateLimit.ts      # Rate limiting
│       └── utils.ts          # Utility functions
├── sanity/
│   └── schemas/              # Content schemas
├── public/
│   └── logo.png             # Academy logo
└── package.json
```

### 5.3 Data Flow

1. **Content Creation:** Editors create content in Sanity Studio
2. **Content Storage:** Sanity Content Lake stores structured data
3. **Data Fetching:** Next.js fetches data via Sanity client
4. **Rendering:** Server-side or static generation of pages
5. **Client Hydration:** React components become interactive
6. **User Interaction:** Form submissions via Web3Forms API

### 5.4 API Integration

**Sanity API:**
- Project ID: Configured in environment variables
- Dataset: Production dataset
- API Version: Latest stable
- Queries: GROQ-based content fetching

**Web3Forms API:**
- Access Key: Environment variable
- Endpoint: https://api.web3forms.com/submit
- Rate Limiting: Built-in protection

### 5.5 Deployment

**Platform:** Vercel
- Automatic deployments from Git
- Edge network distribution
- Serverless functions
- Environment variable management
- Preview deployments for branches

---

## 6. Design System

### 6.1 Brand Identity

**Academy Name:** The Learners' Academy  
**Tagline:** "Learn it the Learners' way!"  
**Founded:** 2014  
**Founder:** Dr. Hrishi RajeBhosale

### 6.2 Color Palette

**Primary Colors:**
- **Brand Maroon:** `#8B0000` - Authority, excellence, tradition
- **Brand Blue:** `#003366` - Trust, intelligence, stability
- **Brand Silver:** `#F5F5F5` - Clarity, sophistication, space

**Accent Colors:**
- **Academic Teal:** `#008B8B` - Innovation, growth
- **Primary Orange:** `#FF6B35` - Energy, enthusiasm
- **Warm Brown:** `#8B4513` - Reliability, warmth

**Neutral Colors:**
- **Soft Cream:** `#FFF8DC` - Comfort, approachability
- **Matte Silver:** `#E8E8E8` - Clean backgrounds

### 6.3 Typography

**Heading Font:** System font stack (San Francisco, Segoe UI, Roboto)
- Font Weight: Bold (700)
- Usage: Headlines, section titles, navigation

**Body Font:** System font stack
- Font Weight: Regular (400), Medium (500)
- Usage: Paragraphs, descriptions, UI text

**Type Scale:**
- Hero: 3.5rem (56px) - Main headline
- Display: 3rem (48px) - Section headers
- Headline: 2.5rem (40px) - Subsection headers
- Title: 1.5rem (24px) - Card titles
- Subtitle: 1.25rem (20px) - Supporting text
- Lead: 1.125rem (18px) - Intro paragraphs
- Body: 1rem (16px) - Standard text

### 6.4 Component Styles

**Buttons:**
```css
.btn-primary {
  background: brand-maroon
  color: brand-silver
  padding: 12px 24px
  border-radius: 8px
  font-weight: 600
  hover: opacity 90%
  transition: all 300ms
}

.btn-secondary {
  background: transparent
  color: brand-maroon
  border: 2px solid brand-maroon
  padding: 12px 24px
  border-radius: 8px
  hover: background brand-maroon, color brand-silver
}
```

**Cards:**
```css
.card {
  background: brand-silver
  border: 2px solid brand-blue
  border-radius: 12px
  padding: 24px
  transition: border-color 300ms
  hover: border-color brand-maroon
}

.feature-card {
  background: brand-silver
  border: 2px solid brand-blue
  border-radius: 16px
  padding: 32px
  text-align: center
  hover: transform translateY(-4px)
  transition: all 300ms
}
```

**Navigation:**
```css
.nav-bar {
  background: brand-maroon
  position: sticky
  top: 0
  z-index: 40
}

.nav-link {
  color: brand-silver
  font-weight: 500
  hover: opacity 80%
  transition: opacity 300ms
}
```

### 6.5 Spacing System

**Section Padding:** 80px vertical (section-padding class)  
**Container Max Width:** 1280px (max-w-7xl)  
**Grid Gaps:** 24px (gap-6), 32px (gap-8)  
**Card Padding:** 24px, 32px for feature cards

### 6.6 Responsive Breakpoints

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

**Responsive Patterns:**
- Single column on mobile
- 2 columns on tablet
- 3-4 columns on desktop
- Hamburger menu on mobile
- Full navigation on desktop

---

## 7. Content Management

### 7.1 Sanity CMS Integration

**Purpose:** Enable non-technical staff to manage website content without developer intervention

**Studio Access:** Dedicated Sanity Studio interface for content editing

### 7.2 Content Schemas

#### Course Schema
```typescript
{
  name: 'course',
  type: 'document',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'gradeLevel', type: 'string' },
    { name: 'subject', type: 'string' },
    { name: 'syllabus', type: 'array', of: [{ type: 'string' }] },
    { name: 'slug', type: 'slug' }
  ]
}
```

#### Teacher Schema
```typescript
{
  name: 'teacher',
  type: 'document',
  fields: [
    { name: 'name', type: 'string' },
    { name: 'qualification', type: 'string' },
    { name: 'specialization', type: 'string' },
    { name: 'experience', type: 'number' },
    { name: 'bio', type: 'text' },
    { name: 'image', type: 'image' }
  ]
}
```

#### Success Story Schema
```typescript
{
  name: 'successStory',
  type: 'document',
  fields: [
    { name: 'studentName', type: 'string' },
    { name: 'achievement', type: 'string' },
    { name: 'testimonial', type: 'text' },
    { name: 'year', type: 'number' },
    { name: 'image', type: 'image' }
  ]
}
```

#### Blog Post Schema
```typescript
{
  name: 'blogPost',
  type: 'document',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'slug', type: 'slug' },
    { name: 'author', type: 'reference', to: [{ type: 'teacher' }] },
    { name: 'publishedAt', type: 'datetime' },
    { name: 'excerpt', type: 'text' },
    { name: 'content', type: 'blockContent' },
    { name: 'category', type: 'string' },
    { name: 'featuredImage', type: 'image' }
  ]
}
```

#### Resource Schema
```typescript
{
  name: 'resource',
  type: 'document',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'description', type: 'text' },
    { name: 'category', type: 'string' },
    { name: 'gradeLevel', type: 'string' },
    { name: 'subject', type: 'string' },
    { name: 'file', type: 'file' }
  ]
}
```

### 7.3 Content Workflow

1. **Create:** Content editors create new entries in Sanity Studio
2. **Review:** Content can be saved as draft before publishing
3. **Publish:** Published content immediately available via API
4. **Update:** Real-time updates reflected on website
5. **Archive:** Old content can be unpublished without deletion

### 7.4 Content Guidelines

**Course Content:**
- Clear, concise course titles
- Accurate grade level classification
- Comprehensive syllabus topics (minimum 5)
- SEO-friendly slugs

**Teacher Profiles:**
- Professional headshot photos
- Verified qualifications
- Accurate experience years
- Engaging, authentic bios

**Success Stories:**
- Student consent for testimonials
- Verifiable achievements
- Recent results prioritized
- Diverse representation

**Blog Posts:**
- Educational value focus
- SEO-optimized titles
- Proper categorization
- Regular publishing schedule

---

## 8. User Journey & Experience

### 8.1 Primary User Journey: Prospective Student/Parent

**Stage 1: Awareness**
- User discovers website through search, referral, or advertisement
- Lands on homepage
- Immediately sees results ticker showcasing achievements

**Stage 2: Interest**
- Reads hero section value proposition
- Views statistics dashboard (500+ students, 95% success rate)
- Scrolls to explore features section

**Stage 3: Consideration**
- Explores courses section to find relevant grade/subject
- Reads about teaching methodology in features
- Views teacher profiles for credibility
- Reads success stories for social proof

**Stage 4: Evaluation**
- Expands About section to learn academy's philosophy
- Reviews FREE services offered
- Checks blog for educational content quality
- Downloads resources to test value

**Stage 5: Decision**
- Clicks "Book a Demo" CTA
- Fills out demo booking form
- Receives confirmation
- Awaits follow-up from academy

**Stage 6: Post-Conversion**
- Receives email confirmation
- Gets phone call from academy staff
- Schedules demo class
- Attends demo and enrolls

### 8.2 Secondary User Journey: Returning Visitor

**Scenario 1: Resource Access**
- Direct navigation to Resources section
- Downloads study materials
- Reads latest blog posts
- Shares content with peers

**Scenario 2: Information Update**
- Checks for new courses
- Views updated success stories
- Reads latest blog articles
- Stays engaged with academy

### 8.3 User Experience Principles

**Clarity:**
- Clear navigation labels
- Obvious CTAs
- Straightforward information hierarchy
- No jargon or confusing terminology

**Trust:**
- Verified statistics and achievements
- Teacher credentials prominently displayed
- Real student testimonials
- Professional design and presentation

**Accessibility:**
- Mobile-responsive design
- Readable font sizes
- High contrast colors
- Keyboard navigation support
- Fast loading times

**Engagement:**
- Interactive elements (expandable sections, smooth scrolling)
- Visual interest (icons, images, color)
- Valuable content (blog, resources)
- Clear next steps (CTAs)

### 8.4 Conversion Optimization

**CTA Placement:**
- Header: "Book a Demo" button
- Hero: "Start Your Journey" primary CTA
- Hero: "Explore Courses" secondary CTA
- Footer: "Book Your Free Demo Now"
- Mobile menu: "Book a Demo" button

**Trust Signals:**
- Statistics dashboard above the fold
- Results ticker at top of page
- Teacher qualifications
- Success stories section
- Years of experience highlighted

**Friction Reduction:**
- Simple demo booking form
- No account creation required
- Smooth scroll navigation (no page reloads)
- Fast page load times
- Mobile-optimized experience

---

## 9. Performance & Security

### 9.1 Performance Optimization

**Next.js Optimizations:**
- Static site generation for content pages
- Image optimization with next/image
- Code splitting and lazy loading
- Automatic font optimization
- Minified CSS and JavaScript

**Loading Strategy:**
- Critical CSS inlined
- Non-critical resources deferred
- Images lazy-loaded below fold
- Prefetching for navigation links

**Performance Targets:**
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1

**Monitoring:**
- Vercel Analytics for performance tracking
- Core Web Vitals monitoring
- Error tracking and reporting

### 9.2 Security Measures

**Form Security:**
- Web3Forms spam protection
- Honeypot fields for bot detection
- Rate limiting on submissions
- Input validation and sanitization
- HTTPS-only form submission

**Content Security:**
- Sanity.io access controls
- Environment variables for API keys
- No sensitive data in client-side code
- CORS configuration

**HTTP Security Headers:**
- X-Content-Type-Options: nosniff
- Strict-Transport-Security (HSTS)
- Content-Security-Policy (CSP)
- X-Frame-Options
- Referrer-Policy

**Data Protection:**
- No user data stored on frontend
- Form submissions encrypted in transit
- Sanity CMS role-based access control
- Regular security updates

### 9.3 SEO Optimization

**Technical SEO:**
- Semantic HTML structure
- Proper heading hierarchy (H1, H2, H3)
- Meta descriptions for all pages
- Open Graph tags for social sharing
- Sitemap.xml generation
- Robots.txt configuration

**On-Page SEO:**
- Keyword-optimized content
- Descriptive alt text for images
- Internal linking structure
- Mobile-friendly design
- Fast page load times

**Content SEO:**
- Blog posts for long-tail keywords
- Educational content for organic traffic
- Regular content updates
- Topic clustering strategy

**Local SEO:**
- Academy location information
- Contact details
- Local keyword targeting
- Google Business Profile integration (future)

### 9.4 Accessibility

**WCAG 2.1 Compliance:**
- Sufficient color contrast ratios
- Keyboard navigation support
- Screen reader compatibility
- Alt text for all images
- Semantic HTML elements

**Responsive Design:**
- Mobile-first approach
- Touch-friendly interactive elements
- Readable text sizes on all devices
- Proper viewport configuration

---

## 10. Future Roadmap

### 10.1 Phase 2 Enhancements (Q2 2026)

**Student Portal:**
- Login system for enrolled students
- Access to class schedules
- Assignment submissions
- Progress tracking
- Grade reports

**Online Payments:**
- Fee payment integration
- Multiple payment gateways
- Receipt generation
- Payment history

**Live Chat:**
- Real-time chat support
- WhatsApp integration
- Automated responses for FAQs
- Office hours availability

**Advanced Search:**
- Course search and filtering
- Teacher search by subject
- Resource library search
- Blog search functionality

### 10.2 Phase 3 Features (Q3-Q4 2026)

**Video Integration:**
- Teacher introduction videos
- Virtual campus tour
- Sample class recordings
- Student testimonial videos

**Events Calendar:**
- Upcoming batch start dates
- Exam schedules
- Vacation batch announcements
- Parent-teacher meetings

**Alumni Network:**
- Alumni success showcase
- Mentorship program
- Alumni testimonials
- Career guidance from alumni

**Multi-language Support:**
- Hindi language option
- Marathi language option
- Language switcher in header

### 10.3 Phase 4 Advanced Features (2027)

**Online Classes:**
- Live streaming capability
- Recorded class library
- Interactive whiteboard
- Attendance tracking

**Mobile App:**
- Native iOS and Android apps
- Push notifications
- Offline resource access
- Mobile-optimized learning

**AI-Powered Features:**
- Personalized course recommendations
- Chatbot for instant queries
- Automated doubt resolution
- Performance analytics

**Community Features:**
- Student forums
- Peer study groups
- Discussion boards
- Knowledge sharing platform

### 10.4 Continuous Improvements

**Content Expansion:**
- Weekly blog posts
- Monthly resource additions
- Quarterly success story updates
- Regular course catalog updates

**Performance Monitoring:**
- Monthly performance audits
- A/B testing for conversions
- User behavior analysis
- Continuous optimization

**Security Updates:**
- Regular dependency updates
- Security patch applications
- Penetration testing (annual)
- Compliance reviews

**User Feedback Integration:**
- Quarterly user surveys
- Feedback form implementation
- Feature request tracking
- Iterative improvements based on data

---

## Appendix

### A. Technical Dependencies

```json
{
  "dependencies": {
    "@portabletext/react": "^3.0.11",
    "@sanity/client": "^6.10.0",
    "@sanity/image-url": "^1.0.2",
    "@sanity/vision": "^5.1.0",
    "clsx": "^2.0.0",
    "lucide-react": "^0.562.0",
    "next": "16.1.1",
    "next-sanity": "^9.0.0",
    "react": "19.2.3",
    "react-dom": "19.2.3",
    "styled-components": "^6.1.19",
    "tailwind-merge": "^2.2.0"
  }
}
```

### B. Environment Variables

```
NEXT_PUBLIC_SANITY_PROJECT_ID=<project-id>
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=<access-key>
```

### C. Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile Safari (iOS 12+)
- Chrome Mobile (Android 8+)

### D. Contact Information

**The Learners' Academy**  
Founded: 2014  
Founder: Dr. Hrishi RajeBhosale  
Website: [Production URL]  
Email: [Contact Email]  
Phone: [Contact Number]

---

**Document Version History:**

- v1.0 - January 12, 2026 - Initial comprehensive product document
- Future versions will track feature additions and updates

**Document Owner:** Product Team, The Learners' Academy  
**Last Updated:** January 12, 2026  
**Next Review:** April 12, 2026
