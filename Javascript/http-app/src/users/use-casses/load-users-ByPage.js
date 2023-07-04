import { localHostUserToModel } from "../mappers/localhost-user.mapper";
import { User } from "../models/user";

/**
 *
 * @param {Number} page
 * @returns {Promise <User[]>}
 */
export const loadUsersByPage = async (page = 1) => {
  //importamos el url pero del env
  const url = `${import.meta.env.VITE_BASE_URL}/users?_page=${page}`;

  const res = await fetch(url);
  const data = await res.json();

  //creamos otra constante para mappear el data de nuestro backend.. pero ahora le mandamos
  //el usermodel que creamos para que cambie
  const users = data.map(localHostUserToModel);

  // console.log(users);
  return users;
};
