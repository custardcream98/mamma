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
        target: "https://devport-7dfd1.web.app/wavve/mamma",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
      "/dev": {
        target:
          "http://127.0.0.1:5001/devport-7dfd1/asia-northeast3/apiNortheast/wavve/mamma",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/dev/, ""),
      },
    },
  },
});
