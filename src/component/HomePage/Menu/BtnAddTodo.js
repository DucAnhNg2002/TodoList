import { useNavigate } from "react-router-dom";

const BtnAddTodo = () => {
    const naviagive = useNavigate();
    const handleClickBtnAddTodo = () => {
        naviagive("/AddItem");
    }
    return (
        <button className="menu-button menu-addTodo" onClick={handleClickBtnAddTodo}>
            Thêm Công Việc
        </button>
    )
}

export default BtnAddTodo;