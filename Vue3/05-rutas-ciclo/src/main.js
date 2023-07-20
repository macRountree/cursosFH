import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";

//IMportamos toda la configuracion del router.js aqui
createApp(App).use(router).mount("#app");
