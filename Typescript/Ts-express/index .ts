// console.log("holamundo");
import express from "express";
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.status(201).json({
    ok: true,
    msg: "No hay token en la peticion",
  });
});
app.listen();

app.listen(port, () => {
  console.log(`Example app listening on port at http://localhost:${port}`);
});
