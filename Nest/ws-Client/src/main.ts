import {connecToServer} from './socket-client';
import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
  <h3>Websocket- Client</h3>


  <input id="jwtToken" placeholder="Json Web Token" />

  <button id="btn-connect"> Conectar</button>
  <br/>
  <span id="server-status" >Offline</span>
  <ul id="clients-ul"> 
   
  </ul>
  <form id="message-form">
    <input placeholder="message" id="message-input" />
  </form>
    <h3>Messages</h3>
    <ul id="messages-ul"></ul>
  
  </div>
`;

/**
 * ! El url que necesitamos para conectarnos es el http://localhost:3000/socket.io/socket.io.js
 */

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);

// connecToServer();

const jwtToken = document.querySelector<HTMLInputElement>('#jwtToken');
const btnConnect = document.querySelector<HTMLButtonElement>('#btn-connect');
btnConnect.addEventListener('click', () => {
  if (jwtToken.value.trim().length <= 0)
    return alert('Ingreses un token valido');
  connecToServer(jwtToken.value.trim());
});
