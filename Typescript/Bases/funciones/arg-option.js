"use strict";
(() => {
    const fullName = (firstNAme, lastName) => {
        return `${firstNAme} ${lastName || "no Last Name"} `;
    };
    let noName;
    const name = fullName("Tony");
    console.log({ name });
})();
//# sourceMappingURL=arg-option.js.map