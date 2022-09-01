import { connect } from "react-redux/es/exports"
import { clearTodo } from "../../Action/index"
const ClearTodo = ({clearTodoList}) => {
    return (
        <div className="clear-todo">
            <button className="button-clear-todo" onClick={() => {clearTodoList()}}> Clear </button>
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
export default connect(null,mapDispatchToProps)(ClearTodo);