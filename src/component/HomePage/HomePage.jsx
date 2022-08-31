import AddItem from "./AddItem/AddItem.jsx"
import TodoList from "./TodoList/TodoList"

import "./HomePage.css";
import { idUser } from "../Login/SignIn";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import React from "react";

export default function HomePage() {
    const navigative = useNavigate();
    useEffect(() => {
        if(idUser == null) {
            navigative("/");
        }
    },[]);
    return (
        <div className="home-page">
            <React.Fragment>
                <AddItem/>
                <TodoList/>
            </React.Fragment>
        </div>
    )
}