import React, { useState } from "react";
import "./TodoItem.scss";

import { connect } from "react-redux";
import { updateItem,deleteItem,clickUpdate } from "../../../Action/index.js";
import { useNavigate } from "react-router-dom";

function TodoItem({id,time,name,isDone,updateItem,deleteItem,clickUpdate}) {
    const navigative = useNavigate();
    const [IsDone,setIsDone] = useState(isDone);

    const handleChangeDone = (e) => {
        updateItem(id,{id: id, time: time, name: name,isDone: !IsDone});
        setIsDone(!IsDone);
    }
    
    const handleUpdateItem = (e) => {
        clickUpdate({id,name,isDone});
        navigative("/AddItem");
    //     isClickUpdate = true;
    //     if(clickUpdate && setNameState == '') return;
    //     if(nameState && clickUpdate) {
    //         updateItem(id,{id: id, time: time, name: nameState,isDone: isDone});
    //     }
    //     setClickUpdate(!clickUpdate);   
    }
    
    const handleDeleteItem = (e) => {
        deleteItem(id);
    }

    return (
        <React.Fragment>
            <div className="todo-item-isDone" onClick={handleChangeDone} >
                {
                    IsDone && 
                    <i className ="fa-solid fa-check"></i>
                }
            </div>
            <div className="todo-item-name"> { name } </div>
            <div className="todo-item-select">
                <div className="todo-item-update">
                    <button className="todo-item-update-button" onClick={handleUpdateItem}> 
                        <i className="fa-solid fa-pen-to-square"></i> 
                    </button>
                </div>
                <div className="todo-item-delete" >
                    <button className="todo-item-delete-button" onClick={handleDeleteItem} > 
                        <i className="fa-sharp fa-solid fa-trash"></i>
                    </button>
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
        clickUpdate: (item) => {
            dispatch(clickUpdate(item));
        }
    }
}
export default connect(null,mapDispatchToProps)(TodoItem);