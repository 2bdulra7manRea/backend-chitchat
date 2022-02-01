import { Field, ObjectType ,ID} from "@nestjs/graphql";
import { Column, Entity, ObjectID, ObjectIdColumn, PrimaryGeneratedColumn } from "typeorm";


@Entity()
@ObjectType()
export class Message{


    
@ObjectIdColumn()
@Field()
id?:string

@Column()
@Field()
content:string


// @Column({nullable:true , default:new Date()})
// @Field({nullable:true})
// date?:string



// @Column()
// @Field({nullable:true})
// senderId?:string


// @Column()
// @Field({nullable:true})
// chatId?:string

}