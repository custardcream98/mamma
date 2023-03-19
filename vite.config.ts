import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";

import unocss from "unocss/vite";
import unocssConfig from "./uno.config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), unocss(unocssConfig)],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "https://api.sheetson.com/v2/sheets/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
