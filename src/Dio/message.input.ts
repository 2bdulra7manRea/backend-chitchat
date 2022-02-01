import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class MessageInputType{
@Field()
content:string

// @Field({nullable:true})
// date?:string

// @Field({nullable:true})
// senderId?:string


// @Field({nullable:true})
// chatId?:string



}