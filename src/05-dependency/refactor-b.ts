import { LocalDataBaseService, PostProvider } from "./refactor-c";
import { JsonDataBaseService } from "./refactor-c";

export interface Post {
    body:   string;
    id:     number;
    title:  string;
    userId: number;
}


export class PostService {

    private posts: Post[] = [];

    // constructor() {}
    constructor(private postProvider: PostProvider){}

    async getPosts() {
        // const jsonDB = new LocalDataBaseService();
        // this.posts = await jsonDB.getFakePosts();

        this.posts = await this.postProvider.getPosts()

        return this.posts;
    }
}