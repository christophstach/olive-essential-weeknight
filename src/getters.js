const getters = {
  login (state) {
    return (state.jwtToken !== null)
  },
  appBusy(state) {
    return state.promises.length !== 0;
  }
};

export default getters;
