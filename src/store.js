import Vue from 'vue';
import Vuex from 'vuex';
import createPersist from 'vuex-localstorage';
import mutations from './mutations';
import getters from './getters';
import actions from './actions';


Vue.use(Vuex);

const store = new Vuex.Store({
  plugins: [createPersist({
    namespace: 'olive-essential-weeknight',
    initialState: {
      jwtToken: null,
      credentials: [],
      appBusy: false,
      promises: [],
      alerts: []
    },
    expires: 7 * 24 * 60 * 60 * 1e3
  })],
  mutations,
  getters,
  actions
});

store.commit('clearPromises');
store.commit('clearAlerts');

export default store;
