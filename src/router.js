import { createRouter, createWebHistory } from "vue-router";
import config from "@/config";
import Map from "@/views/Map.vue";

export default new createRouter({
  mode: "history",
  base: config.router.basePath,
  routes: [
    {
      path: "/",
      name: "map",
      component: Map,
    },
  ],
  history: createWebHistory(),
});
