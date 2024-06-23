import { useState ,useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { CreateTodo } from "./Components/CreateTodo";
import Todos from './Components/Todos';

function App() {
  const [todos, settodos] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:3000/todos")
  //   .then(async function(res){
  //     const data = await res.json();
  //     settodos(data.todos);
  //     // console.log(data.todos);
  //   })
  //  },[]);
  useEffect(() => {
    fetch("http://localhost:3000/todos")
    .then(async function(res){
      const data = await res.json();
      settodos(data.todos);
    })
   },[]);
  return (
    <div>
      <CreateTodo todo={todos} settodo={settodos}></CreateTodo>
      <Todos  todos={todos} settodo={settodos} ></Todos>
    </div>
  );
}

export default App;
