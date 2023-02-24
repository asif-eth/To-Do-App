import React, { useState } from "react"
import './App.css';
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";

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

        <TodoForm 
          handleSubmit={handleSubmit}
          todo={todo}
          editId={editId}
          setTodo={setTodo}
        />

        <TodoList
          todos={todos}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />

      </div>
    </div>
  );
}

export default App;