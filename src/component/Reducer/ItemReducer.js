import { ADD_NEW_ITEM,CREATE_NEW_TODO,DELETE_ITEM,UPDATE_ITEM } from "../Const/index.js";

const ItemReducers = (todoList = [], action) => {
    switch(action.type) {
        case CREATE_NEW_TODO:
            return action.todo;
        case ADD_NEW_ITEM:
            return [...todoList,action.value];
        default:
            return [];
    }
}
export default ItemReducers;