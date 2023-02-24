import { Module, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserResolver } from '../resolvers/user.resolver';
import { UserS, UserSchema } from '../schemas/user.schema';
import { UserService } from '../services/user.service';
import { User } from '../types/interfaces/user.interface';

@Module({
    imports:[MongooseModule.forFeature([{name: UserS.name, schema: UserSchema}]),],
    providers: [UserResolver, UserService, /* Model<User> */]
})
export class UserModule {

}   