# The Learners' Academy - Tuition Center Website

A complete, production-ready website for "The Learners' Academy" tuition center built with Next.js 15, Tailwind CSS, and Sanity CMS.

## 🚀 Tech Stack

- **Framework**: Next.js 16.1.1 (App Router)
- **Styling**: Tailwind CSS v4 + Lucide React Icons
- **CMS**: Sanity.io (Headless CMS)
- **Forms**: Web3Forms (Serverless)
- **Deployment**: Vercel-ready
- **TypeScript**: Full type safety

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── blog/              # Blog pages
│   ├── courses/           # Course pages
│   ├── success-stories/   # Success stories page
│   ├── teachers/          # Teachers page
│   ├── resources/         # Resources page
│   ├── layout.tsx         # Root layout with SEO
│   ├── page.tsx           # Homepage
│   └── sitemap.ts         # Dynamic sitemap
├── components/            # Reusable components
│   ├── ui/               # UI components
│   ├── Header.tsx        # Navigation header
│   ├── Footer.tsx        # Site footer
│   ├── BookDemoForm.tsx  # Demo booking form
│   └── ResultsTicker.tsx # Success results ticker
├── lib/                  # Utilities
│   ├── sanity.ts         # Sanity client & queries
│   └── utils.ts          # Helper functions
sanity/
├── schemaTypes/          # Sanity schema definitions
│   ├── teacher.ts        # Teacher schema
│   ├── course.ts         # Course schema
│   ├── successStory.ts   # Success story schema
│   ├── post.ts           # Blog post schema
│   └── resource.ts       # Resource schema
```

## 🛠️ Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Create `.env.local` file:

```env
# Sanity CMS Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production

# Web3Forms Configuration (for contact forms)
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_web3forms_key_here
```

### 3. Set up Sanity CMS

1. Create a Sanity account at [sanity.io](https://sanity.io)
2. Create a new project
3. Copy your Project ID to `.env.local`
4. Initialize Sanity Studio:

```bash
npm run sanity:dev
```

5. Access Sanity Studio at `http://localhost:3333`

### 4. Set up Web3Forms

1. Go to [web3forms.com](https://web3forms.com)
2. Create a free account
3. Get your access key
4. Add it to `.env.local`

### 5. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to see your website.

## 📊 Sanity CMS Schemas

The project includes 5 content types:

### 1. Teachers
- Name, Photo, Qualification
- Subject, Teaching Philosophy

### 2. Courses
- Title, Grade Level, Subject
- Syllabus (Array of topics)
- SEO-friendly slugs

### 3. Success Stories
- Student Name, Photo, Marks/Percentage
- Rank, Testimonial Quote, Year

### 4. Blog Posts
- Title, Slug, Main Image
- Rich text body, Published Date
- Author reference to Teachers

### 5. Resources (Lead Magnets)
- Title, Description, PDF File
- Category, SEO-friendly slugs

## 🎨 Design System

The website follows a consistent design system:

- **Typography**: Geist Sans & Geist Mono fonts
- **Colors**: Semantic color system with dark mode
- **Components**: Reusable UI components
- **Layout**: Responsive grid system
- **Icons**: Lucide React icon library

## 🔍 SEO Features

- **Dynamic Metadata**: Each page generates metadata from CMS
- **JSON-LD Schema**: Educational Organization markup
- **Dynamic Sitemap**: Auto-generated from CMS content
- **Open Graph**: Social media optimization
- **Semantic HTML**: Proper heading hierarchy

## 📱 Key Features

### Homepage
- Hero section with CTA
- Features showcase
- Statistics display
- Results ticker (scrolling marquee)

### Course Management
- Course listing by grade level
- Individual course pages
- Syllabus display
- Booking integration

### Teacher Profiles
- Photo galleries
- Qualifications display
- Teaching philosophy

### Success Stories
- Student achievements
- Photo testimonials
- Results showcase

### Blog System
- Rich text content
- Author attribution
- SEO optimization

### Resource Downloads
- PDF lead magnets
- Categorized resources
- Download tracking

### Lead Capture
- "Book a Demo" forms
- Web3Forms integration
- Success confirmations

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect to Vercel
3. Add environment variables
4. Deploy automatically

### Manual Deployment

```bash
npm run build
npm start
```

## 📈 Performance Features

- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic route-based splitting
- **SEO Optimization**: Meta tags, sitemap, schema markup
- **Responsive Design**: Mobile-first approach
- **Dark Mode**: System preference detection

## 🔧 Customization

### Adding New Content Types

1. Create schema in `sanity/schemaTypes/`
2. Add to `index.ts`
3. Create queries in `src/lib/sanity.ts`
4. Build pages in `src/app/`

### Styling Changes

- Modify `src/app/globals.css` for global styles
- Update Tailwind classes in components
- Customize color scheme in CSS variables

### Form Integration

- Replace Web3Forms with your preferred service
- Update form components in `src/components/`

## 📞 Support

For questions or support:
- Check the documentation
- Review the code comments
- Test with sample data in Sanity

## 📄 License

This project is built for educational purposes. Customize as needed for your tuition center.

---

**Built with ❤️ for The Learners' Academy**