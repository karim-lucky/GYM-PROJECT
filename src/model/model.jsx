import mongoose from "mongoose";




const SignupSchema=mongoose.Schema ({
    email: String,
    name: String,
    password: String,
    height: Number,
    weight: Number,
    level: String,
})
export const Signupmodel=mongoose.models.signup || mongoose.model("signup",SignupSchema)

