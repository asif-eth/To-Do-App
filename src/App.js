import React, { useState } from "react"
import './App.css';

function App() {

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, seteditId] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault();

    if(editId){
      const editTodo=todos.find((i)=>i.id === editId);
      const updatedTodos=todos.map((t) => 
        t.id === editTodo.id
        ?(t= {id: t.id, todo})
        :{id:t.id, todo:t.todo}
      );
      setTodos(updatedTodos);
      seteditId(0);
      setTodo("");
      return;
    }

    if(todo !== ""){
      setTodos([{id:`${todo}-${Date.now()}` ,todo:todo }, ...todos]);
      setTodo("");
    }
  }

  const handleDelete = (id) => {
    const delTodo = todos.filter((to)=> to.id !== id);
    setTodos([...delTodo]);
  }

  const handleEdit = (id) => {
    const editTodo=todos.find((i) => i.id === id);
    setTodo(editTodo.todo);
    seteditId(id);
  }

  return (
    <div className="App">
      <div className="container">

        <h1>To-Do List</h1>

        <form className="todo-form" onSubmit={handleSubmit}>
          <input className="todo-input" type="text" value={todo} onChange={(e)=>setTodo(e.target.value)} />
          <button onClick={handleSubmit} type="submit">{editId ? "Done" : "Add"}</button>
        </form>

        <ul className="all-todo">
          
          {todos.map((t) => {
            return <li className="single-todo">
              <span className="todo-text" key={t.id}>{t.todo}</span>
              <button onClick={() => handleEdit(t.id)}>Edit</button>
              <button onClick={() => handleDelete(t.id)} >Remove</button>
              </li>
            })}
         
        </ul>

      </div>
    </div>
  );
}

export default App;