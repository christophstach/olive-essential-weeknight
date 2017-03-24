import Vue from 'vue';
import Vuex from 'vuex';
import createPersist from 'vuex-localstorage';

Vue.use(Vuex);

const store = new Vuex.Store({
  plugins: [createPersist({
    namespace: 'olive-essential-weeknight',
    initialState: {
      jwtToken: null,
      credentials: [],
      appBusy: false,
      promises: [],
      alert: {}
    },
    expires: 7 * 24 * 60 * 60 * 1e3
  })],
  mutations: {
    setToken(state, jwtToken) {
      try {
        let payload = JSON.parse(atob(jwtToken.split('.')[1]));
        let acceptedIssuers = ['christoph-stach.de'];

        if (acceptedIssuers.includes(payload.iss)) {
          state.jwtToken = {
            token: jwtToken,
            payload
          };
        } else {
          state.jwtToken = null;
        }
      } catch (e) {
        state.jwtToken = null;
      }
    },
    addPromise(state, promise) {
      state.promises = [...state.promises, promise];
    },
    removePromise(state, promise) {
      state.promises = state.promises.filter((p) => p !== promise);
    },
    addCredentials(state, credentials) {
      state.credentials = [...state.credentials, credentials];
    },
    clearPromises(state) {
      state.promises = [];
    }
  },
  getters: {
    login (state) {
      return (state.jwtToken !== null)
    },
    appBusy(state) {
      return state.promises.length !== 0;
    }
  },
  actions: {
    async doLogin ({commit, state}, {username, password}) {
      let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          let fakeToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiaXNzIjoiY2hyaXN0b3BoLXN0YWNoLmRlIiwibmFtZSI6IkFkcmlhbiBTYWl6IEZlcnJpIn0._SV0X4IbbrNxi9hCAA1bthBPjxvlcsxZEcjDqCxzZnM';

          commit('setToken', fakeToken);
          resolve();
        }, 5000);
      });

      commit('addPromise', promise);

      promise.then(
        () => commit('removePromise', promise),
        () => commit('removePromise', promise)
      );

      return promise;
    },
    async addCredentials({commit, state}, credentials) {
      let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('addCredentials', credentials);
          resolve();
        }, 5000);
      });

      commit('addPromise', promise);

      promise.then(
        () => commit('removePromise', promise),
        () => commit('removePromise', promise)
      );

      return promise;
    },
    doLogout({commit, state}) {
      commit('setToken', null);
    }
  }
});

store.commit('clearPromises');

export default store;
