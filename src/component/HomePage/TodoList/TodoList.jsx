import React, { useEffect } from "react";
import instanceAxios from "../../Axios/instanceAxios";
import TodoItem from "./TodoItem/TodoItem";
import "./TodoList.css";
import { idUser } from "../../Login/SignIn";
import { connect } from "react-redux";
import { createNewTodo } from "../../Action/index.js";

function Header() {
    return (
        <header className="todo-list-header">
            <h3 className="todo-list-header-id">
                ID
            </h3>
            <h3 className="todo-list-header-name">
                Name
            </h3>
            <h3 className="todo-list-header-isDone">
                IsDone
            </h3>
        </header>
    )
}
function TodoList({todoList,createTodo}) {
    const URL = `TodoApp/${idUser}`;
    useEffect(() => {
        instanceAxios.get(URL)
        .then((response) => {
            createTodo(response.data.data);
        })
        .catch((error) => {
            console.log(error);
        })
    },[])

    return (
    <div className="todo-list">
        <Header />
        {
        todoList.map((val) => {
            return ( 
                /* key is time random */
                <div key = {val.id} className = "todo-item"> 
                    <TodoItem id = {val.id} time = {val.time} name = {val.name} isDone = {val.isDone} />
                </div>
                )
            })
        }
    </div>
    )
}
const mapStateToProps = (state,ownProps) => {
    return {
        todoList: state.item,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        createTodo: (todo) => {
            dispatch(createNewTodo(todo));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);