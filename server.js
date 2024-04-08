const express = require('express') //importing express
const app = express() //initializing express
const cors = require('cors')
const taskRoutes = require('./routes/task')
const dotenv = require('dotenv').config()
const connectDB = require('./DB/DB')
const color = require('colors')
const PORT =3000
const {errorHandler} = require('./middleware/errorMiddleWare')

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())



app.get('/',(req,res)=>{res.send("Hi from server")} ) //browser is getting response from /ahmed url
app.use('/api/task',taskRoutes)

app.use(errorHandler)
const start = async()=>{
    try{
        await connectDB()
        app.listen(PORT , ()=>{console.log(`server running on port ${PORT}`.bgGreen);})
    }catch(err){
        console.log(err)
    }
}

start()