import './App.css';
import SignIn from './component/Login/SignIn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './component/HomePage.jsx';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path = "/" element = {<SignIn/>} />
                <Route path = "/HomePage" element = {<HomePage/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default App;