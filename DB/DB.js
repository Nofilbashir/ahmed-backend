const mongoose = require('mongoose')

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log( `DB connected`.bgRed.underline.bgCyan)
    } 
    catch(err){
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDB