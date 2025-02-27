import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import { collegeRouter } from "./routes/college-route.js ";
import eventRouter from "./routes/eventRouter.js";

await mongoose.connect(process.env.Mongo_Url);

//create app
const app = express();
// use middleware
app.use(express.json());
app.use(express.static("eventBanners"));

// use routes
app.use(eventRouter);
app.use(collegeRouter);

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`server is listening on port ${port}`);

})