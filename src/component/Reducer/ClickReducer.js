import { CLICK_ADD,CLICK_UPDATE } from "../../../src/component/Const"

const ClickReducers = (click = CLICK_ADD, action) => {
    switch(action.type) {
        case CLICK_ADD:
            click = CLICK_ADD;
            return click;
        case CLICK_UPDATE:
            click = CLICK_UPDATE;
            return click;
        default:
            return CLICK_ADD;
    }
}
export default ClickReducers;