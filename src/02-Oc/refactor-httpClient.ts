// import axios from "axios";

export class HttpClient{

    // async get(url: string){
    //     const {data, status} = await axios.get(url)
    //     console.log(data, status)
    //     return {data, status}
    // }


    /**
     * Si eliminamos la dependencia de Axios la aplicación sigue funcionando igual
     */
    async get(url: string){
        const res = await fetch(url)
        const data = await res.json()
        const status = res.status
        return {data, status}
    }
}