import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RoomInputs } from 'src/Dio/room.input';
import { Room } from 'src/models/room.entity';
import { RoomService } from './room.service';

@Resolver(of=>Room)
export class RoomResolver {

constructor(private readonly roomService:RoomService){}


@Query(returns=>[Room])
rooms(){
    return this.roomService.findAll()
}


@Query(returns=>Room)
getRoom(@Args("id") id:string){
   return this.roomService.findById(id)
}



@Mutation(returns=>Room)
createRoom(@Args("roomInput") roomInput:RoomInputs ){
   return this.roomService.create(roomInput)
}



@Mutation(returns=>Room)
updateRoom(@Args("id") id:string ,@Args("roomInput") roomInput:RoomInputs){
    return this.roomService.update(id,roomInput)
}



}
