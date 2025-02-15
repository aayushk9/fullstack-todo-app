import { useState } from "react";
export function CreateTodo(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return (
        <div>
            <input id="title" style={{
                padding: 10,
                margin: 10  
            }} type="text" placeholder="Enter the title of todo" onChange={(e) => {
                const value = e.target.value;
                setTitle(value)
            }}/> <br/>

            <input id="description" style={{  
                padding: 10,
                margin: 10  
            }} type="text" placeholder="Enter description for todo" onChange={(e) => {
                const value = e.target.value;
                setDescription(e.target.value)
            }}/><br/>   

            <button onClick={async() => {
                const data = await fetch("http://localhost:3000/getTodos", {
                  method: "POST",
                  body: JSON.stringify({
                     title: title,
                     description: description
                  })
                });
                const res = await data.json();
                alert("todo added")
            }}>Add a todo</button>
        </div>
    )
}


 