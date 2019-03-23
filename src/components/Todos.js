import React from 'react';
import Todo from './Todo.js';

const Todos = ({todos, handleDelete, handleCheck}) => <div className="todos">
  {
      todos.map((todo) => <Todo key={todo.id} todo={todo} handleDelete={handleDelete} handleCheck={handleCheck}/>)
    }
</div>

export default Todos;