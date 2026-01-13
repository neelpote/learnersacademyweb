---
inclusion: always
---

# Design System Rules

This document defines the design system rules for the learners project based on the new brand color scheme.

## Project Structure
- **Framework**: Next.js 16.1.1 with App Router
- **Styling**: Tailwind CSS v4 with custom theme configuration
- **Typography**: Geist Sans fonts
- **Icons**: Lucide React for iconography

## Component Patterns

### Typography Scale
- **Headings**: Use semantic heading tags (h1, h2, etc.) with brand maroon color
- **Body Text**: Default to `text-base` with dark blue color
- **Font Families**: 
  - Sans: `font-sans` (Geist Sans)
  - Mono: `font-mono` (Geist Mono)

### Color System
- **Background**: `#EAEAEA` (Faint Silver) for main containers
- **Foreground**: `#070A73` (Dark Blue) for primary text and main lettering
- **Headings**: `#800000` (Dark Maroon) for title lines and headings
- **Muted Text**: `#4A4A4A` for secondary content
- **Accent**: Dark Maroon background with Silver text for primary actions

### Layout Patterns
- **Container**: `max-w-7xl` for content width
- **Spacing**: Use consistent padding with `py-20` for main sections
- **Flexbox**: Prefer `flex flex-col` with `gap-*` for spacing
- **Responsive**: Use `sm:` prefix for mobile-first responsive design

### Component Guidelines
- **Buttons**: Use `rounded` with consistent padding and brand colors
- **Links**: Include hover states with `transition-colors`
- **Images**: Use Next.js `Image` component
- **Cards**: Use subtle borders with brand blue color, no shadows for clean look

### Brand Color Classes
- **Backgrounds**: `.bg-brand-silver`, `.bg-brand-maroon`, `.bg-brand-blue`
- **Text Colors**: `.text-brand-maroon`, `.text-brand-blue`, `.text-brand-silver`
- **Borders**: `.border-brand-blue`, `.border-brand-maroon`

### File Organization
- Components should be placed in appropriate directories under `src/`
- Use TypeScript with `.tsx` extension for React components
- Follow Next.js App Router conventions for pages and layouts

## Figma Integration Guidelines
- Maintain 1:1 visual parity with Figma designs
- Use brand color variables instead of arbitrary colors
- Reuse existing component patterns rather than creating duplicates
- Respect the established color system and typography scale
- Ensure responsive behavior matches design specifications