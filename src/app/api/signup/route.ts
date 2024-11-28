import { Signupmodel } from "@/model/model"
import { NextResponse } from "next/server";


export async function POST(req:any) {
    console.log("jjjjjjjjjjjjj")
    let data=await req.json()
    if(data){
        let newData=new  Signupmodel(data)
        await newData.save();
        console.log(newData)
    }
    return NextResponse.json({
        success:true
    })
    
}
export async function GET(req:any) {
    let data=await Signupmodel.find()
    console.log(data)
    return NextResponse.json({
        success:true,
        data
    })
    
}