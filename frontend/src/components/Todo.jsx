import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function Todos() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = () => {
        axios.get("http://localhost:3000/todos")
            .then((res) => {
                setTodos(res.data.todos);
            })
            .catch((error) => {
                console.error('Error fetching todos:', error);
            });
    };

    const markAsComplete = (id) => {
        axios.put('http://localhost:3000/completed', { id })
            .then((res) => {
                if (res.status === 200) {
                    setTodos(todos.map(todo =>
                        todo._id === id ? { ...todo, completed: true } : todo
                    ));
                }
            })
            .catch((error) => {
                console.error('Error marking todo as complete:', error);
            });
    };

    const deleteTodo = (id) => {
        axios.delete(`http://localhost:3000/todos/${id}`)
            .then((res) => {
                if (res.status === 200) {
                    setTodos(todos.filter(todo => todo._id !== id));
                }
            })
            .catch((error) => {
                console.error('Error deleting todo:', error);
            });
    };

    return (
        <div className="max-w-2xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-6">Todo List</h1>
            {todos.length === 0 ? (
                <p className="text-center text-gray-500">No todos available</p>
            ) : (
                <div className="space-y-4">
                    {todos.map((todo) => (
                        <div 
                            key={todo._id} 
                            className={`p-4 rounded-lg shadow-md ${todo.completed ? 'bg-green-100' : 'bg-white'} border border-gray-200`}
                        >
                            <h2 className="text-xl font-semibold text-gray-800">{todo.title}</h2>
                            <p className="text-gray-600">{todo.description}</p>
                            <div className="mt-3 flex space-x-2">
                                <button
                                    onClick={() => markAsComplete(todo._id)}
                                    disabled={todo.completed}
                                    className={`px-4 py-2 rounded-md text-white ${todo.completed ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
                                >
                                    {todo.completed ? "Completed" : "Mark as Complete"}
                                </button>
                                <button
                                    onClick={() => deleteTodo(todo._id)}
                                    className="px-4 py-2 rounded-md text-white bg-red-500 hover:bg-red-600"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}