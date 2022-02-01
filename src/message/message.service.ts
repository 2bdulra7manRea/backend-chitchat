import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from 'src/models/message.entity';
import { BaseService } from 'src/services/baseService';
import { Repository } from 'typeorm';

@Injectable()
export class MessageService extends BaseService<Message> {
constructor(@InjectRepository(Message) private readonly messageRepository:Repository<Message>){
    super(messageRepository)
}
}
