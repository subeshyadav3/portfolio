import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: '/portfolio/', // Deploy at root, not in a subfolder
  plugins: [react()],
});
