# GEEKVERSE Quick Commands Reference

## 🚀 Essential Commands

### Initial Setup
```bash
npm install
```
Installs all dependencies (first time only)

### Development
```bash
npm run dev
```
Starts dev server at `http://localhost:3000` with hot reload

### Production Build
```bash
npm run build
```
Creates optimized `dist/` folder for deployment

### Preview Build
```bash
npm run preview
```
Test production build locally

### Linting
```bash
npm run lint
```
Check code quality

---

## 📂 File Structure Quick Reference

```
Source Files
src/
  ├── components/          # React components (edit these)
  │   ├── Navigation.jsx
  │   ├── Hero.jsx
  │   ├── Frontend.jsx
  │   ├── Journey.jsx
  │   ├── EfficiencyEngine.jsx
  │   ├── RenderingMechanics.jsx
  │   ├── Backend.jsx
  │   ├── AdvancedConcepts.jsx
  │   ├── SimulationConsole.jsx
  │   ├── Footer.jsx
  │   ├── ParticleBackground.jsx
  │   └── CustomCursor.jsx
  ├── App.jsx              # Main component
  ├── main.jsx             # Entry point
  └── index.css            # Global styles

Config Files (don't edit unless needed)
├── vite.config.js        # Build configuration
├── tailwind.config.js    # Design system
├── postcss.config.js     # CSS processing
├── .eslintrc.cjs         # Linting rules
├── package.json          # Dependencies
└── index.html            # HTML template
```

---

## 🎨 Common Customizations

### Change Primary Color
Edit `tailwind.config.js`:
```js
colors: {
  "primary": "#NEW_HEX_COLOR",  // Change #98ffb4 to your color
}
```

### Update Text Content
Edit component files (e.g., `src/components/Hero.jsx`):
```jsx
<h1>Your New Headline Here</h1>
```

### Change Font
Edit `tailwind.config.js`:
```js
fontFamily: {
  "headline": ["New Font Name"],
  "body": ["Another Font"],
}
```

### Add New Section
1. Create `src/components/NewSection.jsx`
2. Add to `App.jsx`:
```jsx
import NewSection from './components/NewSection'

// In the render:
<NewSection />
```

### Adjust Animation Speed
In any component:
```jsx
transition={{ duration: 0.3 }}  // Reduce for faster
// or
transition={{ duration: 1 }}    // Increase for slower
```

---

## 🔥 Common Issues & Fixes

### Port 3000 Already Used
```bash
npm run dev -- --port 3001
```

### Node Modules Corrupted
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Fails
```bash
npm cache clean --force
npm install
npm run build
```

### Animations Lag
- Open DevTools (F12)
- Check Performance tab
- Reduce particle count in `ParticleBackground.jsx`

### Images Not Loading
- Check image URL in component
- Use full URLs (not relative paths)
- Test URL in browser directly

---

## 📱 Responsive Design Breakpoints

```css
/* Mobile First */
.class { }              /* < 640px */

/* Tablet */
@md { .class { } }      /* 640px - 768px */

/* iPad/Small Desktop */
@lg { .class { } }      /* 768px - 1024px */

/* Desktop */
@xl { .class { } }      /* 1024px - 1280px */

/* Large Screen */
@2xl { .class { } }     /* 1280px+ */
```

In Tailwind classes:
```jsx
className="text-sm md:text-lg lg:text-xl"
className="flex-col md:flex-row"
className="hidden lg:block"
```

---

## 🚀 Deployment Quick Links

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
```bash
npm run build
# Push dist/ folder to GitHub Pages branch
```

---

## 📊 Project Statistics

| Metric | Value |
|--------|-------|
| Components | 12 |
| Total Files | 25+ |
| Package Size | ~200MB (node_modules) |
| Build Size | ~50KB (minified) |
| Development | Vite HMR |
| Animations | Framer Motion |
| CSS Framework | Tailwind |

