import BtnAddTodo from "./BtnAddTodo";
import BtnClearTodo from "./BtnClearTodo";
import "./Menu.scss";

const Menu = () => {
    return (
        <div className="menu">
            <BtnAddTodo/>
            <BtnClearTodo/>
        </div>
    )
}
export default Menu;