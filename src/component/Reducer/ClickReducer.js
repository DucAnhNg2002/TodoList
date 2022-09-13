import { CLICK_ADD,CLICK_UPDATE } from "../../../src/component/Const"
import { clickAdd } from "../Action"
const ClickReducers = (click = clickAdd(), action) => {
    switch(action.type) {
        case CLICK_ADD:
            return {
                ...action,
            }
        case CLICK_UPDATE:
            return {
                ...action,
            }
        default:
            return click;
    }
}
export default ClickReducers;