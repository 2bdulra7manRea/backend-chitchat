import { Module } from '@nestjs/common';
import { RoomService } from './room.service';
import { RoomResolver } from './room.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Room } from 'src/models/room.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Room])],
  providers: [RoomService, RoomResolver],
  exports:[RoomService]
})
export class RoomModule {}
