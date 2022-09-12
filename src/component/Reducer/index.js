import { combineReducers } from "redux";
import ClickReducers from "./ClickReducer";
import ItemReducer from "./ItemReducer";
export default combineReducers({
    item: ItemReducer,
    click: ClickReducers,
})