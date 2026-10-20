# Farid Mia — World-Class Developer Portfolio

A personal brand and developer portfolio website for **Farid Mia** — Full-Stack Developer, WordPress & Laravel Specialist, and AI Automation Engineer.

Designed with an editorial, dark-first aesthetic inspired by Linear, Vercel, and Raycast, prioritizing authentic credibility, verified commercial products, responsive performance, and clean code architecture.

---

## ⚡ Tech Stack

- **Core Framework:** [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite 6](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) with custom dark/light theme tokens and glassmorphism
- **Icons:** [Lucide React](https://lucide.dev/)
- **Typography:** Inter & JetBrains Mono
- **SEO & Meta:** Semantic HTML5, JSON-LD Schema (Person), Open Graph, Twitter Cards, Sitemap, Robots.txt

---

## 🌟 Key Features

1. **Dark-First Modern Editorial Aesthetic:**
   - Deep charcoal background (`#080C14`), crisp borders, subtle indigo/cyan gradients, and a refined light-mode toggle.
2. **Hero Section with Interactive SVG/CSS Architecture Canvas:**
   - Switch between **Web & API**, **n8n Pipeline**, and **Local LLM** nodes to inspect request flows.
   - Compact credibility metrics (6+ Years Experience, WordPress Product Dev, Full-Stack PHP, AI & Automation).
3. **Featured Projects with Filter & Interactive Detail Modal:**
   - Filter by *All*, *WordPress*, *Laravel & PHP*, and *Automation & AI*.
   - Real, verified commercial releases:
     - **Easy Hotel Booking** (WordPress Plugin)
     - **RT Mega Menu Pro** (WordPress Plugin)
     - **Easy Currency Switcher for WooCommerce** (CodeCanyon)
     - **HiStudy WordPress Theme** (ThemeForest)
     - **Infinite Notification** (WordPress.org official repository)
     - **Custom Laravel Applications** (REST APIs & Architecture)
     - **n8n Automation & Local AI Pipelines** (Self-hosted workflows)
   - Custom SVG/CSS previews for each project card and a full-featured inspection modal with tech tags, deliverables, and live product links.
4. **Professional Experience Timeline:**
   - Chronological roles at **ReacThemes**, **Rainbow-Themes**, **RSTheme**, and **SmartDataSoft** with factual responsibilities and database query optimization highlights.
5. **Interactive AI Automation Showcase:**
   - Dedicated *"From Repetitive Tasks to Intelligent Workflows"* section.
   - 3 real-world scenarios: Form Submission → n8n → AI → Notification; WordPress Event → API → Workflow; Local Document → Ollama → Structured Output.
   - Interactive **Run Visual Trace** simulator illustrating packet propagation across nodes.
6. **Transparent Skills Classification:**
   - Divided into *Backend & Databases*, *WordPress Engineering*, *Frontend*, *AI & Automation*, *Tools & Infrastructure*, and *Digital Marketing & Growth*.
   - Explicit badges for **Production Core**, **Proficient**, and **Experimentation** to clearly differentiate daily work from exploratory learning.
7. **Contact Section & Forms:**
   - Validated contact form with anti-spam honeypot.
   - 1-click clipboard copy for `mdfarid7830@gmail.com` with feedback toast.
   - Direct mail client fallback link.
   - Timezone notice (Dhaka, UTC+6) and availability status.

---

## 🚀 Quick Start & Development

### 1. Prerequisites
- Node.js `v18+` or `v20+` (tested on Node `v24.11.1`)
- npm `v9+` or `v11+`

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### 4. Build for Production
```bash
npm run build
```
This runs strict TypeScript type checks (`tsc -b`) and builds minified assets to the `/dist` directory.

### 5. Preview Production Build
```bash
npm run preview
```

---

## 🛠️ Contact Form Configuration

The contact form currently validates inputs on the client and displays a success state with a 1-click mailto fallback.

To connect the form to an automated email service, choose one of the following methods:

### Option A: Formspree / Web3Forms (Zero Backend)
1. Sign up at [Formspree](https://formspree.io/) or [Web3Forms](https://web3forms.com/).
2. In `src/components/sections/Contact.tsx`, update the `handleSubmit` function to `fetch` your endpoint:
```ts
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});
```

### Option B: n8n Webhook (Recommended for AI Automation)
1. Create a Webhook trigger node in your n8n instance.
2. Direct the form POST request to your n8n webhook URL.
3. Use an n8n Telegram / Slack / Email node to receive instant lead notifications.

---

## 📁 Directory Structure

```text
faridportfolio/
├── public/
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Footer.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── ProjectModal.tsx
│   │   │   ├── ProjectVisual.tsx
│   │   │   └── SectionHeading.tsx
│   │   └── sections/
│   │       ├── About.tsx
│   │       ├── AutomationShowcase.tsx
│   │       ├── Contact.tsx
│   │       ├── Education.tsx
│   │       ├── Experience.tsx
│   │       ├── Hero.tsx
│   │       ├── Profiles.tsx
│   │       ├── Projects.tsx
│   │       ├── Services.tsx
│   │       └── Skills.tsx
│   ├── context/
│   │   └── ThemeContext.tsx
│   ├── data/
│   │   └── portfolioData.ts
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 📄 License & Attribution

Designed and engineered for **Farid Mia**. Built with strict standards for international agency and technology client presentations.
