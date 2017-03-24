const actions = {
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
};

export default actions;
