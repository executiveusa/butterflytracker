import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 750,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) {
            return;
          }

          if (id.includes('/@react-three/fiber/')) {
            return 'react-three-fiber';
          }

          if (id.includes('/@react-three/drei/') || id.includes('/three-stdlib/')) {
            return 'three-extras';
          }

          if (id.includes('/three/')) {
            return 'three';
          }

          if (id.includes('/@radix-ui/') || id.includes('/lucide-react/') || id.includes('/cmdk/')) {
            return 'ui';
          }

          if (id.includes('/react/') || id.includes('/react-dom/') || id.includes('/react-router-dom/')) {
            return 'react';
          }

          return 'vendor';
        },
      },
    },
  },
}));
