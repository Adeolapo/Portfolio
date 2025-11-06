/*import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
//import path from "path"

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
 /* resolve: {
    alias:{
      "@": path.resolve(__dirname, "./src"),
    },
  },
})*/

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': '/src', // ✅ Simple alias for imports like "@/components/..."
    },
  },
})
