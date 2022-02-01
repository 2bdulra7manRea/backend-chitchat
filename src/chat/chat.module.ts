import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatResolver } from './chat.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chat } from 'src/models/chat.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Chat])],
  providers: [ChatService, ChatResolver]
})
export class ChatModule {}
