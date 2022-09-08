import React, { useState } from "react";
import "./AddItem.scss";

import { connect } from "react-redux";
import { addNewItem } from "../../Action/index.js"
import { useNavigate } from "react-router-dom";

function newItem(name) {
    /* Item is object contain {id, time, name, isDone} */
    const date = new Date();
    this.id = date.getTime();
    this.time = date.getUTCDate() + "/" + (date.getUTCMonth()+1) + "/" + date.getUTCFullYear() + " " + date.getHours() + ":" + date.getMinutes();
    this.name = name;
    this.isDone = false;
}

function AddItem({addNewItem}) {
    const navigative = useNavigate();
    const [nameTodoAdd,setNameTodoAdd] = useState('');
    const handleAddItem = () => {
        const Item = new newItem(nameTodoAdd);
        addNewItem(Item);
        setNameTodoAdd('');
    }
    const handleComeBack = () => {
        navigative("/");
    }
    return (
        <React.Fragment>
        <div className="add-item">
            <input className="input-add-item" placeholder="Add Todo Item" 
                value = {nameTodoAdd} onChange={(e) => {setNameTodoAdd(e.target.value)}}/>
            <button className="button-add-item" onClick={handleAddItem}> Add </button>
            <button className="button-add-item" onClick={handleComeBack}> Back </button>
        </div>
        </React.Fragment>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        addNewItem: (item) => {
            dispatch(addNewItem(item));
        },
    }
}
export default connect(null,mapDispatchToProps)(AddItem);