import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set the base to your repository name so GitHub Pages serves assets correctly.
  // Replace 'AI-Voice-Assistant-Realtime' with your repo name if different.
  base: '/My-Portfolio/',
})
