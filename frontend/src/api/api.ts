import axios from "axios";

const apiClient = axios.create({
    baseURL:"http://localhost/api/posts",//LaravelAPIのエンドポイント
    withCredentials:true,//認証情報
});

export default apiClient;