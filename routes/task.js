const express = require('express')
const router = express.Router()
const {getAllTask,getSingleTask,createTask,updateTask,deleteTask,deleteAllTask} =require('../controllers/taskControllers')


router.get('/getAllTasks', getAllTask)
router.get('/getSingleTask/:id', getSingleTask)
router.post('/createTask', createTask)
router.put('/updateTask/:id', updateTask)
router.delete('/deleteTask/:id', deleteTask)
router.delete('/deleteAllTask', deleteAllTask)


module.exports = router