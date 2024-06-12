const express = require('express')
const { createTodo, updateTodo } = require('./validation')
const { todo } = require('./db')
const cors = require('cors')


const app = express()
app.use(cors())

app.use(express.json())
let id = 0;

app.post('/todo', async (req, res) => {
    const data = req.body;
    const parseData = createTodo.safeParse(data)
    if (!parseData.success) {
        res.status(411).json({
            msg: 'you have sent wrong input'
        })
        return;
    }
    await todo.create({
        
        title: data.title,
        description: data.description,
        completed: false,
        id: id++
    })
    res.status(200).json({
        msg: 'Todo created successfully'
    })
})

app.get('/todo', async (req, res) => {
    const todos = await todo.find()

    res.json({
        todos
    })
})

app.put('/completed', async (req, res) => {
    const updataData = req.body;
    const parseupdateData = updateTodo.safeParse(updataData)

    if (!parseupdateData.success) {
        res.status(411).json({
            msg: 'you have sent wrong input'
        })
    }
    await todo.updateOne({
        _id: req.body.id
    },
        {
            completed: true
        })
    res.status(200).json({
        msg: 'Todo updated successfully'
    })
})
app.delete('/todo', async (req, res) => {
    const deleteData = req.body;
    await todo.deleteOne({  
        id: deleteData.id
    })
    res.status(200).json({
        msg: 'Todo deleted successfully'
    })
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})