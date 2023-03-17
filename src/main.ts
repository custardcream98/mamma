import { VueQueryPlugin } from "@tanstack/vue-query";
import "@unocss/reset/tailwind.css";
import { createPinia } from "pinia";
import "uno.css";
import { createApp } from "vue";

import App from "./App.vue";

import router from "./router";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.use(VueQueryPlugin);

app.mount("#app");
