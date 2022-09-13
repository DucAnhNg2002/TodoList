import { useNavigate } from "react-router-dom";
import "../../../grid.css";
import { clickAdd } from "../../Action";
import { connect } from "react-redux";
const BtnAddTodo = ({add}) => {
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
        }
    }
}
export default connect(null,mapDispatchToProps)(BtnAddTodo);