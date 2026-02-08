/// <reference types="vite/client" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), dts({
    insertTypesEntry: true
  })],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "FirstUI",
      formats: ["es", "cjs"],
      fileName: format => format === "es" ? "index.js" : "index.cjs"
    },
    rollupOptions: {
      external: ["react", "react-dom"]
    }
  }
});