import { Field, ObjectType } from 'type-graphql';
import JSON from 'graphql-type-json';

@ObjectType()
export class CoreStatus {
  @Field(type => JSON)
  app: any;

  @Field(type => JSON)
  system: any;

  @Field()
  time: Date;
}
