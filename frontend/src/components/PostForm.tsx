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
            alert("New Post Added!"+JSON.stringify(response.data));
            // フォームリセット
            setTitle("");
            setContent("");
            setCompleted(false);
        }
        catch (error) {
            console.error('Error creating post:',error);
        }
    };

    return(
        <div>
            <h2>新しい投稿</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                </div>
                <div>
                    <label>Content:</label>
                    <input type="text" value={content} onChange={(e)=>setContent(e.target.value)}/>
                </div>
                <div>
                    <label>Completed:</label>
                    <input type="checkbox" checked={completed} onChange={(e)=>setCompleted(e.target.checked)}/>
                </div>
                <button type="submit">作成</button>
            </form>
        </div>
    );
};
export default PostForm;