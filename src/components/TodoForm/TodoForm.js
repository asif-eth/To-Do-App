import React from 'react'
import './TodoForm.css'

const todoForm = ({ handleSubmit, todo, editId, setTodo }) => {
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
        <input className="todo-input" type="text" value={todo} onChange={(e)=>setTodo(e.target.value)} />
        <button className='add-button' onClick={handleSubmit} type="submit">{editId ? "Done" : "Add"}</button>
    </form>
  )
}

export default todoForm;
