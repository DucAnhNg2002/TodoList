import React, { useEffect, useState } from "react";
import getTime from "../getTime.Current";
import "./TodoItem.css";


export default function TodoItem({id,name,isDone,todoList,setTodoList,historyTodoList,setHistoryTodoList}) {
    const [clickUpdate,setClickUpdate] = useState(false);
    const [stateName,setStateName] = useState(name);

    const handleChangeDone = (e) => {
        const findIdx = todoList.findIndex((value) => value.id == id);
        setTodoList((preTodoList) => {
            const todoList = [...preTodoList];
            todoList[findIdx].isDone = !todoList[findIdx].isDone;
            return todoList;
        })
    }

    const handleChangeName = (e) => {
        setStateName(e.target.value);
    }

    const handleUpdateItem = (e) => {
        const preClick = clickUpdate;
        if(preClick && stateName == '') return;
        if(preClick) {
            const findIdx = todoList.findIndex((value) => value.id == id);
            setTodoList((preTodoList) => {
                const todoList = [...preTodoList];
                todoList[findIdx].name = stateName;
                return todoList;
            })
        }
        setClickUpdate(!preClick);
    }
    
    const handleDeleteItem = (e) => {
        const findIdx = todoList.findIndex((value) => value.id == id)
        setTodoList((preTodoList) => {
            const todoList = [...preTodoList];
            todoList.splice(findIdx,1);
            return todoList;
        })
        setHistoryTodoList((preHistoryTodoList) => {
            const historyTodoList = [...preHistoryTodoList]
            historyTodoList.push({
                time : getTime(),
                type: "Delete",
                value: {
                    id: todoList[findIdx].id,
                    name: todoList[findIdx].name,
                    created: todoList[findIdx].time 
                }
            })
            return historyTodoList
        })
    }
    return (
        <React.Fragment>
            <td> <div className="toto-item--border todo-item__Id">{id}</div> </td>
            <td> 
                {
                    (
                        clickUpdate && 
                        <input className="toto-item--border input-todo-item__Name" value = {stateName} onChange = {handleChangeName}/>
                    )
                    ||
                    <div className="toto-item--border todo-item__Name">{name}</div> 
                }
              
            </td>
            <td className="td-done"> 
                <div className="toto-item--border todo-item__isDone" onClick={handleChangeDone}> 
                    {
                        (
                            isDone && 
                            <i className ="fa-solid fa-check"></i>
                        )
                    }
                </div> 
            </td>
            <td> 
                <div className="todo-item__Actions">
                    <button className="todo-item__Update" onClick={handleUpdateItem}> Update </button>
                    <button className="todo-item__Delete" onClick={handleDeleteItem}> Delete </button>   
                </div>
            </td>
        </React.Fragment>
    )
}