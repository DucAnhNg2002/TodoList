import './App.css';
import SignIn from './component/Login/SignIn';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import HomePage from './component/HomePage/HomePage';
import AddItem from './component/HomePage/AddItem/AddItem';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path = "/" element = {<HomePage/>} />
                <Route path = "/Login" element = {<SignIn/>} />
                <Route path = "/AddItem" element = {<AddItem/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default App;