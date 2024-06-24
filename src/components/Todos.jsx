import { useState } from "react";
import { BsPlus, BsSearch } from "react-icons/bs";
import { addTodo, updateSearchTerm } from "../redux/action";
import { useDispatch, useSelector } from 'react-redux';
import FilterButtons from './FilterButtons';
import TodoList from "./TodoList";

const Todos = () => {
    const [newTodoText, setNewTodoText] = useState("");
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();
    const handleAddTodo = (text) => {
        dispatch(addTodo(text))
    }

    const handleAddTodoClick = () => {
        if (newTodoText.trim() !== '') {
            handleAddTodo(newTodoText.trim());
            setNewTodoText('')
        }
    }
    const handleSearchChange = (value) => {
        setSearchTerm(value);
        dispatch(updateSearchTerm(value));
    };

    return (
        <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded">
            <h2 className='mt-3 mb-6 text-2xl font-bold text-center uppercase'>Personal TODO APP</h2>
            <div className="flex items-center mb-4">
                <input
                    id="addTodoInput"
                    className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                    type="text"
                    placeholder="Add Todo"
                    value={newTodoText}
                    onChange={(e) => setNewTodoText(e.target.value)}
                />
                <button
                    className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
                    onClick={handleAddTodoClick}>
                    <BsPlus size={20} />
                </button>
            </div>


            <div className="flex items-center justify-between">
                <FilterButtons />
                <div className=" flex items-center mb-4">
                    <input value={searchTerm} onChange={(e) => handleSearchChange(e.target.value)}
                        type="text" className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                        placeholder="Search"></input>

                    <button className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
                        <BsSearch size={20} />
                    </button>
                </div>
            </div>
            <TodoList />
        </div>
    )
}

export default Todos
