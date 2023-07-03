import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
// import { asyncDosComponents } from "./src/concepts/07-async-2";
// import { forAwaitComponent } from "./src/concepts/08-forAwait";
// import { asyncAwaitComponents } from "./src/concepts/06-async-await";
// import { enviromentComponents } from "./src/concepts/01-enviroment";
// import { CallbackComponents } from "./src/concepts/02-callback";
// import { promiseComponents } from "./src/concepts/03-promises";
// import { promiseRaceComponents } from "./src/concepts/04-promise-race";
// import { asyncComponents } from "./src/concepts/05-async";
import { functionGenComponents } from "./src/concepts/09-funciones-generadoras";

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
    
    </div>
   
  </div>
`;
// console.log("hola mundo");

const element = document.querySelector(".card");
// CallbackComponents(element);
// promiseComponents(element);
// promiseRaceComponents(element);
// asyncComponents(element);

// asyncAwaitComponents(element);
// asyncDosComponents(element);
// forAwaitComponent(element);
functionGenComponents(element);
