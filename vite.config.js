import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react()],
    base: env.VITE_PUBLIC_PATH || "/",
    publicDir: "public",
    server: {
      port: 3000,
    },
  };
});