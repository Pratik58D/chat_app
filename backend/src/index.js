import express from "express";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import dotenv from "dotenv";
import {connectDB} from "./lib/db.js";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();
const Port =  process.env.PORT || 5001

connectDB();
app.use(express.json());
app.use(cookieParser())

app.use("/api/auth",authRoutes);
app.use("/api/message",messageRoutes);


app.get("/home",(req,res)=>{
    res.send("hello pratik");
})

app.listen(Port,()=>console.log(`server is running ${Port} `))