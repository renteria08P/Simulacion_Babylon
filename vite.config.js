import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  build: {
    target: "es2015",
    rollupOptions: {
      output: {
        format: "iife",
      },
    },
  },
  optimizeDeps: {
    exclude: ["@babylonjs/core"],
  },
});
