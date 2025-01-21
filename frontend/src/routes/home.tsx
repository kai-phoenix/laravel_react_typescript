import {Routes,Route } from "react-router-dom";
import Home from "../pages/home";

function HomeRoutes() {
    return (
        <Routes>
            {/* homeにアクセスしたときにHomeコンポーネントを表示 */}
            <Route path="/home" element={<Home/>}/>
        </Routes>
    )
}
export default HomeRoutes;