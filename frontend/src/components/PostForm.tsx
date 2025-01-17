// 新しいPostを追加するフォーム
import React, {useState} from "react";
import apiClient from "../api/api";

const PostForm: React.FC = () => {
    const [newPost,setNewPost] = useState<string>("");
    const handleAddPost = () => {
        apiClient.post("/posts",{title:newPost,completed:false}).then(()=>{
            alert("New Post Added!");
            setNewPost("");
        });
    };
    return(
        <div>
            <input type="text" value={newPost} onChange={(e)=>
                setNewPost(e.target.value)} placeholder="Enter new Post"/>
            <button onClick={handleAddPost}>Add Post</button>
        </div>
    );
};
export default PostForm;