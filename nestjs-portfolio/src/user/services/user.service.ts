import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Model} from 'mongoose'
import { UserDocument, UserS } from '../schemas/user.schema';
import { CreateUserDto } from '../types/dto/create-user.dto';
import { User } from '../types/user.model';


@Injectable()
export class UserService{
    constructor(@InjectModel(UserS.name) private readonly userModel: Model<UserDocument>){}
    
     async create(createUserDto: CreateUserDto): Promise<User> {
        const createdUser = new this.userModel(createUserDto)
        return await createdUser.save()
    } 

    async findAll(): Promise<User[]> {
        return await this.userModel.find().exec()
    }
}