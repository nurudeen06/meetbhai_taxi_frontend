import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/meetbhai_taxi_frontend",
  plugins: [react()],
})
