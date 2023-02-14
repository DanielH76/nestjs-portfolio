import { Injectable, NotFoundException } from '@nestjs/common';
import { Blogpost, BlogpostProps } from 'src/types/blogpost';
import { getClient } from "../config/knex";


@Injectable()
export class BlogpostService {
    private client = getClient()

    async getAll(): Promise<Blogpost[]> {
        const props = await this.client("blogposts").select("*")

        const posts = props.map((props) => new Blogpost(props))

        return posts
    }

    async getByID(id: number): Promise<Blogpost>{

        const props: BlogpostProps = await this.client("blogposts")
        .select('*')
        .where("Id", id)
        .first()

        const blogpost: Blogpost = new Blogpost(props)
        console.log(blogpost.titleAndBody)
        if(!blogpost) throw NotFoundException

        return blogpost
    }

    async create(post: BlogpostProps): Promise<number> {
        console.log(post)

        const created = await this.client("blogposts")
        .insert(post)

        return created[0]
    }
}