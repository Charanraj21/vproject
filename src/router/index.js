import Vue from "vue";
import VueRouter from "vue-router";

import LoginComponent from "../components/Login.vue";
import ADashboardComponent from "../components/ADashboard.vue";
import UDashboardComponent from "../components/UDashboard.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: {
      name: "login",
    },
  },
  {
    path: "/login",
    name: "login",
    component: LoginComponent,
  },
  {
    path: "/udashboard",
    name: "udashboard",
    component: UDashboardComponent,
  },
  {
    path: "/adashboard",
    name: "adashboard",
    component: ADashboardComponent,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
