import { memo } from "react";

let i=1;
function Todos({ todos,settodo }) {
    // Reverse the order of todos
    const reversedTodos = [...todos].reverse();

    return (
        <div>
            {reversedTodos.map(todo => {
                console.log(todo._id);
               return <div key={todo._id}>
                    <h1>Title: <i>{todo.title}</i></h1>
                    <h2>Description: {todo.description}</h2>
                    <button onClick={()=>{
                        if(todo.completed)return;
                         fetch("http://localhost:3000/completed",{
                            method:"PUT",
                            body: JSON.stringify({
                               id:`${todo._id}`
                            }),
                            headers:{
                                "content-type":"application/json"
                            }
                        }).then(async(res)=>{
                           const data = await res.json();
                        //    alert(data.msg);/
                           fetch("http://localhost:3000/todos")
                           .then(async function(res){
                             const data = await res.json();
                             settodo(data.todos);
                           })
                        })
                    }}>  {todo.completed ? 'Done' : 'Mark as completed'}</button>
                </div>
})}
        </div>
    );
}

export default Todos;
