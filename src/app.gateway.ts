import { Logger } from '@nestjs/common';
import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { RoomService } from './room/room.service';
@WebSocketGateway(80,{ transports: ['websocket']})
export class AppGateway  implements OnGatewayConnection,OnGatewayDisconnect , OnGatewayInit {

private readonly logger :Logger=new Logger("Socket Part")


constructor(private roomService:RoomService){}


@WebSocketServer() server;
  handleDisconnect(client: any) {
    this.logger.log("Socket disconnected")
  }

  afterInit(server: any) { 
    this.logger.log("socket init")
  }


  handleConnection(client: any, ...args: any[]) {
    this.logger.log("client connected")
  }

@SubscribeMessage('ppl-join')
async handlePeopleJoinRoom(client: any, payload: any):Promise<void>{
  console.log(payload)
  this.server.to(payload.roomId).emit('ppl-join',{...payload,status:'joined'})
  await this.roomService.saveRoomJoiners(payload.roomId,payload)
}

@SubscribeMessage('ppl-leave')
async handlePeopleLeaveRoom(client: any, payload: any):Promise<void>{
  console.log(payload)
  this.server.to(payload.roomId).emit('ppl-join',{...payload,status:'left'})
  await this.roomService.peopleLeaveRoom(payload.roomId,payload)
}



@SubscribeMessage('join-room')
handleJoinRoom(client: any, payload: any): string {
 client.join(payload.roomId)
  return "done"
}

  @SubscribeMessage('chat-msg')
  handleMessage(client: any, payload: any): string {
    this.server.to(payload.roomId).emit('chat-msg',payload)
    return "done"
  }
}


