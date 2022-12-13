import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const morgan = require('morgan');
require('dotenv').config();

const app = express();

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=> console.log("DB Connected!!!"))
.catch((err)=>{console.log("ERROR =>", err )})

app.use(express.json({limit: '5mb'}));
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.post('/api/register', (req,res)=>{
    console.log("REGISTER ENDPOINT =>", req.body)
})

const port = process.env.PORT || 8000;

app.listen(port, ()=>{
    console.log(`Server running on the ${port}`)
})