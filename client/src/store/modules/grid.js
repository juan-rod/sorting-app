import Vue from "vue";
import axios from "axios";

const state = {
  gridData: {},
  errors: []
};

const getters = {
  gridData: state => state.gridData,
  errors: state => state.errors
};

const actions = {
  getGridData({ commit, rootState }) {
    return new Promise((resolve, reject) => {
      axios
        .get(rootState.randomUserURL)
        .then(response => {
          const status = response.status;
          const data = response.data.results;
          const info = response.data.info;
          if (status === 200) {
            const data = {
              results: response.data.results,
              info: response.data.info
            };
            commit("SET_GRID_DATA", data);
            resolve(status);
          } else {
            commit("SET_ERRORS", j);
            reject(j);
          }
        })
        .catch(error => {
          commit("SET_ERRORS", error);
          reject(error);
        });
    });
  }
};

const mutations = {
  SET_GRID_DATA(state, response) {
    state.gridData = response;
  },
  SET_ERRORS(state, response) {
    state.errors = response;
  }
};
export default {
  state,
  getters,
  actions,
  mutations
};
