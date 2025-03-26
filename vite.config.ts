import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import autoprefixer from 'autoprefixer';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  css: {
    postcss: {
      plugins: [autoprefixer()],
    },
  },
});
