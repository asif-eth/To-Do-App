import React from 'react'

const TodoList = ({ todos, handleEdit, handleDelete }) => {
  return (
    <ul className="all-todo">
          
    {todos.map((t) => {
      return <li className="single-todo">
        <span className="todo-text" key={t.id}>{t.todo}</span>
        <button onClick={() => handleEdit(t.id)}>Edit</button>
        <button onClick={() => handleDelete(t.id)} >Remove</button>
        </li>
      })}
      
  </ul>
  )
}

export default TodoList;