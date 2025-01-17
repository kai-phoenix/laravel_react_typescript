import React from "react";
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";

const Home: React.FC = () => {
    return (
        <div>
            <PostForm/>
            <PostList/>
        </div>
    );
}

export default Home;