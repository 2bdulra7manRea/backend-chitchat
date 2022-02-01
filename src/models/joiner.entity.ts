import { Field, ObjectType } from "@nestjs/graphql"

@ObjectType()
export class Joiner{
@Field()
name:string;

@Field({nullable:true})
roomId?:string;

@Field({nullable:true})
imageUrl?:string

@Field({nullable:true})
id?:string
}