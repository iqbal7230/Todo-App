const mongoose = require('mongoose');

// mongoose.connect("mongodb+srv://iqbal1234:Iqbal%401234@cluster0.zjjnyic.mongodb.net/")
mongoose.connect("mongodb+srv://iqbal1234:Iqbal%401234@cluster0.zjjnyic.mongodb.net/")

const todoSchema  = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})
const todo = mongoose.model('todo', todoSchema)

module.exports ={
    todo
}