import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';

const app=express();
app.use('/posts',postRoutes); 

app.use(bodyParser.json({ limit: "30mb",extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb",extended: true }));
app.use(cors());

const CONNECTION_URL='mongodb+srv://raghavkhatri:12345@cluster0.zl51i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const PORT=process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{})
    .then(()=>console.log(`Server is running on port: ${PORT}`))
    .catch((err)=>console.log(err.message));

app.listen(PORT);