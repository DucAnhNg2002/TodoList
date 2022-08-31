import React, { useEffect } from "react";
import instanceAxios from "../../Axios/instanceAxios";
import TodoItem from "./TodoItem/TodoItem";
import "./TodoList.css";
import { idUser } from "../../Login/SignIn";
import { connect } from "react-redux";
import { createNewTodo } from "../../Action/index.js";

// let todo = [
//     {
//         id:1,
//         name: "Đi ngủ",
//         isDone: false,
//     },
//     {
//         id:2,
//         name: "Nấu cơm",
//         isDone: false,
//     },
//     {
//         id:3,
//         name: "Rửa bát",
//         isDone: false,
//     },
//     {
//         id:4,
//         name: "Chơi game",
//         isDone: false,
//     },
//     {
//         id:5,
//         name: "Học bài",
//         isDone: true,
//     }
// ]

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
    <React.Fragment>
        <div className="todo-list">
            <div className="todo-list__item">
                <table>
                    <thead>
                        <tr>
                            <th className="thead thead-id"> ID </th>
                            <th className="thead thead-name"> Name </th>
                            <th className="thead thead-done"> Done </th>
                            <th className="thead thead-actions"> Actions </th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        todoList.map((val) => {
                            return ( 
                                <tr key = {val.id} className = "todo-item">
                                    <TodoItem id = {val.id} name = {val.name} isDone = {val.isDone} />
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
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