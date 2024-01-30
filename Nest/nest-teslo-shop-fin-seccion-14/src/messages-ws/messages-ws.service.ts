import { Injectable } from '@nestjs/common';
import { Socket } from 'socket.io';

interface ConnectedClients {
  [id: string]: Socket;
  //   [id del cliente] .. asignado a un socket
}
@Injectable()
export class MessagesWsService {
  //*Creamos un lugar para almacenar toda la info del usuario

  private connectedClients: ConnectedClients = {};

  registerClient(client: Socket) {
    this.connectedClients[client.id] = client;
  }
  removeClient(clientId: string) {
    delete this.connectedClients[clientId];
  }
  getConnectedClients(): string[] {
    return Object.keys(this.connectedClients);
  }
}
