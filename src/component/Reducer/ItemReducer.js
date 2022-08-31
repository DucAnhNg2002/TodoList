import instanceAxios, { AxiosPutData } from "../Axios/instanceAxios.js";
import { ADD_NEW_ITEM,CREATE_NEW_TODO,DELETE_ITEM,UPDATE_ITEM } from "../Const/index.js";
import { idUser } from "../Login/SignIn.jsx";

const ItemReducers = (todoList = [], action) => {
    switch(action.type) {
        case CREATE_NEW_TODO: /* Component TodoList */
            return action.todo;
        case ADD_NEW_ITEM:   /* Component AddItem */
            const todo = [...todoList,action.value];  
            AxiosPutData(idUser,todo);
            return todo;
        default:
            return [];
    }
}
export default ItemReducers;