import { useSelector } from "react-redux"
import TodoItem from "./TodoItem";

const TodoList = () => {
  const filteredTodos = useSelector((state) => {
    const todos = state.todos;
    const filter = state.filter;
    const searchTerm = state.searchTerm.toLowerCase();

    return todos.filter((todo) => {
      const matchFilter =
        (filter === 'COMPLETED' && todo.completed) ||
        (filter === "INCOMPLETED" && !todo.completed) ||
        (filter === "ALL");

      const matchesSearch = todo.text?.toLowerCase().includes(searchTerm);
      return matchFilter && matchesSearch;
    })
  })
  return (
    <div>
      <ul>
        {
          filteredTodos.length == 0 ?
            <li className="my-2 text-sm italic">Add First Note....</li>
            : ''
        }
        {
          filteredTodos.map((todo, index) => (
            <TodoItem key={index} todo={todo} index={index} />
          ))
        }
      </ul>
    </div>
  )
}

export default TodoList
