import React from "react";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todo";
import './App.css';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center p-6">
      <nav className="text-center text-3xl font-bold text-blue-600 mb-8">
        <h1>My Tasks</h1>
      </nav>
      <div className="flex flex-col md:flex-row w-full max-w-4xl gap-6">
        <div className="bg-white shadow-lg rounded-lg p-4 md:basis-1/2">
          <CreateTodo />
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4 md:basis-1/2">
          <Todos />
        </div>
      </div>
    </div>
  );
}

export default App;
