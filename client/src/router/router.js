import Vue from "vue";
import Router from "vue-router";
import { routes } from "./routes";
import Axios from "axios";
import { vuex_mixin } from "../utils/mixins/mixin";

Vue.use(Router);
Vue.mixin(vuex_mixin);
Vue.prototype.$http = Axios;

var router = new Router({
  base: "/",
  mode: "history",
  scrollBehavior: () => ({ y: 0 }),
  routes
});

export { router };
