import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/", // Ensure correct base path
  build: {
    outDir: "dist", // Ensures correct output directory
  },
  server: {
    port: 3000, // Optional: Set development server port
    open: true, // Optional: Opens browser on startup
  },
  resolve: {
    alias: {
      "@": "/src", // Optional: Use @ as an alias for /src
    },
  },
});
