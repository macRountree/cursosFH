"use strict";
(() => {
    let avengers = 10;
    console.log(avengers); //aparece undefined
    const villians = 20.2545;
    if (avengers < villians) {
        console.log("Estamos en problemas");
    }
    else {
        console.log("Nos salvamos");
    }
    avengers = Number("55Q"); //NaN not a Number... ESCONSIDERADO NUMERo en JS
    console.log({ avengers });
    console.log(villians);
})();
