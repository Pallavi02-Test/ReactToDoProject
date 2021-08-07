import './App.css';
import Header from './MyComponents/Header'
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer'
import { AddTodo } from './MyComponents/Addtodo'
import React, { useState, useEffect } from 'react';

function App() {
  let initTodo
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    console.log(JSON.parse(localStorage.getItem("todos")))
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }
  const onDelete = (todo) => {

    setTodos(todos.filter((e) => {
      return e !== todo
    }))
    setTodos([])
    
    localStorage.setItem("todos", JSON.stringify(todos))
  }
  const addTodo = (title, desc) => {
    let sno;
    if (todos.length == 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);


  }
  const [todos, setTodos] = useState([...initTodo]);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [...todos])


  return (
    <>
      <Header searchBar={true} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
