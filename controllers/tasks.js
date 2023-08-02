const Task = require('../models/tasks')

module.exports = {
    index: async (req, res)=>{
        const tasks = await Task.find({})
        res.render('index', {tasks: tasks})
    },
    create: async (req, res)=>{
        const task = new Task({title: req.body.title})
        try{
           await task.save().then(()=> res.redirect('/'))
        }catch(e){
            res.redirect('/')
        }
    },
    edit: async (req,  res)=>{
        const id = req.params.id
        const tasks = await Task.find({})
        res.render('edit', {tasks: tasks, idTask: id})
    },
    update: async (req, res)=>{
        const id  = req.params.id
        try{
            await Task.findByIdAndUpdate(id, {title: req.body.title})
        }catch(e){
            res.send(500, err)
        }
        res.redirect('/')
    },
    delete: async (req, res)=>{
        try{
           await Task.deleteOne({_id: req.params.id})
        }catch(e){
            console.log(`there was an error: ${e}`)
        }
        res.redirect('/')
    }
}