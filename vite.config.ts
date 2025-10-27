import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
const buildTime = new Date().toISOString();
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
  ],
  define:{
     __BUILD_TIME__: JSON.stringify(buildTime),
  },
  base:'/new-portfolio/',
})
