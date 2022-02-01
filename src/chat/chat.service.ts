import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Chat } from 'src/models/chat.entity';
import { BaseService } from 'src/services/baseService';
import { MongoRepository, ObjectID, Repository } from 'typeorm';

@Injectable()
export class ChatService extends BaseService<Chat> {

constructor(@InjectRepository(Chat) private readonly chatRepository:Repository<Chat>){
    super(chatRepository)
}

}
