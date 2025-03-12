import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";
const app = createApp(App);
const Pinia = createPinia();

app.use(Pinia);
app.mount("#app");
