/*
(() =>{})() FUNCION ANOMINA autoinvocada

*/

(() => {
  //use stric hace que js evalue de manera estricta mis variables
  /*si personajes no esta declarado (const let var)  use stric lo notificara como que no está definido */
  ("use stric");
  //iniciamos un deck vacio
  let deck = [];
  const tipos = ["C", "D", "H", "S"],
    imperiales = ["J", "Q", "K", "A"];

  // let puntosJugador = 0,
  //   puntosCpu = 0;
  let puntosJugadores = [0, 0];
  //REFERENCIAS DOM
  const btnPedir = document.querySelector("#btn-pedir"),
    btnStop = document.querySelector("#btn-stop"),
    btnNewgame = document.querySelector("#btn-ng");
  const divCartasP1 = document.querySelector("#jugador-cartas"),
    divCartasCpu = document.querySelector("#pc-cartas"),
    puntos = document.querySelectorAll("small");

  //iniciaamos el juego
  const iniciarJuego = (numJugadores = 2) => {
    deck = crearDeck();

    for (let i = 0; i < numJugadores; i++) {
      puntosJugadores.push(0);
    }

    console.log({ puntosJugadores });
  };

  //funcion que crea una nueva barajja
  const crearDeck = () => {
    //Reiniciamos el deck
    deck = [];

    //las cartas empiezan en 2 siempre y la enumeración termina en 10
    //despues sigue Jack, Queen , King, As
    for (let carta = 2; carta <= 10; carta++) {
      for (let tipo of tipos) {
        deck.push(carta + tipo);
      }
    }

    for (let tipo of tipos) {
      for (let imperial of imperiales) {
        deck.push(imperial + tipo);
      }
    }

    return _.shuffle(deck);
  };

  crearDeck();

  //Funcion que me permite tomar una carta

  const pedirCarta = () => {
    //si ya no hay cartas,
    if (deck.length === 0) {
      throw "No hay cartas en Deck";
    }

    return deck.pop();
  };

  //´prueba de cartas

  pedirCarta();

  const valorCarta = (carta) => {
    //extraer primera letra

    //separamos strings con substring( posicioon 0 , final del arreglo carta )
    const valor = carta.substring(0, carta.length - 1);
    let puntos = 0;

    //=== ESTE IF lo convertimos a ternario
    // if (isNaN(valor)) {
    //   puntos = (valor === "A") ? 11 : 10;
    // } else {
    //   puntos = valor * 1;
    // }
    // console.log(puntos);

    return isNaN(valor) ? (puntos = valor === "A" ? 11 : 10) : valor * 1;
  };

  valorCarta(pedirCarta());

  //Acumular puntos

  const acumularPuntoas = () => {};

  //TUrno CPU

  const turnoCpu = (ptsMinimos) => {
    do {
      const carta = pedirCarta();

      puntosCpu = puntosCpu + valorCarta(carta);
      puntos[1].innerText = puntosCpu;

      const imgCarta = document.createElement("img");
      imgCarta.src = `../assets/cartas/${carta}.png`;
      imgCarta.classList.add("carta");
      divCartasCpu.append(imgCarta);
      //Si los puntos superan 21 se acaba el juego
      if (ptsMinimos > 21) {
        break;
      }
    } while (puntosCpu < ptsMinimos && ptsMinimos <= 21);

    setTimeout(() => {
      if (puntosCpu === ptsMinimos) {
        alert("NADIE GANA");
      } else if (ptsMinimos > 21) {
        alert("CPU GANA");
      } else if (puntosCpu > 21) {
        alert("Jugador GANA");
      } else {
        alert("CPU GANA");
      }
    }, 1000);
  };

  //Eventos

  btnPedir.addEventListener("click", () => {
    //creamos una variable y le asignamos la funcion pedircarta
    const carta = pedirCarta();

    puntosJugador = puntosJugador + valorCarta(carta);
    puntos[0].innerText = puntosJugador;

    const imgCarta = document.createElement("img");
    imgCarta.src = `../assets/cartas/${carta}.png`;
    imgCarta.classList.add("carta");
    divCartasP1.append(imgCarta);

    if (puntosJugador > 21) {
      // alert("Perdiste");
      disableBtn();
      turnoCpu(puntosJugador);
    } else if (puntosJugador === 21) {
      // alert("21 ..GANASTE");
      disableBtn();
      turnoCpu(puntosJugador);
    }
  });

  btnStop.addEventListener("click", () => {
    disableBtn();
    turnoCpu(puntosJugador);
  });

  btnNewgame.addEventListener("click", () => {
    console.clear();
    iniciarJuego();

    puntos[0].innerText = 0;
    puntos[1].innerText = 0;
    puntosCpu = 0;
    puntosJugador = 0;

    divCartasCpu.innerHTML = "";
    divCartasP1.innerHTML = "";
    btnPedir.disabled = false;
    btnStop.disabled = false;
  });

  //Funcion disablebtn

  const disableBtn = () => {
    btnPedir.disabled = true;
    btnStop.disabled = true;
  };
})(); //patron modulo
