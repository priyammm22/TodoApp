import { useState } from "react";

export function CreateTodo({todo,settodo})
{    
    const [title,setTitle] = useState("");
    const [description,setdescription] = useState("");
    return <div>
        <input type="text" placeholder="title" onChange={function(e){
            const value = e.target.value;
            setTitle(value);
        }} />
       <br />
       <input type="text" placeholder="description" onChange={function(e){
        const value = e.target.value;
        setdescription(value);
       }} /> <br />
       <button onClick={()=>{
        fetch("http://localhost:3000/todo",{
            method:"POST",
            body: JSON.stringify({
                title:`${title}`,
                description:`${description}`
            }),
            headers:{
                "content-type":"application/json"
            }
        }).then(async(res)=>{
           const data = await res.json();
        //    alert(data.msg);
           fetch("http://localhost:3000/todos")
           .then(async function(res){
             const data = await res.json();
             settodo(data.todos);
           })
        })
 
       }}>Add todo</button>
    </div>
}