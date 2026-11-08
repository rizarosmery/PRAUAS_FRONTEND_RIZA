import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Untuk GitHub Pages project site, set `base` ke '/<nama-repo>/'
  // base: '/tripzap-website/',
})
