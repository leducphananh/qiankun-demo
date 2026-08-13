import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import qiankun from "vite-plugin-qiankun";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    // @ts-expect-error vite-plugin-qiankun has incorrect default export typing in some TS setups
    qiankun("order-app", {
      useDevMode: true,
    }),
  ],

  server: {
    port: 5175,

    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
});
