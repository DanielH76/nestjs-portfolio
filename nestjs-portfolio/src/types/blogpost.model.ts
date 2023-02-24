import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BlogpostQL {
    @Field(type => ID)
    id: number

    @Field()
    poster: string

    @Field()
    title: string

    @Field()
    body: string
}