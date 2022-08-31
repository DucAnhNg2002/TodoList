import instanceAxios, { AxiosPutData } from "../Axios/instanceAxios.js";
import { ADD_NEW_ITEM,CREATE_NEW_TODO,DELETE_ITEM,UPDATE_ITEM } from "../Const/index.js";
import { idUser } from "../Login/SignIn.jsx";

const findIdxById = (todoList,id) => {
    for(let i = 0; i < todoList.length; i++) {
        if(todoList[i].id == id) {     
            return i;
        }
    }
    return -1;
}

const ItemReducers = (todoList = [], action) => {
    let todo;
    switch(action.type) {
        case CREATE_NEW_TODO: /* Component TodoList */
            return action.todo;
        case ADD_NEW_ITEM:    /* Component AddItem */
            todo = [...todoList,action.value];  
            AxiosPutData(idUser,todo);
            return todo;
        case UPDATE_ITEM:     /* Component TodoItem */
            todo = [...todoList];
            todo[findIdxById(todoList,action.id)] = action.item;
            AxiosPutData(idUser,todo);
            return todo;
        case DELETE_ITEM:     /* Component TodoItem */ 
            todo = [...todoList];
            todo.splice(findIdxById(todoList,action.id),1);
            AxiosPutData(idUser,todo);
            return todo;
        default:
            return [];
    }
}
export default ItemReducers;