import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

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

/* export const UserSchema = new mongoose.Schema({
    id: Number,
    name: String,
    age: Number,
    role: String
}) */