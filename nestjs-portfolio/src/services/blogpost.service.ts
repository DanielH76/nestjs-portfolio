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

    async getByID(id: string): Promise<Blogpost>{
        const idParsed: number = parseInt(id)
        const props: BlogpostProps = await this.client("blogposts")
        .select('*')
        .where("Id", idParsed)
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

    async delete(id: string) {
        console.log(id)

        const idParsed: number = parseInt(id)
        const deleted = await this.client("blogposts").delete().where("id", idParsed)
        return deleted
    }

    async update(post: BlogpostProps) {
        console.log(post)

        const oldPost = await this.client("blogposts")
        .select("*")
        .where("id", post.id)
        .first()

        post.body !== undefined ? oldPost.body = post.body : oldPost.body
        post.title  !== undefined ? oldPost.title = post.title: oldPost.title
        post.poster  !== undefined ? oldPost.poster = post.poster: oldPost.poster

        const update = await this.client("blogposts")
        .where("id", post.id)
        .update(oldPost)
        return update

    }
}