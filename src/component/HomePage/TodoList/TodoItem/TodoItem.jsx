import React, { useState } from "react";
import "./TodoItem.css";

import { connect } from "react-redux";
import { updateItem,deleteItem } from "../../../Action/index.js";

function TodoItem({id,time,name,isDone,updateItem,deleteItem}) {
    const [IsDone,setIsDone] = useState(isDone);

    const [clickUpdate,setClickUpdate] = useState(false);
    const [nameState,setNameState] = useState(name);

    const handleChangeDone = (e) => {
        updateItem(id,{id: id, time: time, name: name,isDone: !IsDone});
        setIsDone(!IsDone);
    }

    const handleChangeName = (e) => {
        setNameState(e.target.value);
    }

    const handleUpdateItem = (e) => {
        if(clickUpdate && setNameState == '') return;
        if(nameState && clickUpdate) {
            updateItem(id,{id: id, time: time, name: nameState,isDone: isDone});
        }
        setClickUpdate(!clickUpdate);
    }
    
    const handleDeleteItem = (e) => {
        deleteItem(id);
    }

    return (
        <React.Fragment>
            <div className="todo-item-id">
                {id}
            </div>
            <div className="todo-item-name-wrap">
                {
                ( 
                clickUpdate &&
                <input className="todo-item-name-input" value = {nameState} onChange = {handleChangeName} />
                )
                ||
                ( 
                <div className="todo-item-name"> {name} </div>
                )
                }
            </div>
            <div className="todo-item-isDone" onClick={handleChangeDone} >
                {
                    IsDone && 
                    <i className ="fa-solid fa-check"></i>
                }
            </div>
            <div className="todo-item-select">
                <div className="todo-item-update">
                    <button className="todo-item-update-button" onClick={handleUpdateItem}> Update </button>
                </div>
                <div className="todo-item-delete" >
                    <button className="todo-item-delete-button" onClick={handleDeleteItem} > Delete </button>
                </div>
            </div>
        </React.Fragment>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateItem: (id,item) => {
            dispatch(updateItem(id,item));
        },
        deleteItem: (id,item) => {
            dispatch(deleteItem(id));
        },
    }
}
export default connect(null,mapDispatchToProps)(TodoItem);