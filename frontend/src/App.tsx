import { BrowserRouter} from 'react-router-dom';
import PostRoutes from './routes/post';
import HomeRoutes from './routes/home';

function App() {
    return (
        <BrowserRouter>
            <HomeRoutes/>
            <PostRoutes/>
        </BrowserRouter>
    )
}

export default App;