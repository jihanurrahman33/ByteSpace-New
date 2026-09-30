# ByteSpace — Next-Gen Creative Learning Platform

ByteSpace is a modern, high-performance web platform built with **Next.js 16 (Turbopack)**, **React 19**, **TypeScript**, **Tailwind CSS 4**, and **Zustand**. Designed with pixel-perfect fidelity from Figma designs, it delivers a smooth 60/120 FPS experience across desktop, tablet, and mobile devices.

---

## 🚀 Key Features

- **Pixel-Perfect Figma Fidelity**: Designed directly against Figma source files (Desktop 1440px coordinate system, typography scales, tokens, and precise auto-layouts).
- **Responsive Mobile & Tablet Design**:
  - Horizontal touch side-scroll for homepage category tabs.
  - Responsive full-screen navigation drawer with backdrop blur and body scroll lock.
  - Sized and responsive 404 error page.
- **Global Route Transition Animation**: Custom pulsing ByteSpace logo loader on route changes and streaming boundaries.
- **Instant In-Place Detail Tabs**: Course details (`/courses/[id]`) with instant tab switching (About, Lessons, Reviews) synced to URL query params (`?tab=...`).
- **Interactive Search & Filtering**: Multi-parameter search, category dropdowns, level filters, sorting options, and pagination with loading feedback.
- **Hardware-Accelerated Performance**: GPU-composited layers, optimized image shadows, and efficient IntersectionObserver hooks for butter-smooth scrolling.

---

## 🏗️ Architecture & Design Patterns

The project follows a **Feature-First, Layered Clean Architecture** that enforces separation of concerns:

```
src/
├── app/                  # Next.js App Router (pages, layouts, streaming boundaries)
├── components/           # Presentation Layer
│   ├── features/         # Feature-specific UI components (home, courses, creators, auth)
│   ├── layout/           # Shared layout components (Header, Footer, RouteLoadingIndicator)
│   └── ui/               # Reusable atomic UI components (Logo, AnimatedNumber, LogoLoader)
├── hooks/                # Custom Hooks Layer (React 19 & headless logic)
│   ├── use-courses.ts    # Course domain integration hook
│   ├── use-count-up.ts   # RAF-based cubic ease-out counter
│   ├── use-intersection-observer.ts # Performant one-shot viewport observer
│   ├── use-media-query.ts # React 19 useSyncExternalStore responsive detection
│   └── use-debounce.ts   # Value debouncing utility
├── lib/                  # Utilities & static mock data
│   ├── constants/        # Master catalog data & design specs
│   └── utils/            # Shared utility functions (cn, formatting)
├── services/             # Domain & Data Access Layer
│   ├── course.service.ts # Course retrieval, multi-parameter filtering & sorting
│   └── creator.service.ts# Creator data lookup & course relationships
├── stores/               # Global State Management (Zustand)
│   ├── use-courses-store.ts # Search queries, active tabs, filters, pagination
│   └── use-ui-store.ts   # Navigation drawer, global loader, followed creators
├── styles/               # Design tokens & CSS configurations
│   └── tokens.ts         # Figma style guide tokens (colors, typography)
└── types/                # TypeScript Domain Types & Interfaces
    ├── course.ts         # Course, Lesson, Review, Filter schemas
    ├── creator.ts        # Creator profile schemas
    └── ui.ts             # Navigation & layout schemas
```

---

## ⚡ Performance Optimizations

1. **Eliminated Scroll Jank**:
   - Replaced multi-pass stacked CSS drop shadows with hardware-accelerated GPU textures (`transform: translateZ(0)`).
   - Cleaned up atmospheric smoke glows using diffuse radial gradients with `contain: paint` to prevent expensive compositor re-rasterization.
   - Removed redundant `backdrop-blur` filters from opaque elements.
2. **One-Shot IntersectionObserver**:
   - Animated statistics (`AnimatedNumber`, `AnimatedProgressBar`) disconnect immediately upon entry, eliminating scroll-time overhead.
3. **Optimized React 19 State Sync**:
   - `useMediaQuery` uses `useSyncExternalStore` for tear-free viewport tracking without cascading renders.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **State Management**: [Zustand 5](https://github.com/pmndrs/zustand)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 📦 Getting Started

### Prerequisites

- Node.js 18.18+ (Node 20+ recommended)
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/jihanurrahman33/ByteSpace-New.git
cd ByteSpace-New

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Lint code
npm run lint

# Compile optimized production build
npm run build

# Start production server
npm run start
```

---

## 📄 License

This project is proprietary and confidential.
