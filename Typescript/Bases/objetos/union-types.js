"use strict";
(() => {
    let myCustomVaribales = "Mac";
    console.log(typeof myCustomVaribales);
    myCustomVaribales = 20;
    console.log(typeof myCustomVaribales);
    myCustomVaribales = {
        name: "Bruce",
        age: 43,
        powers: [1],
    };
    console.log(typeof myCustomVaribales);
    console.log(myCustomVaribales);
})();
