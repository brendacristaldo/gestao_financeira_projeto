import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite' //importanto o Tailwind 4 para o Vite

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), //conectando o Tailwind 4 ao Vite
  ],
})