# Morpho Butterfly Project - Design Knowledge Base

## Project Overview

This is a **Vite + React + TypeScript + shadcn/ui** project featuring a 3D butterfly visualization landing page with email subscription functionality. The project is bilingual (Spanish/English) and uses a custom "Morpho" blue color palette inspired by the Morpho butterfly.

## Architecture

### Tech Stack
- **Build Tool**: Vite (fast development, optimized builds)
- **Framework**: React 18.3.1 with TypeScript
- **Styling**: Tailwind CSS 3.4.11 with custom configuration
- **UI Components**: shadcn/ui (50+ Radix UI-based components)
- **3D Graphics**: React Three Fiber (@react-three/fiber) + Three.js
- **State Management**: React Query (@tanstack/react-query) for server state
- **Routing**: React Router DOM v6
- **Form Handling**: React Hook Form with Zod validation
- **Notifications**: Sonner + shadcn/ui Toast
- **Icons**: Lucide React

### Project Structure
```
src/
├── components/
│   ├── ui/           # 50+ shadcn/ui components
│   ├── Butterfly.tsx # 3D butterfly component
│   └── EmailForm.tsx # Email subscription form
├── pages/
│   ├── Index.tsx     # Main landing page
│   └── NotFound.tsx  # 404 page
├── hooks/
│   ├── use-mobile.tsx
│   └── use-toast.ts
├── lib/
│   ├── i18n.tsx      # Internationalization context
│   └── utils.ts      # Utility functions (cn helper)
└── styles/
    ├── index.css     # Global styles + CSS variables
    └── App.css       # App-specific styles
```

## Design System

### Color Palette: Morpho Theme
The project uses a custom blue gradient palette inspired by the Morpho butterfly's iridescent wings:

```typescript
morpho: {
  100: "#E6F3FF",  // Lightest - background start
  200: "#B3D9FF",  // Background end
  300: "#80BFFF",  // Light accent
  400: "#4DA6FF",  // Medium accent
  500: "#1A8CFF",  // Primary blue (butterfly color)
  600: "#0073E6",  // Button primary
  700: "#0059B3",  // Button hover
  800: "#004080",  // Dark text
  900: "#00264D",  // Darkest - headings
}
```

### CSS Variables (shadcn/ui standard)
- Uses HSL color format for theming
- Supports light/dark mode toggle
- CSS variables for all semantic colors (background, foreground, primary, etc.)

### Typography & Spacing
- Tailwind's default spacing scale
- Custom animations: `fade-up`, `float`
- Border radius controlled by `--radius` variable (0.5rem default)

## Key Components Analysis

### 1. Butterfly.tsx (3D Component)
```typescript
// Uses React Three Fiber for 3D rendering
// Simple box geometry with metallic material
// Animation: Gentle rotation and floating motion using useFrame
```

**Design Pattern**: 
- Declarative 3D with React Three Fiber
- useRef for mesh reference
- useFrame for animation loop (60fps)
- Metallic material with high metalness (0.8) and low roughness (0.2)

### 2. EmailForm.tsx
```typescript
// Form with email validation
// Uses shadcn/ui Input and Button
// Toast notifications for success/error
// Bilingual labels via i18n
```

**Design Pattern**:
- Controlled component pattern (useState for email)
- Regex validation for email format
- Toast feedback system
- Glassmorphism effect (bg-white/80 backdrop-blur-sm)

### 3. Index.tsx (Landing Page)
```typescript
// Full-screen layout with 3D background
// Language selector (ES/EN toggle)
// Hero section with animated text
// Data table with butterfly species info
```

**Layout Pattern**:
- Absolute positioned Canvas for 3D background
- Relative z-10 content overlay
- Flexbox centering for content
- Responsive padding (px-4 py-12)

### 4. i18n.tsx (Internationalization)
```typescript
// React Context for language state
// Type-safe translations object
// useLanguage hook for consumption
// Supports ES and EN
```

