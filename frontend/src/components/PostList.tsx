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
        <div className="max-w-2xl mx-auto p-4">
            <h1>メモリスト</h1>
            {posts.length === 0 ? (
                <p>メモはありません。</p>
            ):(
                <ul className="space-y-4">
                {posts.map((post)=>(
                    <li key={post.id} className="border border-gray-300 rounded p-4 shadow-sm bg-white">
                        <h2 className="text-lg front-semibold text-blue-600">{post.title}</h2>
                        <p className="text-gray-700 mt-2">{post.content}</p>
                        <p className="{`mt-2 inline-block px-2 py-1 rounded text-sm ${post.completed ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}">Status:{post.completed?"Completed":"Pending"}</p>
                    </li>
                ))}
                </ul>
            )}
        </div>
        );
}

export default PostList;