let $alert = 0;

const actions = {

  /**
   *
   * @param commit
   * @param text
   * @param type
   * @returns {Promise}
   */
  async showAlert({commit}, {text, type}) {
    const $key = $alert++;
    const theAlert = {text, type, $key};
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('removeAlert', theAlert);
        resolve();
      }, 10000);
    });

    commit('addAlert', theAlert);

    return promise;
  },
  /**
   *
   * @param commit
   * @param state
   * @param username
   * @param password
   * @returns {Promise}
   */
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
  /**
   *
   * @param commit
   * @param state
   * @param credentials
   * @returns {Promise}
   */
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
