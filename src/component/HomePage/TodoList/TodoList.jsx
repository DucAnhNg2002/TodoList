import React from "react";
import TodoItem from "./TodoItem/TodoItem";
import "./TodoList.scss";
import { connect } from "react-redux";

function TodoList({todoList}) {
    return (
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
    )
}
const mapStateToProps = (state,ownProps) => {
    return {
        todoList: state.item,
    }
}
export default connect(mapStateToProps,null)(TodoList);