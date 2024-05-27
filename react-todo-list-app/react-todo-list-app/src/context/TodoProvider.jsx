import React, { createContext, useReducer , useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

// Initial state
const initialState = {
    todos: [],
    filter: 'all', // can be 'all', 'completed', 'pending'
};

// Reducer function
const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };
        case 'REMOVE_TODO':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload),
            };
        case 'TOGGLE_TODO':
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
                ),
            };
        case 'SET_FILTER':
            return {
                ...state,
                filter: action.payload,
            };
        default:
            return state;
    }
};

// Create context
export const TodoContext = createContext();

// Context provider component
export const TodoProvider = ({ children }) => {
    const [storedState, setStoredState] = useLocalStorage('todoState', initialState);
    const [state, dispatch] = useReducer(todoReducer, storedState);
    useEffect(() => {
        setStoredState(state);
      }, [state, setStoredState]);

    return (
        <TodoContext.Provider value={{ state, dispatch }}>
            {children}
        </TodoContext.Provider>
    );
};