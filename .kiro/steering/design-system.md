---
inclusion: always
---

# Design System Rules

This document defines the design system rules for the learners project based on codebase analysis.

## Project Structure
- **Framework**: Next.js 16.1.1 with App Router
- **Styling**: Tailwind CSS v4 with custom theme configuration
- **Typography**: Geist Sans and Geist Mono fonts
- **Icons**: Lucide React for iconography

## Component Patterns

### Typography Scale
- **Headings**: Use semantic heading tags (h1, h2, etc.) with Tailwind classes
- **Body Text**: Default to `text-base` with appropriate line-height
- **Font Families**: 
  - Sans: `font-sans` (Geist Sans)
  - Mono: `font-mono` (Geist Mono)

### Color System
- **Background**: `bg-white dark:bg-black` for main containers
- **Foreground**: `text-black dark:text-zinc-50` for primary text
- **Muted Text**: `text-zinc-600 dark:text-zinc-400` for secondary content
- **Accent**: `bg-foreground text-background` for primary actions

### Layout Patterns
- **Container**: `max-w-3xl` for content width
- **Spacing**: Use consistent padding with `px-16 py-32` for main sections
- **Flexbox**: Prefer `flex flex-col` with `gap-*` for spacing
- **Responsive**: Use `sm:` prefix for mobile-first responsive design

### Component Guidelines
- **Buttons**: Use `rounded-full` with `h-12` height and appropriate padding
- **Links**: Include hover states with `transition-colors`
- **Images**: Use Next.js `Image` component with `dark:invert` for logos
- **Dark Mode**: Always include dark mode variants using `dark:` prefix

### File Organization
- Components should be placed in appropriate directories under `src/`
- Use TypeScript with `.tsx` extension for React components
- Follow Next.js App Router conventions for pages and layouts

## Figma Integration Guidelines
- Maintain 1:1 visual parity with Figma designs
- Replace Tailwind utilities with project tokens when converting from Figma
- Reuse existing component patterns rather than creating duplicates
- Respect the established color system and typography scale
- Ensure responsive behavior matches design specifications