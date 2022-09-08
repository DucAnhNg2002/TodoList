import { connect } from "react-redux/es/exports"
import { clearTodo } from "../../Action/index"

const BtnClearTodo = ({clearTodoList}) => {
    return (
        <div className="clear-todo">
            <button className = "menu-button menu-clearTodo" onClick={() => {clearTodoList()}}> Clear </button>
        </div>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        clearTodoList: () => {
            dispatch(clearTodo());
        },
    }
}
export default connect(null,mapDispatchToProps)(BtnClearTodo);