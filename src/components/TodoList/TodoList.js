import React from 'react'
import './TodoList.css'

const TodoList = ({ todos, handleEdit, handleDelete }) => {
  return (
    <ul className="all-todo">
          
    {todos.map((t) => {
      return <li className="single-todo">
        <span className="todo-text" key={t.id}>{t.todo}</span>
        <button className='edit-button' onClick={() => handleEdit(t.id)}>Edit</button>
        <button className='remove-button' onClick={() => handleDelete(t.id)} >Remove</button>
        </li>
      })}
      
  </ul>
  )
}

export default TodoList;