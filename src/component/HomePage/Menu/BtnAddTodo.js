import { useNavigate } from "react-router-dom";
import "../../../grid.css";

const BtnAddTodo = () => {
    const naviagive = useNavigate();
    const handleClickBtnAddTodo = () => {
        naviagive("/AddItem");
    }
    return (
        <button className="menu-button menu-addTodo" onClick={handleClickBtnAddTodo}>
           Thêm công việc
        </button>
    )
}

export default BtnAddTodo;