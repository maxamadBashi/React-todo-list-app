import React, { useContext, useCallback } from 'react';
import { TodoContext } from '../context/TodoProvider';

const TodoFilter = () => {
    const { state, dispatch } = useContext(TodoContext);

    const setFilter = useCallback((filter) => {
        dispatch({ type: 'SET_FILTER', payload: filter });
    }, [dispatch]);

    return (
        <>
        <div className="flex space-x-2 mt-4">
            <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded ${state.filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
                All
            </button>
            <button
                onClick={() => setFilter('active')}
                className={`px-4 py-2 rounded ${state.filter === 'active' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
                Active
            </button>
            <button
                onClick={() => setFilter('complete')}
                className={`px-4 py-2 rounded ${state.filter === 'complete' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
               completed
            </button>
        </div>
        </>
    );
};

export default TodoFilter;