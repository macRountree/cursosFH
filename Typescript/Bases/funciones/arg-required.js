"use strict";
(() => {
    //debemos definir los argumentos
    const fullName = (firstNAme, lastName) => {
        //NO OCUPAMOS VALiDAD de esta manera
        /* if(!firistNAME){
            th
        } */
        return `${firstNAme} ${lastName} `;
    };
    let noName;
    //Debemos poner obligatoriamente la cantidad de argumentos declarados en la funcion
    const name = fullName("Tony", "Stark");
    console.log({ name });
})();
