import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReportModule } from './report/report.module';
import { PlanModule } from './plan/plan.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMconfig } from './config/typeOrmConfig';
import { DeviceModule } from './device/device.module';
import { Device } from './models/device.entity';
import { ChatModule } from './chat/chat.module';
import { MessageModule } from './message/message.module';
import { RoomModule } from './room/room.module';
import { Chat } from './models/chat.entity';
import { Room } from './models/room.entity';
import { Message } from './models/message.entity';
import { AppGateway } from './app.gateway';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMconfig),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    ChatModule,
    MessageModule,
    RoomModule,
  ],
  controllers: [AppController],
  providers: [AppService, AppGateway],
  exports:[TypeOrmModule]
})
export class AppModule {}
