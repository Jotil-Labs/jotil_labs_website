# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Jotil Labs website — a React 19 + Vite 7 single-page application. Currently at starter-template stage (v0.0.0) with no routing, no global state management, and no API layer yet.

## Commands

- **Dev server:** `npm run dev`
- **Production build:** `npm run build`
- **Preview production build:** `npm run preview`
- **Lint:** `npm run lint`

No test framework is configured yet.

## Tech Stack

- **React 19** with JSX (no TypeScript)
- **Vite 7** with `@vitejs/plugin-react` (Babel/oxc for JSX transform + Fast Refresh)
- **Tailwind CSS** via `@tailwindcss/vite` plugin (configured in vite.config.js)
- **ESLint 9** with flat config format (`eslint.config.js`)
- **ES Modules** throughout (`"type": "module"` in package.json)

## Architecture

Entry flow: `index.html` → `src/main.jsx` → `src/App.jsx`

- `src/main.jsx` — React DOM root render with StrictMode
- `src/App.jsx` — Root component
- `src/index.css` — Global styles
- `src/App.css` — App component styles
- `src/assets/` — Static assets (SVGs, images)
- `public/` — Public static files served as-is

## Code Conventions

- Functional components with hooks (no class components)
- PascalCase for component names (enforced by ESLint `no-unused-vars` pattern `^[A-Z_]`)
- CSS imports directly in JSX files
- ESLint targets ES2020 with browser globals
