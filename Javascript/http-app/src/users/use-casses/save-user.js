import { User } from "../models/user";
/**
 *
 * @param {Like<User>} userLike
 */
export const saveUser = async (userLike) => {
  //creamos una nueva instancia .. mandamos un objeto al constructor de User
  const user = new User(userLike);

  //AQUI FALTA UN MAPPED

  if (user.id) {
    throw new Error("No implementado la actualizacion");
  }

  const updatedUser = await createUser(user);

  return updatedUser;
};

/**
 * @param {Like<User>}
 */
const createUser = async (user) => {
  const url = `${import.meta.env.VITE_BASE_URL}/users`;
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(user),
    header: {
      "Content-Type": "application/json",
    },
  });

  const newUSer = await res.json();

  return newUSer;
};
