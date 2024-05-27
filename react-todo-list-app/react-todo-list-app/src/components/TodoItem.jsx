import React, { useContext, useCallback } from 'react';
import { TodoContext } from '../context/TodoProvider';

const TodoItem = ({ todo }) => {
    const { dispatch } = useContext(TodoContext);

    const toggleTodo = useCallback(() => {
        dispatch({ type: 'TOGGLE_TODO', payload: todo.id });
    }, [dispatch, todo.id]);

    const removeTodo = useCallback(() => {
        dispatch({ type: 'REMOVE_TODO', payload: todo.id });
    }, [dispatch, todo.id]);

    return (
        <li className="flex items-center justify-between px-4 py-2 bg-white border-b">
            <span
                className={`flex-grow cursor-pointer ${todo.completed ? 'line-through text-gray-500' : ''}`}
                onClick={toggleTodo}
            >
                {todo.text}
            </span>
            <button onClick={removeTodo} className="ml-4 text-red-500 hover:text-red-700">
                Remove
            </button>
        </li>
    );
};

export default TodoItem;