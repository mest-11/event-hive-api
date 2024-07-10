import express from "express";
import mongoose from "mongoose";
 import "dotenv/config";
import { collegeRouter } from "./routes/college-route.js ";


await mongoose.connect(process.env.Mongo_Url);



//create app

const app = express();




//
app.use(express.json())

app.use(collegeRouter);





const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`App is done ${port} channel`)

})