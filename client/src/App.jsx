import { useState } from 'react'
import './App.css'
import { Todos } from "./components/Todos"
import { CreateTodo } from './components/CreateTodo';

function App() {
  const [todos, setTodos] = useState();

   return (   
    <div>
      <CreateTodo/>
      <Todos todos={setTodos(todos)} />
    </div>
   )
}  

export default App;   
