import presetWind from "@unocss/preset-wind";
import { defineConfig, presetAttributify, presetUno } from "unocss";

const unocssConfig = defineConfig({
  include: [/\.variants\.[jt]s$/u, /\.[jt]sx?$/u, /\.vue$/u],
  presets: [presetUno(), presetAttributify(), presetWind()],
  theme: {
    breakpoints: {
      pc: "448px",
    },
    colors: {
      wavveGray: "#A5A5A5",
      badgeGray: "#D2D2D2",
      wavveBlue: "#204FF5",
      wavveLightBlue: "#3887FF",
      wavveBlue_100: "#204FF522",
      wavveBlue_200: "#204FF544",
      wavveBlue_300: "#204FF566",
      wavveBlue_400: "#204FF588",
      wavveBlue_500: "#204FF5AA",
      wavveBlue_600: "#204FF5CC",
      wavveBlue_700: "#204FF5EE",
      wavveBlue_800: "#204FF5FF",
    },
  },
});

export default unocssConfig;