**Design Pattern**:
- Context API for global state
- useMemo for performance optimization
- TypeScript for type safety
- Default language: Spanish ("es")

## UI/UX Patterns

### Glassmorphism
- `bg-white/80` - Semi-transparent white background
- `backdrop-blur-sm` - Subtle blur effect
- Used in: Language selector, Email form, Data table container

### Animations
1. **fade-up**: Content fades in while moving up (0.5s ease-out)
2. **float**: Continuous floating motion (6s ease-in-out infinite)
3. **Accordion**: Smooth height transitions for expandable content

### Responsive Design
- Mobile-first approach with Tailwind
- `min-w-[720px]` for table overflow on small screens
- Flexible container with `max-w-md`, `max-w-4xl`

### Accessibility
- ARIA labels for language selector (`aria-label`, `aria-pressed`)
- Semantic HTML (table with proper scope attributes)
- Screen reader support (`sr-only` class)

## shadcn/ui Integration

### Component Library
The project includes 50+ shadcn/ui components:
- **Form**: Input, Button, Label, Form, Textarea
- **Feedback**: Toast, Alert, Alert Dialog, Sonner
- **Navigation**: Tabs, Breadcrumb, Navigation Menu
- **Data Display**: Table, Card, Avatar, Badge
- **Overlay**: Dialog, Drawer, Sheet, Popover, Tooltip
- **Layout**: Separator, Scroll Area, Resizable

### Customization Pattern
All components use:
- `cn()` utility for conditional class merging (clsx + tailwind-merge)
- CSS variables for theming
- Radix UI primitives for accessibility
- Forward refs for component composition

## 3D Integration Best Practices

### React Three Fiber Setup
```typescript
<Canvas className="w-full h-full">
  <PerspectiveCamera makeDefault position={[0, 0, 5]} />
  <ambientLight intensity={0.5} />
  <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
  <pointLight position={[-10, -10, -10]} />
  <Butterfly />
  <OrbitControls enableZoom={false} />
</Canvas>
```

**Key Elements**:
- Three-point lighting (ambient + spot + point)
- OrbitControls for user interaction (rotation only)
- PerspectiveCamera with default position

## Enhancement Opportunities

### 1. Butterfly 3D Model
**Current**: Simple box geometry
**Enhancement**: Replace with actual butterfly GLTF/GLB model with wing flapping animation

### 2. i18n Coverage
**Current**: Only UI elements translated
**Enhancement**: Table content (species data) should also support i18n

### 3. Form Backend
**Current**: Client-side only (mock success)
**Enhancement**: Connect to actual email service (Resend, SendGrid, etc.)

### 4. Performance
**Current**: No lazy loading for 3D
**Enhancement**: Lazy load Three.js components, add loading states

### 5. SEO
**Current**: No meta tags visible
**Enhancement**: Add React Helmet for proper meta tags per language

## Design Decisions Summary

| Decision | Rationale |
|----------|-----------|
| Vite over CRA | Faster dev server, optimized builds |
| shadcn/ui over Material UI | Customizable, Radix-based, no runtime CSS-in-JS |
| React Three Fiber | Declarative 3D, React-friendly |
| Context for i18n | Simple, no external library needed for 2 languages |
| Morpho color palette | Brand identity, butterfly-inspired |
| Glassmorphism | Modern aesthetic, works well on 3D backgrounds |

## File References

- [tailwind.config.ts](tailwind.config.ts:1) - Theme configuration
- [src/lib/i18n.tsx](src/lib/i18n.tsx:1) - Internationalization
- [src/components/Butterfly.tsx](src/components/Butterfly.tsx:1) - 3D component
- [src/components/EmailForm.tsx](src/components/EmailForm.tsx:1) - Form component
- [src/pages/Index.tsx](src/pages/Index.tsx:1) - Main page
- [src/index.css](src/index.css:1) - Global styles
