import { BsToggleOff, BsToggleOn, BsTrash } from "react-icons/bs"
import { useDispatch } from "react-redux"
import { markComleted, markIncomleted, toggleTodo, removeTodo } from "../redux/action";
import { FaCheck, FaTimes } from "react-icons/fa";

export const TodoItem = ({ todo, index }) => {
    const dispatch = useDispatch();
    return (
        <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 py-2 gap-4">
            <div className="flex items-center">
                <span className="mr-4 text-gray-500">{index + 1}</span>
                <span className={`mr-4 ${todo.completed ? 'line-through text-red-500' : ' '}`}>{todo.text}</span>
            </div>
            <div className="space-x-3 ml-8">
                <button onClick={() => dispatch(toggleTodo(index))} className="mr-2 text-sm bg-blue-500 text-white sm:px-2 py-1 rounded">{todo.completed ? <BsToggleOff /> : <BsToggleOn />}</button>
                {
                    !todo.completed && (
                        <button onClick={() => dispatch(markComleted(index))} className="mr-2 text-sm bg-blue-500 text-white sm:px-2 py-1 rounded"><FaCheck /></button>
                    )
                }
                {
                    todo.completed && (
                        <button onClick={() => dispatch(markIncomleted(index))} className="mr-2 text-sm bg-yellow-500 text-white sm:px-2 py-1 rounded"><FaTimes /></button>
                    )
                }
                <button onClick={() => dispatch(removeTodo(index))} className="mr-2 text-sm bg-blue-500 text-white sm:px-2 py-1 rounded"><BsTrash /></button>
            </div>
        </li>
    )
}

export default TodoItem