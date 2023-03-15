import presetWind from "@unocss/preset-wind";
import type { VitePluginConfig } from "@unocss/vite";
import { presetAttributify, presetUno } from "unocss";

const unocssConfig: VitePluginConfig = {
  include: [/\.variants\.[jt]s$/u, /\.[jt]sx?$/u, /\.vue$/u],
  presets: [presetUno(), presetAttributify(), presetWind()],
  theme: {
    breakpoints: {
      pc: "448px",
    },
  },
};

export default unocssConfig;
