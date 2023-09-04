import React, { useState } from 'react';
import TodoFrom from './TodoFrom';
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo';
uuidv4();

const TodoWrapper = () => {
    const [todos, setTodos] = useState([])

    const addTodo = (todo) => {
        setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }])
        console.log(todos)
    }

    return (
        <div className='TodoWrapper'>
            <TodoFrom addTodo={addTodo} />
            {todos.map((todo, index) => (
                <Todo task={todo} key={index} />
            ))}

        </div>
    );
};

export default TodoWrapper;