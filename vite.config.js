import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,  // Specifies the port on which the server runs
    open: true,  // Automatically opens the browser when the server starts
  },
});

