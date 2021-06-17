import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import globalVariable from "./assets/js/global.js";
import mdui from "mdui";

import ECharts from "vue-echarts";
import { use } from "echarts/core";

// import ECharts modules manually to reduce bundle size
import { CanvasRenderer } from "echarts/renderers";
import { BarChart } from "echarts/charts";
import { GridComponent, TooltipComponent } from "echarts/components";

use([CanvasRenderer, BarChart, GridComponent, TooltipComponent]);

createApp(App)
  .use(store)
  .use(router)
  .provide("globalVariable", globalVariable)
  .provide("mdui", mdui)
  .component("v-chart", ECharts)
  .mount("#app");
