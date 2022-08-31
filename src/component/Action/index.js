import { CREATE_NEW_TODO,ADD_NEW_ITEM,DELETE_ITEM,UPDATE_ITEM } from "../Const";
export const addNewItem = (item) => {
    return {
        type : ADD_NEW_ITEM,
        value: item, /* object element */
    }
}
export const createNewTodo = (todo) => {
    return {
        type: CREATE_NEW_TODO,
        todo: todo, /* array */
    }
}