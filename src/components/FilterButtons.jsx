import { useDispatch, useSelector } from "react-redux"
import { filterTodos, markAllComleted } from "../redux/action";
import React from 'react';

const FilterButtons = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.filter);

  const handleFilter = (filter) => {
    dispatch(filterTodos(filter));
  }

  const handelMarKAllComplete = () => {
    dispatch(markAllComleted());
  }
  return (
    <div className="flex space-x-4 items-center">
      <select
        className="text-sm px-2 py-1 rounded border border-gray-300 focus:outline-none"
        value={currentFilter}
        onChange={(e) => handleFilter(e.target.value)}
      >
        <option value="All">All</option>
        <option value="COMPLETED">Completed</option>
        <option value="INCOMPLETED">Incompleted</option>
      </select>

      <button className="text-sm px-2 py-1 bg-purple-500 text-white ml-2 rounded"
        onClick={(e) => handelMarKAllComplete()}>Mark All Completed</button>
    </div>
  )
}

export default FilterButtons
