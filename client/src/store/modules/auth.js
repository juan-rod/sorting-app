import Vue from "vue";
import axios from "axios";

const state = {
  user: {},
  isAuth: false
};

const getters = {
  user: state => state.user,
  isAuth: state => state.isAuth
};

const actions = {
  loginUser({ commit, rootState }) {
    return new Promise((resolve, reject) => {
      axios
        .get(rootState.googleURL)
        .then(response => {
          console.log("response:", response);
          window.location = response.request.responseURL;
          // const status = response.status;
          // const data = response.data.results;
          // const info = response.data.info;
          // if (status === 200) {
          //   const data = {
          //     results: response.data.results,
          //     info: response.data.info
          //   };
          //   commit("SET_GRID_DATA", data);
          //   resolve(status);
          // } else {
          //   commit("SET_ERRORS", j);
          //   reject(j);
          // }
        })
        .catch(error => {
          commit("SET_ERRORS", error);
          console.log("error:", error);
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
          reject(error);
        });
    });
  }
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
