import {Manager, Socket} from 'socket.io-client'; //* Lo importamos (Manager) para poder conectarnos despues ponemos el url
export const connecToServer = (token: string) => {
  const manager = new Manager('http://localhost:3000/socket.io/socket.io.js'),{
    extraHeaders:  {
      hola:'mundo',
      authentication: token
    }
  }

  const socket = manager.socket('/'); //*Por defecto se conecta al root

  addListener(socket);

  //   console.log({socket.});
  //   http://localhost:3000/socket.io/socket.io.js

  // http://localhost:3000/socket.io/socket.io.js
  /**!
   * *Necesitamos instalar un yarn para conectarnos a nuestro cliente
   * yarn add socket.io-client
   * !El websocket del puerto 3000 debe hacer match con la instalacion del socket.io-client
   */
};

const addListener = (socket: Socket) => {
  const serverStatus =
    document.querySelector<HTMLSpanElement>('#server-status');
  const clientUl = document.querySelector<HTMLUListElement>('#clients-ul');

  const messageForm = document.querySelector<HTMLFormElement>('#message-form');
  const messageInput =
    document.querySelector<HTMLInputElement>('#message-input');
  const messageUL = document.querySelector<HTMLInputElement>('#messages-ul');
  // *Cuando nos conectamos queremos mostrar los usuarios conectados

  socket.on('connect', () => {
    serverStatus.innerHTML = 'connected';
  });
  socket.on('disconnect', () => {
    serverStatus.innerHTML = 'disconnected';
  });

  socket.on('clients-updated', (clients: string[]) => {
    // console.log(clients);
    let clientsHTML = '';
    clients.forEach(clientID => {
      clientsHTML += `<li> ${clientID} </li> `;
    });
    clientUl.innerHTML = clientsHTML;
  });

  messageForm.addEventListener('submit', e => {
    e.preventDefault();
    if (messageInput.value.trim().length <= 0) return;

    socket.emit('message-from-client', {id: 'YO', message: messageInput.value});

    messageInput.value = ''; // console.log({id: 'YO', message: messageInput.value});
  });
  // *Queremos escchar la info del server ..y la info que recibimos sera el payload como arg
  socket.on(
    'message-from-server',
    (payload: {fullName: string; message: string}) => {
      const newMessage = ` 
      <li>
        <strong> ${payload.fullName} </strong>
        <span> ${payload.message} </span>
      </li>
      
      `;

      const messageLi = document.createElement('LI');
      messageLi.innerHTML = newMessage;
      messageUL.appendChild(messageLi);
    }
  );
};
