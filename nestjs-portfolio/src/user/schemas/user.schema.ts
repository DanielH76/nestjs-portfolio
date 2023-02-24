import { Int } from '@nestjs/graphql'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import * as mongoose from 'mongoose'
import { HydratedDocument } from 'mongoose'
import { UserService } from '../services/user.service'

export type UserDocument = HydratedDocument<UserS>

@Schema()
export class UserS {
    @Prop()
    id: number

    @Prop()
    name: string

    @Prop(Number)
    age: number

    @Prop()
    role: string
}

export const UserSchema = SchemaFactory.createForClass(UserS)
console.log(UserSchema)

/* export const UserSchema = new mongoose.Schema({
    id: Number,
    name: String,
    age: Number,
    role: String
}) */