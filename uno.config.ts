import presetWind from "@unocss/preset-wind";
import {
  defineConfig,
  presetAttributify,
  presetUno,
  transformerDirectives,
} from "unocss";

const unocssConfig = defineConfig({
  include: [/\.variants\.[jt]s$/u, /\.[jt]sx?$/u, /\.vue$/u],
  presets: [presetUno(), presetAttributify(), presetWind()],
  theme: {
    breakpoints: {
      pc: "448px",
      small: "390px",
    },
    colors: {
      wavveGray: "#A5A5A5",
      wavveDarkGray: "#2F2F2F",
      badgeGray: "#F2F2F2",
      wavveLightGray: "#EBEFF1",
      wavveBlue: "#0050FF",
      wavveLightBlue: "#3887FF",
      wavveBlue_100: "#0050FF22",
      wavveBlue_200: "#0050FF44",
      wavveBlue_300: "#0050FF66",
      wavveBlue_400: "#0050FF88",
      wavveBlue_500: "#0050FFAA",
      wavveBlue_600: "#0050FFCC",
      wavveBlue_700: "#0050FFEE",
      wavveBlue_800: "#0050FFFF",
    },
  },
  transformers: [transformerDirectives()],
});

export default unocssConfig;
