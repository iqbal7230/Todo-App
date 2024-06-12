export function Todos({todos}) {
    

    function handleRemove(id) {
        fetch("http://localhost:3000/todo:"+{id}, {
            method: "DELETE",
            body: JSON.stringify({
                id: id
            }),
            headers: {
                "Content-type": "application/json"
            }
        })
            .then(async function (res) {
                const json = await res.json();
                alert("Todo removed");
            })
    }


    return <div className="border-4 mt-3 p-4">
        {todos.map(function(todo) {
           
            return (
                <div className="border-4 flex flex-col">
                    <h1 className="text-xl font-bold m-1">{todo.id} {todo.title}</h1>
                    <p className="m-2">{todo.description}</p>
                    <div className="flex flex-row">
                        <button className="bg-sky-500 hover:bg-sky-700 rounded-full p-2 pl-2 pt-2 m-3">{todo.completed ? "Completed" : "Mark as Complete"}</button>
                        <button className="bg-sky-500 hover:bg-sky-700 rounded-full p-2 pl-2 pt-2 m-3" onClick={() => handleRemove(todo.id)}>Remove</button>
                        <button className="bg-sky-500 hover:bg-sky-700 rounded-full p-2 pl-2 pt-2 m-3">Edit</button>
                    </div>
                </div>
            );
        })} 
    </div>
}