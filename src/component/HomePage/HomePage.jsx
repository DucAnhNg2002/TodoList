import TodoList from "./TodoList/TodoList"
import "./HomePage.scss";
import { idUser } from "../Login/SignIn";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import React from "react";
import Menu from "./Menu/Menu.jsx";
import { useState } from "react";
import { createNewTodo } from "../Action/index.js";
import instanceAxios from "../Axios/instanceAxios.js";
import { connect } from "react-redux";
import ReactLoading from 'react-loading';

const HomePage = ({createTodo}) => {
    const navigative = useNavigate();
    const [isFetchAPI,setIsFetchAPI] = useState(false);
    useEffect(() => {
        if(idUser == null) {
            navigative("/Login");
        }
        else {
            const URL = `TodoApp/${idUser}`;
            instanceAxios.get(URL)
            .then((response) => {
                console.log("Xin chào: " + response.data.name + " !");
                createTodo(response.data.data);
                setIsFetchAPI(true);
            })
            .catch((error) => {
                console.log(error);
            })
        }
    },[]);
    return (
        <div className="home-page">
            {
            (!isFetchAPI && 
            <div className="loading-wrap" style={{display: "flex", justifyContent: "center",}}>
                <ReactLoading type={"spinningBubbles"} color={"black"} height={'10%'} width={'10%'}/>
            </div>
                )
            ||
            <React.Fragment>
                <header style={{textAlign: "center"}}>  <h1> TODO LIST </h1> </header>
                <Menu/>
                <TodoList/>
            </React.Fragment>
            }
        </div>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        createTodo: (todo) => {
            dispatch(createNewTodo(todo));
        }
    }
}
export default connect(null,mapDispatchToProps)(HomePage);