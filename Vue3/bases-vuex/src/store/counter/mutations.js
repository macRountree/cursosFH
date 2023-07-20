export const increment = (state) => {
  state.count++;
  state.lastMutation = "increment";
};

//si queremos realizar una operacion de sumar 5 le asignamos un parametro val
// y se l asigams al count para que reciba el argumento en el commit
export const incrementBy = (state, val) => {
  state.count += val;
  state.lastMutation = "incrementBy" + val;
  state.lastRandomInt = val;
};

export const setLoading = (state, val) => {
  state.isLoading = val;
  state.lastMutation = " setLoading " + val;
};
