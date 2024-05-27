import React, { useRef, useContext } from 'react';
import { TodoContext } from '../context/TodoProvider';

const TodoForm = () => {
    const { dispatch } = useContext(TodoContext);
    const inputRef = useRef();

    const addTodo = (e) => {
        e.preventDefault();
        const text = inputRef.current.value.trim();
        if (text) {
            dispatch({
                type: 'ADD_TODO',
                payload: { id: Date.now(), text, completed: false },
            });
            inputRef.current.value = '';
        }
    };

    return (
        <form onSubmit={addTodo} className="flex space-x-2 mt-4">
            <input
                type="text"
                ref={inputRef}
                placeholder="Add a new todo"
                className="flex-grow px-4 py-2 border rounded"
            />
            <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
                Add
            </button>
        </form>
    );
};

export default TodoForm;