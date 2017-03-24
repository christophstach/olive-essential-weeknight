const mutations = {
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
};

export default mutations;
