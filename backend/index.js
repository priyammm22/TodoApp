const express = require("express")
const { todo } = require("./database");
const cors = require("cors");
const { createTodo, UpdateTodo } = require("./type");
// const {UpdateTodo} = require("./type.js");
const app = express();
app.use(express.json());
app.use(cors());
app.post("/todo", async function (req, res) {
    const payload = req.body;
    const parsedPayLoad = createTodo.safeParse(payload)
    if (!parsedPayLoad.success) {
        res.status(500).json({
            msg: parsedPayLoad.error
        });
        return;
    }
    await todo.create({
        title: payload.title,
        description: payload.description,
        completed: false
    })

    res.json({
        msg:"todo added succesfully"
    })

})

app.get("/todos", async function (req, res) {
    const todos = await todo.find({});
    res.json({
       todos
    })

})

app.put("/completed", async function (req, res) {
    const payload = req.body; // Assuming you're passing id in the request body
    const parsedPayLoad = UpdateTodo.safeParse(payload)
    if (!parsedPayLoad.success) {
        res.status(500).json({
            msg: parsedPayLoad.error
        });
        return;
    }
    try {
        await todo.updateOne({ _id: payload.id }, { completed: true }); // Using updateOne for updating
        res.json({
            msg: "Marked successfully"
        });
    } catch (error) {
        res.status(500).json({
            msg: "Error marking todo"
        });
    }
});

app.listen(3000,function(){

    console.log("app is running on port 3000")
})
/* input expected from body 
  title"string 
  description : string 
  completed : boolean
  validate using Zod
*/