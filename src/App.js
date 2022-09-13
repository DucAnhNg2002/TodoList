import './App.css';
import SignIn from './component/Login/SignIn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './component/HomePage/HomePage';
import AddItem from './component/HomePage/AddItem/AddItem';
import React from 'react';

const App = () => {
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