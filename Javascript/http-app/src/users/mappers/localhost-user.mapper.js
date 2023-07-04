//mapper para USer

import { User } from "../models/user";

/**
 *
 * @param {Like<User>} localHostUser
 * @returns {User}
 */

export const localHostUserToModel = (localHostUser) => {
  //desectructuramos las propiedades del usuario
  const { avatar, balance, first_name, gender, id, isActive, last_name } =
    localHostUser;

  //aqui retornamos la nueva instancia con la nueva declaracion de las excepciones
  return new User({
    avatar,
    balance,
    firstName: first_name,
    gender,
    id,
    isActive,
    lastName: last_name,
  });
};
