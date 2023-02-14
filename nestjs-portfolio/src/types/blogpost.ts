export interface BlogpostProps {
    id?: number
    poster: string
    title: string
    body: string
} 



export class Blogpost {

    readonly id: number
    readonly poster: string
    readonly title: string
    readonly body: string

    constructor(props: BlogpostProps){
        this.id = props.id
        this.poster = props.poster
        this.title = props.title
        this.body = props.body
    }

    get titleAndBody(): string {
        return this.title + this.body
    }


}