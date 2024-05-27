import React, { useContext, useMemo } from 'react';
import { TodoContext } from '../context/TodoProvider';
import TodoItem from './TodoItem';

const TodoList = () => {
    const { state } = useContext(TodoContext);

    const filteredTodos = useMemo(() => {
        switch (state.filter) {
            case 'completed':
                return state.todos.filter(todo => todo.completed);
            case 'pending':
                return state.todos.filter(todo => !todo.completed);
            default:
                return state.todos;
        }
    }, [state.todos, state.filter]);

    return (
        <ul className="mt-4 space-y-2">
            {filteredTodos.map(todo => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    );
};

export default TodoList;