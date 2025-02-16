import { useState } from "react";
import { Todos } from "./Todos";

export function CreateTodo(props){
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
                fetch("http://localhost:3000/getTodos", {
                  method: "POST",  
                  body: JSON.stringify({
                     title: title,
                     description: description
                  }),
                 headers: {
                    "Content-type": "application/json"
                 }
                })
                .then(async function(res){
                    const json = await res.json();
                    alert("todo added")
                })

                props.setTodos([...todos,      
                    title,
                    description
                ])
            }}>Add a todo</button>
        </div>
    )
}


 