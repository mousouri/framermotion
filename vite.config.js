import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages serves this project under /framermotion/, so only that build
  // needs the subpath base — Vercel (and local dev) serve from the domain
  // root, where the default base of '/' is correct.
  base: process.env.GITHUB_PAGES ? '/framermotion/' : '/',
  plugins: [react(), tailwindcss()],
})
