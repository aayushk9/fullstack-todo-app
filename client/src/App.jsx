import { useState } from 'react'
import './App.css'
import { Todos } from "./components/Todos"
import { CreateTodo } from './components/CreateTodo';

function App() {
  const [todos, setTodos] = useState([]);

  fetch("http://localhost:3000/getTodos")
    .then(async(res) => {
      const json = await res.json();
      setTodos(json.todos)
    })
    
   return (   
    <div>
      <CreateTodo/>
      <Todos todos={setTodos(todos)} />
    </div>
   )
}  

export default App;   