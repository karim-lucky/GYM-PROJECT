import App from "next/app";
import {connectDB} from "./app/lib/db"
export function register(){
    connectDB();
}