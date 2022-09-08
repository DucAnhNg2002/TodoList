import { CREATE_NEW_TODO,ADD_NEW_ITEM,DELETE_ITEM,UPDATE_ITEM, CLEAR_TODO,CLEAR_TODO_LOCAL } from "../Const";

export const createNewTodo = (todo) => {
    return {
        type: CREATE_NEW_TODO,
        todo: todo, /* array */
    }
}
export const addNewItem = (item) => {
    return {
        type: ADD_NEW_ITEM,
        value: item, /* object element */
    }
}
export const updateItem = (id,item) => {
    return {
        type: UPDATE_ITEM,
        id: id,
        item: item,
    }
}
export const deleteItem = (id) => {
    return {
        type: DELETE_ITEM,
        id: id,
    }
}
export const clearTodo = () => {
    return {
        type: CLEAR_TODO,
    }
}
export const clearTodoLocal = () => {
    return {
        type: CLEAR_TODO_LOCAL,
    }
}
