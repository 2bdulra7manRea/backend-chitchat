import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ChatInputsType, OutDelete } from 'src/Dio/chat.input';
import { Chat } from 'src/models/chat.entity';
import { ChatService } from './chat.service';

@Resolver(of=>Chat)
export class ChatResolver {

    constructor(private readonly chatService:ChatService){}


@Query(returns=>Chat)
getChat(@Args("id") id:string){
    return this.chatService.findById(id)
}


@Query(()=>[Chat])    
chats():Promise<Chat[]>{
    return this.chatService.findAll()
}


@Mutation(returns=>Chat)
createChat(@Args("chatInput") chatInput:ChatInputsType) : Promise<Chat> {
    return this.chatService.create(chatInput)
}

@Mutation(returns=>Chat)
updateChat(@Args("id",{type:()=>String}) id:string ,@Args("chatInputs") chatInputs:ChatInputsType){
return this.chatService.update(id,chatInputs)

}


@Mutation(returns=> OutDelete )
deleteChat(@Args("id") id :string){
    return this.chatService.delete(id)
}

    
}
