import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {},
});

// const store = new Vuex.Store({
//   state: {
//     users: [],
//   },
//   mutations: {
//     SET_USERS: (state, users) => {
//       state.users = users;
//     },
//   },
//   actions: {},
//   modules: {},
// });

// const setUserToStore = () => {
//   axios.get("data.json").then((response) => {
//     store.commit("SET_USERS", response.data.users);
//   });
// };

// setUserToStore();
