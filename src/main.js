import "./assets/main.css";

// import { registerSW } from 'virtual:pwa-register';

// registerSW({
//   immediate: true,
//   onRegisteredSW(swUrl, registration) {
//     if (registration) {
//       setInterval(() => {
//         registration.update();
//       }, 60 * 1000); // verifica a cada 60 segundos
//     }
//   },
// });

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router/index.js";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
