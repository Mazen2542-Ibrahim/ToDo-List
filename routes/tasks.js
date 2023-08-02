const router = require('express').Router()
const taskController = require('../controllers/tasks')

// find all tasks
router.get('/', taskController.index)

// create a new task
router.post('/create', taskController.create)

// update a task
router.get('/edit/:id', taskController.edit)
router.put('/edit/:id', taskController.update)

// delete a task
router.delete('/delete/:id', taskController.delete)


module.exports = router