---

## 🎯 Development Workflow

```
1. Start dev server
   npm run dev

2. Edit component
   src/components/MyComponent.jsx

3. Hot reload (automatic)
   Browser updates instantly

4. Test on mobile
   Visit http://YOUR_IP:3000 on phone

5. Build for production
   npm run build

6. Deploy
   Push dist/ folder to host
```

---

## 🔍 Debugging Tips

### Check Browser Console
Press F12 → Console tab → Look for errors

### React DevTools
Install React DevTools browser extension
- Inspect component tree
- Check props/state
- Track renders

### Vite DevTools
Shows in terminal:
- Module changes
- HMR updates
- Build status

### Performance Profiling
1. Open DevTools
2. Performance tab
3. Click Record
4. Interact with page
5. Click Stop
6. Analyze flame chart

---

## 📝 Git Workflow

```bash
# Initialize git (first time)
git init

# Check status
git status

# Add files
git add .

# Commit with message
git commit -m "Add new feature"

# Push to GitHub
git push origin main

# Ignore files
# .gitignore already prepared
```

---

## 🧪 Testing Checklist

- [ ] Tested on desktop (Chrome, Firefox, Safari)
- [ ] Tested on tablet (iPad, Android)
- [ ] Tested on mobile (iPhone, Android)
- [ ] Checked animations are smooth
- [ ] Verified all links work
- [ ] Tested form inputs (if any)
- [ ] Checked loading performance
- [ ] Verified responsive design

---

## 💾 Backup Important Files

Before making major changes:
```bash
# Backup package.json
cp package.json package.json.backup

# Backup component
cp src/components/Hero.jsx src/components/Hero.jsx.backup
```

---

## 📚 Quick Reference URLs

- **React Docs**: https://react.dev
- **Vite**: https://vitejs.dev
- **Tailwind**: https://tailwindcss.com
- **Framer Motion**: https://www.framer.com/motion
- **Lucide Icons**: https://lucide.dev
- **MDN Web Docs**: https://developer.mozilla.org

---

## 🎨 Color Palette (Quick Copy)

```css
Primary:    #98ffb4
Secondary:  #a5e7ff
Tertiary:   #f6e3ff
Background: #131313
Surface:    #1c1b1b
```

---

## ⌨️ Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Open DevTools | F12 or Ctrl+Shift+I |
| React DevTools | Shift+Alt+A or Cmd+Shift+D |
| Format Code | Shift+Alt+F |
| Comment Line | Ctrl+/ or Cmd+/ |
| Duplicate Line | Alt+Shift+Down or Cmd+Shift+Down |

---

## 🔐 Environment Variables

Create `.env.local` for secrets:
```env
VITE_API_URL=https://api.example.com
VITE_API_KEY=your_key_here
```

Access in code:
```jsx
const apiUrl = import.meta.env.VITE_API_URL
```

---

## 🎯 Next Steps Checklist

- [ ] Install dependencies (`npm install`)
- [ ] Start dev server (`npm run dev`)
- [ ] Explore components learned
- [ ] Customize content for your needs
- [ ] Test on different devices
- [ ] Build production version (`npm run build`)
- [ ] Deploy to hosting service
- [ ] Monitor performance
- [ ] Keep updating content

---

## 💡 Pro Tips

1. **Use Prettier** - Auto-format code
   ```bash
   npm install -D prettier
   npm run format
   ```

2. **Add TypeScript** - Type safety
   ```bash
   npm install -D typescript
   ```

3. **Add Testing** - Jest + React Testing Library
   ```bash
   npm install -D vitest
   ```

4. **Add Environment Variables** - `.env` file
   ```
   VITE_API_URL=https://...
   ```

5. **Add Analytics** - Google Analytics
   ```jsx
   import { GA_TRACKING_ID } from './config'
   ```

---

**Happy Coding! 🚀**

Last Updated: 2024
