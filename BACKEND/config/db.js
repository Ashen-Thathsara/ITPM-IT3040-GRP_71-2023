const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const connectDB = async () =>{
    try{
      const conn = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        
      });
       console.log(`Mongo DB connected: ${conn.connection.host}`)
    }catch(error){
        console.error(`Error : ${error.message}`)
        process.exit();
    }     
};

module.exports = connectDB;