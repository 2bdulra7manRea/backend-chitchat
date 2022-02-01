import { Column, Entity, ObjectID, ObjectIdColumn, PrimaryGeneratedColumn } from "typeorm";


@Entity("Device")
export class Device{

    @ObjectIdColumn()
    id:ObjectID

    @Column()
    name:string

    @Column()
    type?:string

    @Column()
    shape?:string

    constructor(device?: Partial<Device>) {
        Object.assign(this, device);
      }

}