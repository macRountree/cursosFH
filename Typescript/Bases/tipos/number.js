"use strict";
(() => {
    let avengers = 10;
    console.log(avengers);
    const villians = 20.2545;
    if (avengers < villians) {
        console.log("Estamos en problemas");
    }
    else {
        console.log("Nos salvamos");
    }
    avengers = Number("55Q");
    console.log({ avengers });
    console.log(villians);
})();
//# sourceMappingURL=number.js.map