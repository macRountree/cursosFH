"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// console.log("holamundo");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3001;
app.get("/", (req, res) => {
    res.status(401).json({
        ok: false,
        msg: "No hay token en la peticion",
    });
});
app.listen();
app.listen(port, () => {
    console.log(`Example app listening on port at http://localhost:${port}`);
});
