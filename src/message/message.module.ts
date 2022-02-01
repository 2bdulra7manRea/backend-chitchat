import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageResolver } from './message.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from 'src/models/message.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Message])],
  providers: [MessageService, MessageResolver]
})
export class MessageModule {}
