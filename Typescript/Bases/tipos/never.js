"use strict";
(() => {
    const error = (msg) => {
        if (false) {
            throw new Error(msg);
        }
        return 1;
    };
    error("Aux");
    console.log("Hola mundo");
})();
//# sourceMappingURL=never.js.map