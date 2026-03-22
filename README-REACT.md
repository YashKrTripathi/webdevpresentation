# GEEKVERSE - Professional React Presentation Website

A modern, professional React-based presentation website for GeeksforGeeks DYPIU Campus Club, featuring smooth animations, dark theme, and interactive components.

## Features

✨ **Modern Design**
- Dark-themed professional UI with neon accents
- Glassmorphic components and smooth animations
- Responsive design optimized for all devices
- Custom cursor and particle background effects

🎨 **Technology Stack**
- **React 18** - UI library
- **Vite** - Next-generation build tool
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Advanced animations
- **Lucide React** - Beautiful icons

📱 **Fully Responsive**
- Mobile-first approach
- Tablet and desktop optimizations
- Smooth scroll behavior
- Touch-friendly interactions

🚀 **Performance Optimized**
- Code splitting and lazy loading
- Optimized bundle size
- Fast build and dev server
- Smooth 60fps animations

## Project Structure

```
src/
├── components/
│   ├── Navigation.jsx         # Top navigation bar
│   ├── Hero.jsx               # Hero section
│   ├── Frontend.jsx           # Frontend concepts
│   ├── Journey.jsx            # Learning path
│   ├── EfficiencyEngine.jsx   # AI tools section
│   ├── RenderingMechanics.jsx # Browser rendering
│   ├── Backend.jsx            # Backend concepts
│   ├── AdvancedConcepts.jsx   # Pro-level topics
│   ├── SimulationConsole.jsx  # Terminal simulation
│   ├── Footer.jsx             # Footer section
│   ├── ParticleBackground.jsx # Animated particles
│   └── CustomCursor.jsx       # Custom cursor
├── App.jsx                    # Main app component
├── main.jsx                   # React entry point
└── index.css                  # Global styles

Configuration Files:
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Tailwind configuration
├── postcss.config.js         # PostCSS configuration
├── package.json              # Dependencies and scripts
└── index.html                # HTML entry point
```

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Steps

1. **Clone/Navigate to project directory**
   ```bash
   cd gfg_presentation-main
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The application will automatically open at `http://localhost:3000`

4. **Build for production**
   ```bash
   npm run build
   ```
   Output will be in the `dist` folder

5. **Preview production build**
   ```bash
   npm run preview
   ```

## Customization

### Colors
Edit `tailwind.config.js` to modify the color palette:
- Primary: #98ffb4 (bright green)
- Secondary: #a5e7ff (cyan)
- Tertiary: #f6e3ff (lavender)
- Background: #131313 (dark)

### Fonts
Tailwind config supports:
- `font-headline` - Space Grotesk (bold, titles)
- `font-body` - Inter (regular, body text)

### Animations
All animations use Framer Motion. Modify individual component animations:
- `whileHover` - On hover state
- `whileInView` - On scroll into view
- `initial` / `animate` / `exit` - Animation states

### Content
Update component content directly in the respective JSX files in `src/components/`

## Features Overview

### Navigation
- Fixed top navigation with smooth animations
- Hover effects on links and buttons
- Mobile-friendly responsive menu

### Hero Section
- Animated profile images with floating effect
- Gradient text highlights
- Call-to-action buttons with magnetic hover
- Animated scroll indicator

### Multiple Content Sections
- **Frontend**: Card-based layout with grid system
- **Journey**: Timeline with 3D card rotations
- **Efficiency Engine**: Side-by-side text and code
- **Rendering Mechanics**: Step-by-step flow diagrams
- **Backend**: Feature showcase with code samples
- **Advanced Concepts**: Grid card layout
- **Console**: Terminal-like simulation interface

### Interactive Elements
- Custom cursor (on desktop)
- Particle animation background
- Scanline overlay effect
- Magnetic button hover effects
- Smooth scroll transitions
- Staggered list animations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

1. **Image Optimization**: Consider using modern image formats (WebP)
2. **Code Splitting**: Vite automatically chunks components
3. **Lazy Loading**: Use React.lazy() for heavy components if needed
4. **Bundle Analysis**: Run `npm run build` and check dist folder size

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### GitHub Pages
Set `base: '/gfg_presentation-main/'` in vite.config.js and:
```bash
npm run build
git add dist
git commit -m "Deploy"
git push
```

## Troubleshooting

**Port 3000 already in use:**
```bash
npm run dev -- --port 3001
```

**Node modules issues:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Build errors:**
```bash
npm run build -- --debug
```

## Dependencies

- `react@^18.2.0` - React library
- `react-dom@^18.2.0` - React DOM
- `framer-motion@^10.16.4` - Animation library
- `lucide-react@^0.263.1` - Icon library
- `tailwindcss@^3.3.3` - CSS framework
- `vite@^4.4.0` - Build tool

## Development

### Hot Module Replacement (HMR)
Changes to components automatically reflect in the browser without full page reload.

### CSS Modules
Tailwind CSS is configured globally. Add custom styles in `src/index.css`

### ESLint
Add ESLint configuration for code quality:
```bash
npm install --save-dev eslint eslint-plugin-react
```

## License

© 2024 GEEKVERSE // ARCHITECTING THE KINETIC CODEX

## Support

For issues or questions:
- Check the component files in `src/components/`
- Review Tailwind documentation: https://tailwindcss.com
- Framer Motion docs: https://www.framer.com/motion
- Vite docs: https://vitejs.dev
