import { Args, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { UserService } from "../services/user.service";
import { User } from "../types/user.model";
import { CreateUserDto } from "../types/dto/create-user.dto";
import { UserFindAll } from "../types/dto/find-all.dto";

@Resolver()
export class UserResolver {
    constructor(
    private readonly userService: UserService,
  ) {}  


   @Query(() => [UserFindAll])
  async getUsers() {
    return this.userService.findAll()
  } 


   @Mutation(() => UserFindAll)
  async createUser(@Args('user') user: CreateUserDto) {
    return await this.userService.create(user)
  } 

/*   @ResolveField()
  async posts(@Parent() author: Author) {
    const { id } = author;
    return this.postsService.findAll({ authorId: id });
  } */
}