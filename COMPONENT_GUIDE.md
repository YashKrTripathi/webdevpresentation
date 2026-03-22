# Component Reference Guide

## Quick Component Overview

### 1. **Navigation** (`Navigation.jsx`)
Top fixed navigation bar with logo and menu items.

**Features:**
- Logo with hover animation
- Menu items with underline animation
- "Connect Terminal" CTA button
- Responsive design (hidden on mobile)

**Props:** None (static for now)
**Animations:** slideDown on mount, scaleX underline on hover

---

### 2. **Hero** (`Hero.jsx`)
Main hero section with large headline and CTA buttons.

**Features:**
- Animated profile images (left & right)
- Large headline with styled accent
- Two CTA buttons (primary & secondary)
- Floating profile badges
- Scroll indicator animation

**Animations:** 
- staggered container animations
- floating profiles
- pulsing "Establishing Connection" text
- bouncing scroll indicator

---

### 3. **Frontend** (`Frontend.jsx`)
Frontend concepts section with card grid.

**Features:**
- Large feature card with image
- Medium cards with icons (Virtual DOM, Architecture)
- Wide responsive card with images
- Hover scale effects
- Icon animations

**Animations:** 
- staggered card entrances
- hover scale on cards
- icon scale on hover

---

### 4. **Journey** (`Journey.jsx`)
Learning path section with 3-step timeline.

**Features:**
- Three numbered steps with glow effect
- Connector line between steps (desktop)
- 3D card rotation on hover
- Color-coded steps

**Animations:**
- glowing number boxes
- 3D rotateY on hover
- staggered step animations

---

### 5. **EfficiencyEngine** (`EfficiencyEngine.jsx`)
AI tools and efficiency section with code simulation.

**Features:**
- Two-column layout (text + code)
- Tool tags with hover effects
- Simulated terminal output
- Code snippet showcase

**Animations:**
- slide-in from left/right
- staggered output lines
- tag animations

---

### 6. **RenderingMechanics** (`RenderingMechanics.jsx`)
Browser rendering mechanics explanation.

**Features:**
- Flow diagram (3 steps with arrows)
- Comparison cards (CSR vs SSR)
- Gradient overlays on cards
- Icon list items

**Animations:**
- staggered step entrances
- gradient pulse behind comparison cards
- list item animations

---

### 7. **Backend** (`Backend.jsx`)
Backend concepts and Node.js code sample.

**Features:**
- Feature list with icons
- Code snippet with syntax highlighting
- Terminal-like code display
- Icon hover effects

**Animations:**
- slide-in content
- icon animations
- code highlight effects

---

### 8. **AdvancedConcepts** (`AdvancedConcepts.jsx`)
Pro-level topics grid (JWT, GraphQL, WebSockets, Cloud Edge).

**Features:**
- 4-column grid layout
- Hover scale and border effects
- Color-coded cards by topic
- Responsive grid

**Animations:**
- staggered card entrances
- hover scale and y-offset
- border color transitions

---

### 9. **SimulationConsole** (`SimulationConsole.jsx`)
Terminal-like simulation console.

**Features:**
- Terminal header with status lights
- Scrollable console output
- Typed-out commands
- Blinking cursor animation

**Animations:**
- staggered output lines
- pulsing status indicator
- blinking cursor

---

### 10. **Footer** (`Footer.jsx`)
Footer section with branding and links.

**Features:**
- Branded logo
- Copyright text
- Social/doc links
- Hover effects on links

**Animations:**
- staggered link animations
- hover scale effects

---

### 11. **ParticleBackground** (`ParticleBackground.jsx`)
Animated particle canvas background.

**Technical:**
- Uses Canvas API
- 150 particles by default
- Randomized movement
- Alpha blending for glow

**Performance:** ~60fps on modern browsers

---

### 12. **CustomCursor** (`CustomCursor.jsx`)
Custom mouse cursor (desktop only).

**Features:**
- Green circle cursor
- Expands on hover over interactive elements
- Fixed position tracking
- Hidden on mobile

**CSS:** Uses position: fixed and CSS transitions

---

## Component Usage Patterns

### Animation Pattern 1: Fade + Slide In
```jsx
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
viewport={{ once: true }}
```

### Animation Pattern 2: Staggered Children
```jsx
variants={containerVariants}
initial="hidden"
whileInView="visible"
viewport={{ once: true }}
```

```jsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}
```

### Animation Pattern 3: Hover Effects
```jsx
whileHover={{ 
  scale: 1.05, 
  y: -5,
  borderColor: 'rgb(84, 231, 139)'
}}
transition={{ duration: 0.3 }}
```

---

## Styling Conventions

### Responsive Breakpoints (Tailwind)
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

### Common Classes Used
```css
/* Containers */
max-w-[1440px] mx-auto px-6 md:px-12

/* Typography */
font-headline text-4xl font-bold tracking-tighter
font-body text-lg text-on-surface-variant

/* Effects */
glass-panel, glow-primary, magnetic-hover
backdrop-blur-md, border-white/5, shadow-[...]
```

---

## Performance Tips

1. **Animations** - Use transform and opacity for best performance
2. **Images** - Consider lazy loading large images
3. **Particles** - Reduce count if performance drops
4. **Hover** - Don't animate too many elements simultaneously

---

## Extending Components

### Add New Component
1. Create file in `src/components/NewComponent.jsx`
2. Import in `App.jsx`
3. Add to main JSX render

### Example Structure
```jsx
import { motion } from 'framer-motion'

export default function NewComponent() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {/* Content */}
    </motion.section>
  )
}
```

---

## Debugging Tips

1. **Animation Not Working?**
   - Check `viewport={{ once: true }}`
   - Verify `whileInView` vs `animate`
   - Check CSS display/position

2. **Component Not Rendering?**
   - Check import in `App.jsx`
   - Verify JSX syntax
   - Check browser console for errors

3. **Performance Issues?**
   - Reduce animation count
   - Check for memory leaks
   - Profile with DevTools

---

## Component Dependencies

All components depend on:
- `framer-motion` - Animations
- `react` - Core library
- `tailwindcss` - Styling via className

Optional dependencies:
- `lucide-react` - Icons in some components

---

## Responsive Design Notes

Most components use:
- `hidden md:block` - Hide on mobile/tablet
- `md:col-span-*` - Grid columns
- `flex-col md:flex-row` - Column to row layout
- `text-sm md:text-xl` - Responsive text sizes

---

**Last Updated:** 2024
**Version:** 1.0.0
