import { useEffect, useState } from "react";
import React from "react";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todo";
import axios from "axios";
import './App.css';


function App() {
  const [todos, setTodos] = useState([]);

  useEffect(function () {
    // fetch("http://localhost:3000/todo")
    //   .then(async function(res) {
    //   const json = await res.json();
    //   setTodos(json.todos);
    //   console.log(json.todos);
    axios.get("http://localhost:3000/todo")
      .then(function (res) {
        const json = res.data;
        setTodos(json.todos);
      })
    console.log("testing backend connection");
  }, [])


  return (
    <>
      {/* <div className="container">
      <nav className="head">My Tasks</nav>
      <div className="CreateTodo"> </div>
      <div className="ShowTodo"></></div>
    </div> */}
      <div className="container">
      <nav className="text-center text-2xl font-bold  m-4 mb-6"><h1>My Tasks</h1></nav>
      <div className="flex flex-row">
      <div className="basis-1/2  "><CreateTodo/></div>
      <div className="basis-1/2"><Todos todos={todos}/></div>
      </div>
        
      </div>
    </>
  );
}
export default App; 