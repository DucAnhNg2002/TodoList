import AddItem from "./TodoList/AddItem"
import TodoList from "./TodoList/TodoList"

import "./HomePage.css";
export default function HomePage() {
    return (
        <div className="home-page">
            <AddItem/>
            <TodoList/>
        </div>
    )
}