import {Routes,Route } from "react-router-dom";
import PostList from '../components/PostList';
import PostForm from '../components/PostForm';

function PostRoutes() {
    return (
        <Routes>
            <Route path="/posts" element={<PostList/>}/>
            <Route path="/posts/new" element={<PostForm/>}/>
        </Routes>
    )
}
export default PostRoutes;