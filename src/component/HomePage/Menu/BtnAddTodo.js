import { useNavigate } from "react-router-dom";
import "../../../grid.css";
import { connect } from "react-redux";
import { clickAdd } from "../../Action/index.js";

const BtnAddTodo = ({clickAdd}) => {
    const naviagive = useNavigate();
    const handleClickBtnAddTodo = () => {
        clickAdd();
        naviagive("/AddItem");
    }
    return (
        <button className="menu-button menu-addTodo" onClick={handleClickBtnAddTodo}>
           Thêm công việc
        </button>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        clickAdd: () => {
            dispatch(clickAdd());
        },
    }
}
export default connect(null,mapDispatchToProps)(BtnAddTodo);