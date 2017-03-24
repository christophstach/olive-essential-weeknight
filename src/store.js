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
      alerts: [
        {
          text: 'test',
          type: 'alert-warning'
        }
      ]
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
    addAlert(state, alert) {
      state.alerts = [alert, ...state.alerts];
    },
    removePromise(state, promise) {
      state.promises = state.promises.filter((p) => p !== promise);
    },
    removeAlert(state, alert) {
      state.alerts = state.alerts.filter((a) => a !== alert);
    },
    addCredentials(state, credentials) {
      state.credentials = [...state.credentials, credentials];
    },
    clearPromises(state) {
      state.promises = [];
    },
    clearAlerts(state) {
      state.alerts = [];
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
    showAlert({commit}, {text, type}) {
      let theAlert = {text, type, show: true};

      setTimeout(() => {
        theAlert.show = false;

        setTimeout(() => {
          commit('removeAlert', theAlert);
        }, 1000);
      }, 10000);

      commit('addAlert', theAlert);
    },
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
store.commit('clearAlerts');

export default store;
