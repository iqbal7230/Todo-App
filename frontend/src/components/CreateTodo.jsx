import { useState } from "react";

export function CreateTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg border border-gray-200 p-6 mt-10">
            <h1 className="text-2xl text-center mb-5 font-bold text-gray-700">Create a New Todo</h1>
            
            <div className="mb-4">
                <input
                    className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    type="text"
                    placeholder="Enter title"
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>

            <div className="mb-4">
                <textarea
                    className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter description"
                    onChange={(e) => setDescription(e.target.value)}
                    rows={4}
                />
            </div>

            <div className="text-center">
                <button
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
                    onClick={() => {
                        fetch("http://localhost:3000/todo", {
                            method: "POST",
                            body: JSON.stringify({
                                title,
                                description,
                            }),
                            headers: {
                                "Content-type": "application/json"
                            }
                        })
                            .then(async (res) => {
                                const json = await res.json();
                                alert("Todo added");
                            });
                    }}
                >
                    Add Todo
                </button>
            </div>
        </div>
    );
}
