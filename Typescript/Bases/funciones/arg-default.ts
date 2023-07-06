(() => {
  const fullName = (
    firstNAme: string,
    lastName?: string,
    //loS argumentos obligatorios no puede ir seguido de los argumentos opcionales (lastName)
    upper: boolean = false
  ): string => {
    if (upper) {
      return `${firstNAme} ${lastName || "no Last Name"} `.toUpperCase();
    } else {
      return `${firstNAme} ${lastName || "no Last Name"} `;
    }
  };

  const name = fullName("Tony", "stark", false);

  console.log({ name });
})();
