import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

import questionRoutes from './routes/Questions.js';

const app = express();
dotenv.config();
app.use(express.json({limit: "30mb", extended: true}))
app.use(express.urlencoded({limit: "30mb", extended: true}))
app.use(cors());

app.get('/',(req,res)=>{
    res.send('Server is running')
})

app.use('/',questionRoutes);
const PORT=process.env.PORT || 5000;

// app.listen(PORT,()=>{
//     console.log(`App startea on port ${PORT}`)
// })
const DATABASE_URL = process.env.CONNECTION_URL ;
mongoose.set('strictQuery',true);

mongoose.connect(DATABASE_URL,{ useNewUrlParser:true})
.then(()=>app.listen(PORT,()=>{console.log(`Server running on port ${PORT}`)}))
.catch((err)=>console.log(err.message))