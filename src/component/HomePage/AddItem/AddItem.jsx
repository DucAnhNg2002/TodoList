import React, { useEffect, useState } from "react";
import "./AddItem.scss";

import { connect } from "react-redux";
import { addNewItem } from "../../Action/index.js"
import { useNavigate } from "react-router-dom";
import { idUser } from "../../Login/SignIn.jsx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function newItem(name) {
    /* Item is object contain {id, time, name, isDone} */
    const date = new Date();
    this.id = date.getTime();
    this.time = date.getUTCDate() + "/" + (date.getUTCMonth()+1) + "/" + date.getUTCFullYear() + " " + date.getHours() + ":" + date.getMinutes();
    this.name = name;
    this.isDone = false;
}

const AddItem = ({addNewItem}) => {
    const navigative = useNavigate();
    const [nameTodoAdd,setNameTodoAdd] = useState('');

    useEffect(() => {
        if(idUser == null) {
            navigative("/Login");
        }
    },[])

    const handleAddItem = () => {
        if(nameTodoAdd == '') {
            alert("Tên công việc không được để trống !!!");
            return;
        }
        toast.success('Thêm thành công !', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        const Item = new newItem(nameTodoAdd);
        addNewItem(Item);
        setNameTodoAdd('');
    }

    const handleComeBack = () => {
        navigative("/");
    }

    return (
        <React.Fragment>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            />
            {/* Same as */}
        <ToastContainer />
        <div className="add-item">
            <div className="add-item-input-wrap">
                <input className="add-item-input" placeholder="Add Todo Item" 
                value = {nameTodoAdd} onChange={(e) => {setNameTodoAdd(e.target.value)}}/>
                {
                    nameTodoAdd == ''
                    && 
                    <span className="add-item-input-warning"> Tên công việc không được để trống !!! </span>
                }
            </div>
            <button className="add-item-button" onClick={handleAddItem}> Add </button>
            <button className="add-item-button" onClick={handleComeBack}> Back </button>
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