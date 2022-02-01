import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { MessageInputType } from 'src/Dio/message.input';
import { Message } from 'src/models/message.entity';
import { MessageService } from './message.service';

@Resolver(of=>Message)
export class MessageResolver {



constructor(private repo:MessageService){}



@Query(returns=>[Message])
messages(){
    return this.repo.findAll()
}



@Mutation(returns=>Message)
createMessage(@Args("messageInput") messageInput:MessageInputType){
    return this.repo.create(messageInput)
}





}
