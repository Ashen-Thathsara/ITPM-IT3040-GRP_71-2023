const express = require('express');
const notes = require('./Data/notes')
const dotenv = require('dotenv');
const { connect } = require('mongoose');
const connectDB = require('./config/db')
const userRoutes = require ('./routes/userRouter');
const categoryRoutes = require('./routes/categoryRouter');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');
const path = require('path'); // nodejs module

const app = express();
dotenv.config();
connectDB();
app.use(express.json());

//---------deployment--------------//
// __dirname= path.resolve()
// if(process.env.NODE_ENV==='production'){
//  app.use(express.static(path.join(__dirname,'/frontend/build')));
//  app.get('*',(req,res)=>{
//   res.sendFile(path.resolve(__dirname,'frontend','build','index.html'))
//  })
// }else{
//     app.get("/",(res,req)=>{
//          res.send("API is running...")
// })
// }

//---------create routes--------------//
app.use('/api/users',userRoutes);
app.use('/api/category', categoryRoutes);

app.use(notFound);
app.use(errorHandler);


//------create port to connect--------------//
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server started on PORT ${PORT} `));
