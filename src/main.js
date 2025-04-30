import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const app = createApp(App);
app.use(router);
app.mount("#app");
