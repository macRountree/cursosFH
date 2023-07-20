const getRandomInt = () => {
  return new Promise((resolve) => {
    const rrdInt = Math.floor(1 + Math.random() * 20);

    setTimeout(() => {
      resolve(rrdInt);
    }, 2000);
  });
};

export default getRandomInt;
