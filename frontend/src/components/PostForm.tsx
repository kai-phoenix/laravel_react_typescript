// 新しいPostを追加するフォーム
import React, {useState} from "react";
import apiClient from "../api/api";

const PostForm: React.FC = () => {
    const [title,setTitle] = useState<string>("");
    const [content,setContent] = useState<string>("");
    const [completed,setCompleted] = useState(false);
    const handleSubmit = async (e:React.FormEvent) => {
        e.preventDefault();
        try{
            const response = await apiClient.post("/posts",{
                title,
                content,
                completed,
            });
            alert("メモが投稿できました。"+JSON.stringify(response.data));
            // フォームリセット
            setTitle("");
            setContent("");
            setCompleted(false);
        }
        catch (error) {
            console.error('Error creating post:',error);
            alert("メモをポストできませんでした。")
        }
    };

    return(
        <div className="max-w-md mx-auto p-4 mt-8 bg-white rounded shadow">
            <h2 className="text-xl font-bold mb-4">新しい投稿</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block font-medium text-gray-700 mb-1">タイトル:</label>
                    <input type="text" className="w-full border border-gray-300 rounded px-3,py-2 focus:outline-none focus:ring focus:ring-blue-200" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                </div>
                <div>
                    <label>内容:</label>
                    <input type="text" className="w-full border border-gray-300 rounded px-3,py-2 focus:outline-none focus:ring focus:ring-blue-200" value={content} onChange={(e)=>setContent(e.target.value)}/>
                </div>
                <div className="flex items-center">
                    <label htmlFor="completed" className="ml-2 text-gray-700">状態:</label>
                    <input id="completed" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" checked={completed} onChange={(e)=>setCompleted(e.target.checked)}/>
                </div>
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-blue-500">作成</button>
            </form>
        </div>
    );
};
export default PostForm;