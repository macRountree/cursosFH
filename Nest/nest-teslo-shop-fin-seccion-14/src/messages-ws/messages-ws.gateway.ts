import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets'; //*Si da error instalar la paqueteria
import { MessagesWsService } from './messages-ws.service';
import { Server, Socket } from 'socket.io';
import { NewMessageDto } from './dto/new-message.dto';

@WebSocketGateway({ cors: true }) //*Es un controlador pero con la dif que el  decorador es WebSocketGatway
export class MessagesWsGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() wss: Server;
  constructor(private readonly messagesWsService: MessagesWsService) {}
  handleConnection(client: Socket) {
    //*el clientee es tipo Socket(tenemos que instalar socket.io en yarn/npm)
    // console.log('Client Connected', client.id);
    this.messagesWsService.registerClient(client); //*Importamos los metodos del service para que nos mande el id del cliente cuando se conecte

    this.wss.emit(
      'clients-updated',
      this.messagesWsService.getConnectedClients(),
    );
  }
  handleDisconnect(client: any) {
    // console.log('Client Disconnected', client.id);
    this.messagesWsService.removeClient(client.id); //* Mandamos el metodo creado en service para que borre el id del cliente cuando se desconecte
    this.wss.emit(
      'clients-updated',
      this.messagesWsService.getConnectedClients(),
    );
  }

  // * Mest ofrece otra opcion para escuchar evento llamado SuscribeMessage .. donde espera el nombre del evento que pusimos en el cliente

  @SubscribeMessage('message-from-client')
  //*el parametro payload podemos crear otro DTO... donde especifiquemos el tipo de mensaje (string) con sus respectivos Decoradores
  handleMessageFromClient(client: Socket, payload: NewMessageDto) {
    console.log(client.id, payload);

    // *Message from server
    /**! Esto solamente emite a 1 cliente */
    // client.emit('message-from-server', {
    //   fullName: ' Mac',
    //   message: payload.message || 'No message',
    // });

    // *Estp emite a todos los clientes menos al emisor
    // client.broadcast.emit('message-from-server', {
    //   fullName: ' Mac',
    //   message: payload.message || 'No message',
    // });
    this.wss.to('clientID');
    this.wss.emit('message-from-server', {
      fullName: ' Mac',
      message: payload.message || 'No message',
    });
  }
}
