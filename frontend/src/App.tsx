import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/home";
import PostList from './components/PostList';
import PostForm from './components/PostForm';

function App() {
    return (
        <Router>
            <Routes>
                {/* homeにアクセスしたときにHomeコンポーネントを表示 */}
                <Route path="/home" element={<Home/>}/>
                <Route path="/posts" element={<PostList/>}/>
                <Route path="/posts/new" element={<PostForm/>}/>
            </Routes>
        </Router>
    )
}

export default App;