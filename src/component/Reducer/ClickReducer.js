import { CLICK_ADD,CLICK_UPDATE } from "../../../src/component/Const"

const ClickReducers = (click = CLICK_ADD, action) => {
    switch(action.type) {
        case CLICK_ADD: /* Change To Add */
            click = {
                id: -1,
                name: "",
                type: CLICK_ADD,
            }
            return click;
        case CLICK_UPDATE: /* Change To Update */
            click = {
                id: action.value.id,
                name: action.value.name,
                type: CLICK_UPDATE,
            }
            return click;
        default:
            return CLICK_ADD;
    }
}
export default ClickReducers;