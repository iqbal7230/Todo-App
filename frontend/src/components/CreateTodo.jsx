import { useState } from "react";

export function CreateTodo(props) {
    // react-query
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return <div className="border-4 m-5 p-10"> 
        <h1 className="text-2xl text-center mb-3 font-bold">Create a new todo</h1>
        <input className="border-2 border-black rounded-md m-2 p-2  " type="text" placeholder="title" onChange={function (e) {
            const value = e.target.value;
            setTitle(e.target.value);
        }}></input>
        <br />

        <input className="border-2 border-black rounded-md m-2 mt-3 p-2 "
            type="text" placeholder="description" onChange={function (e) {
                const value = e.target.value;
                setDescription(e.target.value);
            }}></input> <br />

        <button className="bg-sky-500 hover:bg-sky-700 rounded-full p-2 pl-2 pt-2 mt-9" onClick={() => {
            // axios
            fetch("http://localhost:3000/todo", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers: {
                    "Content-type": "application/json"
                }
            })
                .then(async function (res) {
                    const json = await res.json();
                    alert("Todo added");
                })
        }}>Add a todo</button>
        
    </div>
}