//esta clase sera el objeto de usuarios que manejaremos en la app

export class User {
  /**
   *
   * @param {like<User>} userDataLike
   */
  constructor({ id, isActive, balance, avatar, firstName, lastName, gender }) {
    this.id = id;
    this.isActive = isActive;
    this.balance = balance;
    this.avatar = avatar;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
  }
}
