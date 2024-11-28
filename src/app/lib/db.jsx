import mongoose, { connection } from "mongoose";





export function connectDB(){
    mongoose.connect("mongodb://localhost:27017/mySignup").then((connection)=>{

        console.log(connection);
        console.log("db connect successfull")
    })
}










