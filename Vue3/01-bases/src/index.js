// ===============TERNARIOS NULLCHECK==================

let firstName;
let lastName = "rountree";

console.log(`${firstName || "no ifrst "} ${lastName || "no LN"} `);

const isActive = true;

const message = isActive === true ? "Active" : "Inactive";

console.log(message);
