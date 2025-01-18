// Postリストのコンポーネントを表示
import React, {useEffect,useState} from "react";
import apiClient from "../api/api";
import { Post } from "../interfaces/Post";

const PostList: React.FC = () => {
    const [posts,setPosts] = useState<Post[]>([]);

    // APIからPostリストを取得
    useEffect(()=>{
        apiClient.get("/posts").then((response)=>{
            console.log('Request URL:', 'http://127.0.0.1:8000/api/posts');
            console.log('API Response:', response.data); 
            setPosts(response.data);
        }).catch((error)=>{
            console.log("Error detecting:",error);
        });
    },[]);

    return (
        <div>
            <h1>メモリスト</h1>
            <ul>
                {posts.map((post)=>(
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                        <p>Status:{post.completed?"Completed":"Pending"}</p>
                    </li>
                ))}
            </ul>
        </div>
        );
}

export default PostList;