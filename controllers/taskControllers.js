const { type } = require('os')
const taskModel = require ('../models/taskmodels')
const asyncHandler = require('express-async-handler')



const createTask = asyncHandler( async(req, res)=>{ 
    const { title, description } = req.body
    if(!title || !description){
        res.status(400)
       throw new Error("Please provide title and description")
    }
    const newTask= await taskModel.create({
        title,
        description
      })

      res.status(200).json({success:true, message:"New task created", newTask:newTask})
}
)







const getAllTask = asyncHandler( async(req, res)=>{ 
   
    const AllTasks = await taskModel.find({})

      res.status(200).json({success:true, message:"Get All Tasks", AllTasks:AllTasks})
}
)

const getSingleTask = asyncHandler( async(req, res)=>{ 
    const {id} = req.params
   
    const SingleTask = await taskModel.find({_id:id})

      res.status(200).json({success:true, message:"Get Single Task", SingleTask:SingleTask})
}
)




const deleteAllTask = asyncHandler( async(req, res)=>{ 
    const {id} = req.params
   
    const deletedTasks = await taskModel.deleteMany({})

      res.status(200).json({success:true, message:"Delete All Task"})
}
)

const deleteTask = asyncHandler( async(req, res)=>{ 
    const {id} = req.params
   
    const deletedTask = await taskModel.deleteOne({_id:id})

      res.status(200).json({success:true, message:"Task Deleted"})
}
)

const updateTask = asyncHandler( async(req, res)=>{ 
    const {id} = req.params
    const { title, description} = req.body
   const updatedTaskData = {title, description}
    const updatedTask = await taskModel.findByIdAndUpdate(id, updatedTaskData, { new: true });

      res.status(200).json({success:true, message:"Task Updated", updatedTask })
}
)




module.exports ={getAllTask,getSingleTask,createTask,updateTask,deleteTask,deleteAllTask}