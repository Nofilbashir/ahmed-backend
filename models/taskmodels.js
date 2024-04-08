const mongoose = require('mongoose')
const taskModel= mongoose.Schema({
    title: {
        type: String, // or mongoose.Schema.Types.String
        required: [true, "please provide title of task"],
      },
    description:{
                type:String,
                required: [true, 'Please provide task description'],
            },
       
},{timestamps:true}
)

module.exports = mongoose.model('taskModel', taskModel)