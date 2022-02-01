import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class RoomInputs{

    @Field()
    title:string
    
    @Field(type=>Int)
    number:number
    
    @Field()
    language:string

        @Field({nullable:true})
    level?:string
    
    @Field({nullable:true})
    chatId?:string
}