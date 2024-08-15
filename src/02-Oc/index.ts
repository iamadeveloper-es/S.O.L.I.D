/** 
 * 02 Open and Close
 * Abiertas para la extensión pero cerradas a la modificación
*/

/**
 * Problemas: 
 * - Fuerte dependencia de axios, si hay algún cambio afecta a todo el código
 */

import { PhotoService, PostService, TodoService } from "./index-http"



(async () => {
    const todoService = new TodoService()
    const postService = new PostService()
    const photoService = new PhotoService()

    const todos = await todoService.getTodoItems()
    const posts = await postService.getPosts()
    const photos = await photoService.getPhotos()

    console.log(todos, posts, photos)
})()