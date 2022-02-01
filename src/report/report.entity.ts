import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Report {
  @Field()
  id: string;

  @Field()
  name: string

  @Field({nullable:true})
  date?: string;
}
