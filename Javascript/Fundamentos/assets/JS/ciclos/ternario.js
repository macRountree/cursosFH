const dia = 1;

const horaActual = 10;

let horaApertura;
let mensaje; //abierto , cerrado, hoy abrimos

if (dia === 0 || dia === 6) {
  console.log("Fin de Semana");
  horaApertura = 9;
} else {
  console.log("Dia semana");
  horaApertura = 11;
}

if (horaActual >= horaApertura) {
  mensaje = "Esta abierto";
} else {
  mensaje = `Esta cerrado, hoy abrimos alas ${horaApertura} `;
}

mensaje =
  horaActual >= horaApertura
    ? "Esta abierto"
    : `Esta cerrado, abrimos alas ${horaApertura}`;

console.log({ horaApertura, mensaje });
