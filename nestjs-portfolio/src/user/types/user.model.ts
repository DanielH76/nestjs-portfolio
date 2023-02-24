import { Field, Float, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
    @Field(() => ID)
    id: number

    @Field()
    name: string

    @Field(type => Int)
    age: number

    @Field()
    role: string
}