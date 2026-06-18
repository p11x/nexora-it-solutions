# 🚀 Viprove Infotech

**Engineering Tomorrow's Infrastructure, Today**

A production-quality, animated IT company website built with React 18, Vite, Tailwind v4, Framer Motion, and GSAP. Fully responsive, accessible, and ready for deployment.

---

## 📋 Table of Contents

1. [Available Scripts](#-available-scripts)
2. [Dependencies](#-dependencies)
3. [Pages & Routes](#-pages--routes)
4. [Animation System](#-animation-system)
5. [Responsive Design](#-responsive-design)
6. [Accessibility](#-accessibility)
7. [Contact Information](#-contact-information)
8. [Contributing](#-contributing)
9. [License](#-license)

---

## 🔧 Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| Dev Server | `npm run dev` | Start Vite dev server at localhost:5173 |
| Build | `npm run build` | Production build to `/dist` |
| Preview | `npm run preview` | Preview production build locally |
| Lint | `npm run lint` | Run ESLint across all source files |

---

## 📦 Dependencies

### Production
```json
{
  "react": "^18.x",
  "react-dom": "^18.x",
  "react-router-dom": "^7.x",
  "framer-motion": "^11.x",
  "gsap": "^3.x",
  "@gsap/react": "^3.x",
  "lucide-react": "latest",
  "react-type-animation": "latest",
  "react-countup": "latest",
  "react-hot-toast": "latest",
  "react-intersection-observer": "latest",
  "three": "^0.168.x",
  "@react-three/fiber": "^8.x",
  "@react-three/drei": "^9.x",
  "clsx": "latest"
}
```

### Development
```json
{
  "vite": "^5.x",
  "@vitejs/plugin-react": "latest",
  "tailwindcss": "^4.x",
  "@tailwindcss/vite": "latest",
  "eslint": "latest"
}
```

---

## 🌐 Pages & Routes

### Home `/`
Sections (in order):
1. **HeroSection** — Particles, orbs, typewriter headline, trust signals
2. **StatsSection** — 4 animated counters (500+ Projects, 98% Satisfaction, 12+ Years, 50+ Engineers)
3. **FeaturedServices** — 6 service GlowCards with spotlight hover
4. **TechStack** — Infinite dual marquee of 12 tech badges
5. **Testimonials** — 3 glass-card client testimonials with star ratings
6. **CtaSection** — Gradient banner with floating shapes and dual CTAs

### Services `/services`
1. **PageHero** — "Our Services" heading with dot-grid background
2. **Service Grid** — Expanded 6-card grid with capability bullet points
3. **Why Choose Us** — 6-point icon grid (Expertise, Agile, Support, Security, Scale, Cost)
4. **Process Timeline** — 4-step horizontal timeline with GSAP line draw
5. **Pricing Tiers** — Starter ($999) / Professional ($2,499, featured) / Enterprise (Custom)

### Products `/products`
1. **PageHero** — "Our Products" with product count badge
2. **Filter Bar** — Category pills with framer-motion sliding active indicator
3. **Product Grid** — 2×2 filterable cards (NexaCloud, SecureVault, DataPulse, FlowOps)
4. **Integration Ecosystem** — Animated SVG hub-and-spoke diagram (8 integrations)

### Operations `/operations`
1. **PageHero** — "How We Operate" heading
2. **Methodology Timeline** — 6-phase GSAP scroll-drawn vertical timeline
3. **SLA Metrics** — 4 animated metric cards (99.9% Uptime, <2hr Response, 4-Week MVP, ISO 27001)
4. **Tools Stack** — 3-column Plan/Build/Monitor tool grid
5. **Global Delivery Map** — SVG world map with animated pulse pings (USA, UK, India, Singapore)

### About `/about`
1. **PageHero** — "About Viprove" with founding year
2. **Mission & Vision** — Quote + two info cards
3. **Story Timeline** — 5 milestones from 2012 → 2024
4. **Core Values** — 2×3 icon grid (Innovation, Integrity, Excellence, Collaboration, Security, Impact)
5. **Leadership Team** — 4 glass-card team member profiles
6. **Awards & Certifications** — ISO 27001, AWS Partner, Azure Gold, GCP Partner, SOC2, GDPR

### Contact `/contact`
1. **Form** — Full Name, Email, Company, Service Interest, Budget, Message + toast on submit
2. **Contact Info** — Email, Phone (+91 40 6800 1234), Hyderabad Office
3. **Office Hours** — Mon–Fri 9AM–6:30PM IST / Sat 10AM–2PM IST
4. **Map Placeholder** — Styled HITEC City, Hyderabad location card

---

## 🎬 Animation System

### Framer Motion (Component-level)

| Animation | Component | Behavior |
|-----------|-----------|----------|
| Page transitions | `App.jsx` | opacity + y slide, 0.4s ease |
| Stagger reveal | `ScrollReveal.jsx` | InView triggered, direction variants |
| Card hover | `GlowCard.jsx` | scale 1.02, cursor spotlight |
| Button press | `Button.jsx` | whileTap scale 0.98 |
| Filter pill | `Products.jsx` | layoutId sliding active indicator |
| Mobile menu | `Navbar.jsx` | full-screen stagger children |
| Hero entrance | `HeroSection.jsx` | staggerChildren 0.12 |

### GSAP + ScrollTrigger (Scroll-driven)

| Animation | Page | Trigger |
|-----------|------|---------|
| Timeline line draw | Operations | scrub: 1, top→bottom |
| Hero orb parallax | Home | scrub: true |
| Section counters | Home | start: "top 80%" |
| Element stagger | All pages | data-animate="stagger" |

### Pure CSS Keyframes

| Animation | Usage | Duration |
|-----------|-------|----------|
| `float` | Hero orbs, dashboard card | 6s infinite |
| `pulse-ring` | Map pings, phase nodes | 2s infinite |
| `shimmer` | Eyebrow badge background | 2.5s infinite |
| `spin-slow` | Navbar logo hexagon | 8s infinite linear |
| `marquee` | Tech stack rows (×2) | 30s / 25s infinite |
| `gradient-shift` | CTA section background | 8s infinite |

---

## 📱 Responsive Design

| Breakpoint | Width | Layout Changes |
|------------|-------|----------------|
| Mobile | `< 640px` | Single column, hamburger nav, half section-padding |
| Tablet | `640px – 1024px` | 2-column grids, stacked hero |
| Desktop | `> 1024px` | Full layout, hero side card visible |

All font sizes use `clamp()` for fluid scaling between breakpoints.

---

## ♿ Accessibility

- ✅ All interactive elements keyboard focusable
- ✅ Visible focus ring: `2px solid #4F46E5, offset 2px`
- ✅ Decorative icons marked `aria-hidden="true"`
- ✅ Color contrast ratio ≥ 4.5:1 for all text
- ✅ Skip-to-content link at top of page
- ✅ `useReducedMotion()` — heavy animations disabled on request
- ✅ Semantic HTML throughout (nav, main, section, footer, h1–h3)

---

## 🇮🇳 Contact Information

| Type | Detail |
|------|--------|
| 📧 Email | info@viprove.in |
| 📞 Phone | +91 40 6800 1234 |
| 📍 Address | Plot No. 12, HITEC City, Madhapur, Hyderabad, Telangana – 500081 |
| 🕘 Weekdays | Mon–Fri: 9:00 AM – 6:30 PM IST |
| 🕙 Saturday | 10:00 AM – 2:00 PM IST |
| 🌐 Website | [viprove.in](https://viprove.in) |

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m "feat: add your feature"`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

Please follow [Conventional Commits](https://www.conventionalcommits.org/) for commit messages.

---

## 📄 License

This project is licensed under the **MIT License**.
See the `LICENSE` file for details.

---

<div align="center">

Made with ❤️ in Hyderabad, India

**Viprove Infotech** — Engineering Tomorrow's Infrastructure, Today

⭐ Star this repo if you found it useful!

</div>