import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Column, Entity, JoinColumn, ObjectID, ObjectIdColumn, OneToOne } from "typeorm";
import { Chat } from "./chat.entity";
import { Joiner } from "./joiner.entity";


@Entity()
@ObjectType()
export class Room{

@ObjectIdColumn()
@Field()
id:string


@Column()
@Field()
title:string


@Column({nullable:true})
@Field({nullable:true})
level?:string


@Column({type:Number})
@Field(type=>Int)
number:number

@Column()
@Field({nullable:true})
language:string


@Column()
@Field({nullable:true})
chatId:string

// @OneToOne(()=>Chat,chat=>chat.id)
// @JoinColumn()
// @Field({nullable:true})
// Chat:Chat


// @Column()
// ownerId:


@Column()
@Field(() => [Joiner],{nullable:true})
joiners?:{name:string ,roomId:string , imageUrl?:string , id?:string} [];

}