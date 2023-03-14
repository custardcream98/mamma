import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";
import unocss from "unocss/vite";
import { defineConfig } from "vite";
import unocssConfig from "./unocss.config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), unocss(unocssConfig)],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
