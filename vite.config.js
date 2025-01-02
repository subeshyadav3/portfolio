import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: '/', // Replace 'your-repo-name' with the actual GitHub repository name
  plugins: [react()],
});
