/*
TODO {
    title:string,
    description:string,
    completed:boolean
}
*/

const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://priyammm_22:f8WB6d3sbsWINNbk@cluster0.wv7sk0g.mongodb.net/Todo_application');

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo:todo
}