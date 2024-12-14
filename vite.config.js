import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/todo-react/",
  publicDir: "public",
  server: {
    port: 4000,
  },
});
