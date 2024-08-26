import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/darkest-souls-portfolio/', // prevent from getting 404 when acessing assets
  server: {
    port: 3000, // Change this to your desired port number
  },
})
