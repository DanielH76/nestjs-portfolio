import { BadRequestException, Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BlogpostService } from 'src/services/blogpost.service';
import { Blogpost } from 'src/types/blogpost';
import { AppService } from '../app.service';


@Controller('blogpost')
export class BlogpostController {
    constructor(private readonly blogService: BlogpostService){}

    @Get()
    async getAll(): Promise<Blogpost[]> {
        return await this.blogService.getAll()
    }

    @Get(":id")
    async get(@Param() params) {
        if(params.id){
            return await this.blogService.getByID(params.id)
        }
        return BadRequestException
    }

    @Post()
    async post(@Body() post: Blogpost){
        if(!post) return BadRequestException

        const idOfInserted: number = await this.blogService.create(post)
        return idOfInserted
    }

    @Delete(":id")
    async delete(@Param() params){
        if(params.id){
            const rowDeleted = this.blogService.delete(params.id)
            return rowDeleted
        }
    }

    @Put()
    async update(@Body() post: Blogpost){
        if(post){
            this.blogService.update(post)
        }
    }

}