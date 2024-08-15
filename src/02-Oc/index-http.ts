import axios from "axios";
const basePath = 'https://jsonplaceholder.typicode.com'

export class TodoService{

    async getTodoItems(){
        const {data} = await axios.get(`${basePath}/todos`)
        return data
    }
}

export class PostService{

    async getPosts(){
        const {data} = await axios.get(`${basePath}/posts`)
        return data
    }
}

export class PhotoService{

    async getPhotos(){
        const {data} = await axios.get(`${basePath}/photos`)
        return data
    }
}