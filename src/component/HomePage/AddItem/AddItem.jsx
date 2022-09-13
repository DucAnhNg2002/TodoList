import React, { useEffect, useState } from "react";
import "./AddItem.scss";
import { connect } from "react-redux";
import { addNewItem, clickAdd, updateItem } from "../../Action/index.js"
import { useNavigate } from "react-router-dom";
import { idUser } from "../../Login/SignIn.jsx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CLICK_ADD, CLICK_UPDATE } from "../../Const";
// import { clickAdd } from "../../Action/index.js";

function newItem(name,level) {
    /* Item is object contain {id, time, name, isDone} */
    const date = new Date();
    this.id = date.getTime();
    this.time = date.getUTCDate() + "/" + (date.getUTCMonth()+1) + "/" + date.getUTCFullYear() + " " + date.getHours() + ":" + date.getMinutes();
    this.name = name;
    this.level = level;
    this.isDone = false;
}

const AddItem = ({click,clickAdd,addNewItem,updateItem}) => {
    const navigative = useNavigate();
    const [nameTodoAdd,setNameTodoAdd] = useState(click.name);
    const [selectLevel,setSelectLevel] = useState(click.level);
    useEffect(() => {
        if(idUser == null) {
            navigative("/Login");
        }
    },[])

    const handleSelectLever = (e) => {
        setSelectLevel(e.target.value);
    }
    const handleAddItem = () => {
        if(nameTodoAdd == '') {
            alert("Tên công việc không được để trống !!!");
            return;
        }
        // toast.success('Thêm thành công !', {
        //     position: "top-center",
        //     autoClose: 1000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        // });
        if(click.type == CLICK_ADD) {
            const Item = new newItem(nameTodoAdd,selectLevel);
            addNewItem(Item);
        }
        else {
            updateItem(click.id,{
                id: click.id, 
                time: click.time,
                name: nameTodoAdd,
                level: selectLevel,
                isDone: click.isDone,
            });
        }
        setNameTodoAdd('');
        navigative("/");
    }

    const handleComeBack = () => {
        clickAdd();
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
        <div className="add-item-wrap">
            <div className="add-item">
                <h2 className="add-item-title"> 
                {
                    (click == CLICK_UPDATE && 
                    <span> Chỉnh sửa công việc </span>)
                    ||
                    (
                        <span> Thêm công việc mới</span>
                    )
                }
                </h2>
                <div className="add-item-name-wrap">
                    <h4 className="add-item-name-title"> Tên công việc </h4>
                    <input className="add-item-name-input" placeholder="nhập công việc" 
                    value = {nameTodoAdd} onChange={(e) => {setNameTodoAdd(e.target.value)}}/>
                    {
                        nameTodoAdd == ''
                        && 
                        <span className="add-item-name-warning"> Tên công việc không được để trống! </span>
                    }
                </div>
                <div className="add-item-select-wrap">
                    <h4 className="add-item-select-title"> Mức độ </h4>
                    <select className="add-item-select-select" onChange={handleSelectLever} defaultValue={`${selectLevel}`} > 
                        <option value = "1"> Không làm không sao </option>
                        <option value = "2"> Phải làm </option>
                        <option value = "3"> Làm ngay </option>
                    </select>
                </div>
                <div className="add-item-button-wrap">
                    <button className="add-item-button" onClick={handleAddItem}> 
                    {
                        (click.type == CLICK_UPDATE && 
                        <span> Lưu </span>
                        )
                        ||
                        <span> Thêm </span>
                    }
                    </button>
                    <button className="add-item-button" onClick={handleComeBack}> Quay Lại </button>
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}
const mapStateToProps = (state,owns) => {
    return {
        click: state.click,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addNewItem: (item) => {
            dispatch(addNewItem(item));
        },
        updateItem : (id,item) => {
            dispatch(updateItem(id,item));
        },
        clickAdd: () => {
            dispatch(clickAdd());
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AddItem);