import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Ensure the base contains leading and trailing slash so import.meta.env.BASE_URL
  // resolves correctly both in dev ("/") and production ("/React-practice/").
  base: '/React-practice/',
});
