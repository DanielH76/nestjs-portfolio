import { Field, Float, Int, ObjectType } from "@nestjs/graphql"

@ObjectType()
export class UserFindAll {
    @Field()
    readonly _id: string

    @Field()
    readonly name: string

    @Field(type => Int)
    readonly age: number

    @Field()
    readonly role: string
}