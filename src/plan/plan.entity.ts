import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Plan{

@Field()
name:string

@Field({nullable:true})
measures?:string

@Field()
time:string

@Field()
userId:string

}