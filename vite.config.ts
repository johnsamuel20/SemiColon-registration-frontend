import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/SemiColon-registration-frontend',
  plugins: [react()],
  base: "/SemiColon-registration-frontend/"
})
