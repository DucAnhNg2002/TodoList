import AddItem from "./AddItem/AddItem.jsx"
import TodoList from "./TodoList/TodoList"

import "./HomePage.scss";
import { idUser } from "../Login/SignIn";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import React from "react";
import Menu from "./Menu/Menu.jsx";

export default function HomePage() {
    const navigative = useNavigate();
    useEffect(() => {
        // if(idUser == null) {
        //     navigative("/Login");
        // }
    },[]);
    return (
        <div className="home-page">
            <header style={{textAlign: "center"}}> 
                <h1>
                    TODO LIST
                </h1>
            </header>
            <Menu/>
            <TodoList/>
        </div>
    )
}