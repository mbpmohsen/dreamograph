# Dreamograph Landing Page

## Overview

This repository contains the implementation of the **Dreamograph landing page**, a promotional website for a dream analysis mobile app. The site is built using **Next.js (App Router)** with **Server-Side Rendering (SSR)** for optimal SEO and performance.

It features a modern, dark-themed design with sections for hero, features, testimonials, blog teasers, and app download links.

The design is **responsive**, **mobile-first**, and uses **Tailwind CSS** for styling. It supports **hybrid rendering**:

- **SSR** for dynamic content (e.g., testimonials or blogs fetched from an API)
- **SSG + ISR** for static sections

### Key Technologies

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion (optional)
- **Deployment:** Vercel (recommended)

---

## Prerequisites

- Node.js >= 18.x
- npm or yarn

---

## Installation

```bash
git clone https://github.com/your-username/dreamograph-site.git
cd dreamograph-site
npm install
```

Run the development server:

```bash
npm run dev
```

Open http://localhost:3000 to view the site.

Build for production:

```bash
npm run build
npm run start
```

---

## Project Structure

```text
dreamograph-site/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── favicon.ico
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── ProblemSection.tsx
│   ├── LanguageSection.tsx
│   ├── GroundedSection.tsx
│   ├── FeaturesSection.tsx
│   ├── DownloadSection.tsx
│   ├── Testimonials.tsx
│   ├── JournalSection.tsx
│   ├── CTASection.tsx
│   └── Footer.tsx
├── public/
│   ├── images/
│   └── ...
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
├── tsconfig.json
├── package.json
└── README.md
```

---

## Implementation Details

### 1. Setup and Configuration

- **Next.js Setup**
  Created using:

  ```bash
  npx create-next-app@latest --typescript
  ```

  Uses App Router for streaming SSR and modern routing.

- **Tailwind CSS**
  Configured with custom colors and fonts.
  Global styles live in `app/globals.css`.

  ```js
  module.exports = {
    content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          "navy-dark": "#0a0f1e",
          "accent-orange": "#ff6b4a",
        },
      },
    },
    plugins: [],
  };
  ```

- **Images**
  Uses Next.js `<Image />` for optimization and lazy loading.
  Assets are placed in `/public/images/`.

- **Animations**
  Optional animations via Framer Motion:
  ```bash
  npm install framer-motion
  ```

---

### 2. Rendering Strategy

- **SSR**
  Used when dynamic data is required.

  ```tsx
  export default async function Home() {
    const testimonials = await fetchTestimonials();
    return <main>{/* Sections */}</main>;
  }
  ```

- **SSG + ISR**
  Used for static content with revalidation.

  ```tsx
  export const revalidate = 3600;
  ```

- **API Routes**
  Optional backend logic via `app/api/*`.

---

### 3. Key Components

Each section is a reusable functional component styled with Tailwind.

#### Header

Fixed navigation with internal links.

#### Hero

Full-width section with gradient background, headline, CTA, and brain illustration.

#### Other Sections

- **ProblemSection:** 3-card grid (Record, Analyze, Insights)
- **LanguageSection:** Split layout with app screenshot
- **GroundedSection:** Psychology-based explanations
- **FeaturesSection:** 2x3 feature grid
- **DownloadSection:** App Store & Google Play buttons
- **Testimonials:** User quotes and statistics
- **JournalSection:** Blog teasers
- **CTASection:** Final call-to-action
- **Footer:** Navigation, copyright, social links

---

### 4. Data Handling

- **Static Data**
  Stored directly in components as arrays.

- **Dynamic Data**
  Fetch from CMS or API.

  ```tsx
  async function fetchTestimonials() {
    const res = await fetch("https://api.example.com/testimonials");
    return res.json();
  }
  ```

- **Local JSON**
  If no backend, store data in `/data/`.

---

### 5. Optimization & Best Practices

- **SEO**
  Meta tags via root layout.

- **Performance**
  Image optimization and code splitting handled by Next.js.

- **Accessibility**
  Semantic HTML, alt texts, ARIA labels.

- **Testing**

  ```bash
  npm install --save-dev jest @testing-library/react
  ```

- **Deployment**
  Push to Vercel for automatic CI/CD.

---

## Customization

- **Colors & Fonts**
  Update `tailwind.config.js`.
- **Assets**
  Replace images in `/public/images/`.
- **Backend**
  Integrate Supabase, Firebase, or custom API for dream submissions.

---

## License

MIT License.

---

## Contact

Open an issue or contact: `your-email@example.com`
