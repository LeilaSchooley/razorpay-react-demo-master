import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig(() => {
  return {
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    define: {
      __APP_ENV__: JSON.stringify(process.env.VITE_PYTHON_ENDPOINT),
      __VERCEL_URL__: JSON.stringify(process.env.VITE_VERCEL_URL),
    },
  };
});
