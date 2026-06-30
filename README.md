# AURA | Creative Digital Agency Homepage

This project is a premium, modern, and highly interactive **Design Agency Homepage** built as a part of the Next.js Developer Internship Task evaluation. 

## 🌐 Live Demo & Repository
*   **GitHub Repository:** `(To be updated after pushing remote)`
*   **Vercel Live Deployment:** `(To be configured upon Vercel link)`

---

## 🚀 Tech Stack Used

- **Framework**: [Next.js 13+ (App Router)](https://nextjs.org/) — Utilizing standard Server & Client Component separation, routing, optimization features, and viewport boundaries.
- **Language**: [TypeScript](https://www.typescriptlang.org/) — For type-safety and robust code patterns.
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) — For rapid styling, fully custom scrollbars, and dark mode variant classes.
- **Animations**: [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/) — Supporting smooth scroll-triggered slide and fade animations on sections and cards.
- **Icons**: [Lucide React](https://lucide.dev/) — High-quality, clean, and customizable icon set.

---

## ✨ Features & Design Highlights

1.  **Premium Aesthetics**: Curated dark & light modes. The design features soft gradients, clean cards, elegant spacing, subtle border glows (`glow-indigo`/`glow-purple`), and glassmorphism elements.
2.  **Dark Mode Toggle**: A responsive theme toggler in the header with persistent preferences stored in `localStorage`. Uses a head-injection theme-detector script to eliminate hydration flash layout shift.
3.  **Responsive Hero**: A visually engaging header featuring custom 3D generated abstract artwork, bold copy, responsive grid layout, and interactive float badges.
4.  **Specialized Services Card Grid**: Dynamic service grid highlighting UI/UX Design, Web Development, Branding, and Digital Marketing with hover scales and staggered entrance animations.
5.  **Interactive Portfolio Filters**: A premium showcase grid supporting real-time filter categories (All, UI/UX, Development, Branding) and smooth overlay hover states.
6.  **Validating Contact Form**: Clean form controls with client-side regex validations, interactive inline feedback warnings, simulated async API loading transitions, and an elegant visual success state.
7.  **Performance Optimization**: Utilizes `next/image` for responsive, optimized, and layout-shift-free rendering of portfolio and background images.

---

## 🛠️ Setup & Running Locally

Ensure you have [Node.js (v18+)](https://nodejs.org/) installed on your machine.

1.  **Clone the Repository**:
    ```bash
    git clone <repository-url>
    cd design-agency-homepage
    ```

2.  **Install Dependencies**:
    ```bash
    npm install
    ```

3.  **Run Development Server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser to view the homepage.

4.  **Build Production Bundle**:
    ```bash
    npm run build
    ```

---

## 📝 Assumptions & Adjustments
- **Offline Builds (No Google Fonts)**: Google fonts import (`Geist`, `Geist Mono`) was swapped with a custom system font fallback stack (`system-ui`, `-apple-system`, etc.) in the theme settings. This ensures the Next.js production build does not require active internet or hit font fetching blockages.
- **Inline Brand SVGs**: Since brand icons (GitHub, LinkedIn, Twitter, Instagram) are deprecated in the core `lucide-react` module, we utilized hand-styled, inline SVGs for social media links in the Footer component to ensure complete compile safety and pixel-perfect brand assets.
