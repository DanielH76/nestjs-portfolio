import { Args, Int, Query, Resolver } from "@nestjs/graphql";
import { BlogpostService } from "src/services/blogpost.service";
import { BlogpostQL } from "src/types/blogpost.model";

@Resolver()
export class BlogpostResolver {
   constructor(
    private blogpostService: BlogpostService,
  ) {} 


   @Query(() => BlogpostQL)
  async getPosts(@Args('id', { type: () => String }) id: string) {
    return this.blogpostService.getByID(id);
  } 

/*   @ResolveField()
  async posts(@Parent() author: Author) {
    const { id } = author;
    return this.postsService.findAll({ authorId: id });
  } */
}