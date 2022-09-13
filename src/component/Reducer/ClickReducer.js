import { CLICK_ADD,CLICK_UPDATE } from "../../../src/component/Const"

const ClickReducers = (click = { id: -1, name: "", type: CLICK_ADD,}, action) => {
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