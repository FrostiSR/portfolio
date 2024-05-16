import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { compression } from 'vite-plugin-compression2'

// https://vitejs.dev/config/
export default defineConfig({
  build:{
    cssMinify: true,
    minify: true,
  },
  define: {
    "process.env": process.env,
    ENV_KEY: process.env.ENV_KEY,
  },
  plugins: [react(),  compression()],
})
