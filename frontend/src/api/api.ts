import axios from "axios";

const apiClient = axios.create({
    baseURL:"http://127.0.0.1:8000/api",//LaravelAPIのエンドポイント
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials:true,//認証情報
    withXSRFToken: true,
});

export default apiClient;