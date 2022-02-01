import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Room } from 'src/models/room.entity';
import { BaseService } from 'src/services/baseService';
import {Repository } from 'typeorm';

@Injectable()
export class RoomService extends BaseService<Room> {

constructor(@InjectRepository(Room) protected readonly roomRepository:Repository<Room>){
    super(roomRepository)
}


async saveRoomJoiners(id,body){
const room=await this.roomRepository.findOne(id)

if(!room.joiners){
room.joiners=[]
}




const joinedBefore=room.joiners.some((ppl)=>{

    return ppl.id===body.id
})
if(!joinedBefore){
room.joiners.push(body)
return this.roomRepository.save(room)    
}
return ;
}



async peopleLeaveRoom(id,body){
const room=await this.roomRepository.findOne(id)
const index=room.joiners.findIndex((value)=>value.id===body.id)
room.joiners.splice(index,1)
return this.roomRepository.save(room)
}



}
