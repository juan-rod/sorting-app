import Vue from "vue";

const state = {
  user: {},
  isAuth: false
};

const getters = {
  user: state => state.user,
  isAuth: state => state.isAuth
};

const actions = {
  loginUser({ commit, rootState }) {}
};

const mutations = {
  SET_USER(state, response) {
    state.user = response;
  }
};
export default {
  state,
  getters,
  actions,
  mutations
};
