import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/darkest-souls-portfolio/", // keep this in mind
  server: {
    port: 3000, // Change this to your desired port number
  },
})
