import { Field, InputType, Int, ObjectType } from "@nestjs/graphql"

@InputType()
export class CreateUserDto {
    @Field()
    readonly name: string

    @Field(() => Int)
    readonly age: number

    @Field()
    readonly role: string

}