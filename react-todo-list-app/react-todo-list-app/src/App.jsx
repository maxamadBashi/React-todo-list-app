import React from 'react';
import { TodoProvider } from './context/TodoProvider';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoFilter from './components/TodoFilter';

const App = () => {
    return (
        <TodoProvider>
            <div className="max-w-md mx-auto mt-10 p-4 bg-white rounded shadow">
                <h1 className="text-2xl font-bold text-center">Todo App</h1>
                <TodoForm />
                <TodoFilter />
                <TodoList />
            </div>
        </TodoProvider>
    );
};

export default App;