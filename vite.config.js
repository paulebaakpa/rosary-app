import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/rosary-app/",   // VERY IMPORTANT
  plugins: [react()],
})