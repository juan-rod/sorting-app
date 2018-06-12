import Vue from "vue";
import Vuex from "vuex";
import { state } from "./state.js";

import auth from "./modules/auth";
import grid from "./modules/grid";
Vue.use(Vuex);

export default new Vuex.Store({
  state,
  modules: {
    auth,
    grid
  }
});
