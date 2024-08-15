// import axios from "axios";
import { HttpClient } from "./refactor-httpClient";
const basePath = 'https://jsonplaceholder.typicode.com'

export class TodoService{

    constructor(private httpClient: HttpClient){}

    async getTodoItems(){
        const {data} = await this.httpClient.get(`${basePath}/todos`)
        return data
    }
}

export class PostService{

    constructor(private httpClient: HttpClient){}

    async getPosts(){
        const {data} = await this.httpClient.get(`${basePath}/posts`)
        return data
    }
}

export class PhotoService{

    constructor(private httpClient: HttpClient){}

    async getPhotos(){
        const {data} = await this.httpClient.get(`${basePath}/photos`)
        return data
    }
}