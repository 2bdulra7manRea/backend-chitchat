import { Field, ObjectType } from "@nestjs/graphql";
import { Column, Entity, ObjectID, ObjectIdColumn, OneToMany, OneToOne } from "typeorm";
import { Message } from "./message.entity";
import { Room } from "./room.entity";

@Entity()
@ObjectType()
export class Chat{

@ObjectIdColumn()
@Field()
id?:string


@Column()
@Field()
name:string

// @Field({nullable:true})
// @OneToMany(()=>Message,message=>message.chatId)
// messages:Message[]

// @Field({nullable:true})
// @OneToOne(()=>Room,room=>room.chatId,{onDelete:'CASCADE'})
// room:Room

}