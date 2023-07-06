"use strict";
(() => {
    const fullName = (firstNAme, lastName, 
    //loS argumentos obligatorios no puede ir seguido de los argumentos opcionales (lastName)
    upper = false) => {
        if (upper) {
            return `${firstNAme} ${lastName || "no Last Name"} `.toUpperCase();
        }
        else {
            return `${firstNAme} ${lastName || "no Last Name"} `;
        }
    };
    const name = fullName("Tony", "stark", false);
    console.log({ name });
})();
