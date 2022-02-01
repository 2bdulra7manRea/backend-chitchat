import { Field, InputType, ObjectType } from "@nestjs/graphql";



@InputType()
export class ChatInputsType{

@Field()
name:string

    
}

@ObjectType()
export class OutDelete{
    @Field()
    result:boolean
}