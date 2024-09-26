import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import axios from "axios";

const app = createApp(App);

axios.defaults.baseURL = "http://localhost:3000/user";
app.config.globalProperties.$axios = axios;

app.use(router).mount("#app");
