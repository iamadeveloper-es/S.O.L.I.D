/** 
 * 02 Open and Close Refactor
*/

import { PhotoService, PostService, TodoService } from "./refactor-http"
import { HttpClient } from "./refactor-httpClient"



(async () => {
    const httpClient = new HttpClient()
    const todoService = new TodoService(httpClient)
    const postService = new PostService(httpClient)
    const photoService = new PhotoService(httpClient)

    const todos = await todoService.getTodoItems()
    const posts = await postService.getPosts()
    const photos = await photoService.getPhotos()

    console.log(todos, posts, photos)
})()