import mongoose from "mongoose";
import 'dotenv/config';


const mongoUri = process.env.Mongo_Url



 export const dbConnection = () => {

    mongoose.connect(mongoUri).then(() => {
        console.log('Database is connected');
        
    })

}