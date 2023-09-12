import axios from "axios";

export default class PostService {
    static async getAll() {
        const responce = await axios.get('https://jsonplaceholder.typicode.com/posts1')
        return responce.data
    }
}