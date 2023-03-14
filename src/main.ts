import { VueQueryPlugin } from "@tanstack/vue-query";
import "@unocss/reset/eric-meyer.css";
import "uno.css";
import { createApp } from "vue";

import App from "./App.vue";

import router from "./router";

const app = createApp(App);

app.use(router);
app.use(VueQueryPlugin);

app.mount("#app");
