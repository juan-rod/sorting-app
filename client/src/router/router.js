import Vue from "vue";
import Router from "vue-router";
import { routes } from "./routes";
import Axios from "axios";

Vue.use(Router);
Vue.prototype.$http = Axios;

var router = new Router({
  base: "/",
  mode: "history",
  scrollBehavior: () => ({ y: 0 }),
  routes
});

export { router };
