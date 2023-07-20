import getRandomInt from "@/helpers/getRandomInt";

export const incrementRandomInt = async ({ commit }) => {
  commit("setLoading", true);
  const randomInt = await getRandomInt();
  commit("incrementBy", randomInt);
  commit("setLoading", false);
  //como las actions no cambian directamente el state... se utiliza un commit para enviarlo a mutations y asi cambiar el state a traves del mutation
};
