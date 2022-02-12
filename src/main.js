import { createApp, h } from "vue";
//import VueOutsideEvents from "vue-outside-events";
import { Vue3Mq } from "vue3-mq";
import VueFeather from "vue-feather";
import CtkDateTimePicker from "vue-ctk-date-time-picker3";
import "vue-ctk-date-time-picker3/dist/vue-ctk-date-time-picker3.css";

import App from "@/App.vue";
import config from "@/config";
import { log } from "@/logging";
import i18n from "@/i18n";
import router from "@/router";
import store from "@/store";

log("CONFIG", config);

const app = createApp({
  router,
  store,
  render: () => h(App),
});

app.component(VueFeather.name, VueFeather);
//app.component("CtkDateTimePicker", CtkDateTimePicker);

//app.use(VueOutsideEvents);
app.use(Vue3Mq, {
  breakpoints: {
    sm: 0,
    lg: 1300,
  },
});
app.use(i18n);
app.use(router);
app.use(store);

app.config.globalProperties.$config = config;

app.mount("#app");
