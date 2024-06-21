import mongoose from "mongoose";

export const connectDB = async() =>{
    await mongoose.connect('mongodb+srv://pranav:pranav@cluster0.cseo9w2.mongodb.net/food-delivery').then(()=>{
        console.log("Connected to DB")
    })
}