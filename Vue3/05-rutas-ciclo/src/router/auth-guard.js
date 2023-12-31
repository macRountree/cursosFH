const isAuthenticatedGuard = async (to, from, next) => {
  return new Promise(() => {
    const random = Math.random() * 100;

    if (random > 50) {
      console.log("auth");
      next();
    } else {
      console.log("Block", random);
      next({ name: "pokemon-home" });
    }
  });
  console.log(to, from, next);
};

export default isAuthenticatedGuard;
