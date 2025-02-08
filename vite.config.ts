import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  base: "./", // Ensures relative paths are used for build output
  build: {
    rollupOptions: {
      input: path.resolve(__dirname, "index.html"), // Explicitly set the entry point
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
