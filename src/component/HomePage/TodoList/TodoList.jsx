import React, { useEffect } from "react";
import instanceAxios from "../../Axios/instanceAxios";
import TodoItem from "./TodoItem/TodoItem";
import "./TodoList.scss";
import { idUser } from "../../Login/SignIn";
import { connect } from "react-redux";
import { createNewTodo } from "../../Action/index.js";

function TodoList({todoList,createTodo}) {
    const URL = `TodoApp/${idUser}`;
    useEffect(() => {
        instanceAxios.get(URL)
        .then((response) => {
            console.log("Xin chào: " + response.data.name + " !");
            createTodo(response.data.data);
        })
        .catch((error) => {
            console.log(error);
        })
    },[])

    return (
    <React.Fragment>
        <div className="todo-list">
            {
            todoList.map((val) => {
                return ( 
                    /* key is time random */
                    <div key = {val.id} className = "todo-item"> 
                        <TodoItem id = {val.id} time = {val.time} name = {val.name} level = {val.level} isDone = {val.isDone} />
                    </div>
                    )
                })
            }
        </div>
    </React.Fragment>
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