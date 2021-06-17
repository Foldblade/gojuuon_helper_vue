import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import globalVariable from "./assets/js/global.js";
import mdui from "mdui";

createApp(App)
  .use(store)
  .use(router)
  .provide("globalVariable", globalVariable)
  .provide("mdui", mdui)
  .mount("#app");
