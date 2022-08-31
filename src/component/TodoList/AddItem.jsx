import { useState } from "react";
import "./AddItem.css";

import { connect } from "react-redux";
import { addNewItem } from "../Action/index.js";

function newItem(name) {
    const date = new Date();
    this.id = date.getTime();
    this.time = date.getUTCDate() + "/" + (date.getUTCMonth()+1) + "/" + date.getUTCFullYear() + " " + date.getHours() + ":" + date.getMinutes();
    this.name = name;
    this.isDone = false;
}

function AddItem({todoList,addNewItem}) {
    const [nameTodoAdd,setNameTodoAdd] = useState('');
    const handleAddItem = () => {
        addNewItem(new newItem(nameTodoAdd));
        setNameTodoAdd('');
        /* update to API after add item to todolist */ 

        /* update to API after add item to todolist */ 
    }
    return (
        <div className="add-item">
            <input className="input-add-item" placeholder="Add Todo Item" 
                value = {nameTodoAdd} onChange={(e) => {setNameTodoAdd(e.target.value)}}/>
            <button className="button-add-item" onClick={handleAddItem}> Add </button>
        </div>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        addNewItem: (item) => {
            dispatch(addNewItem(item));
        },
    }
}
const mapStateToProps = (state,ownProps) => {
    return {
        todoList: state.item,
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AddItem);