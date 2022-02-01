
import {TypeOrmModuleOptions} from "@nestjs/typeorm"
import { Chat } from "src/models/chat.entity"
import { Device } from "src/models/device.entity"
import { Message } from "src/models/message.entity"
import { Room } from "src/models/room.entity"


export const typeORMconfig:TypeOrmModuleOptions={
type:"mongodb",
url:"mongodb://localhost",
port:27017,
database:"YALL",
entities:[Device,Room,Chat,Message],
synchronize:true,
useNewUrlParser: true,
useUnifiedTopology: true,
logging:true
}