import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  base: "./", // Use relative paths for production builds
  build: {
    rollupOptions: {
      input: path.posix.resolve(__dirname, "index.html"), // Explicitly set entry point for Rollup
    },
  },
  plugins: [react()], // React SWC plugin for Vite
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Alias for src folder
    },
  },
});
