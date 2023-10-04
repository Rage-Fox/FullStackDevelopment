// console.log("App Running!");
import express from "express";
// const express=require("express");
import mongoose from "mongoose";
import router from "./routes/user-routes";
import blogRouter from "./routes/blog-routes";
const app = express();
app.use(express.json());
app.use("/api/user",router);
app.use("/api/blog",blogRouter);
// app.use("/backendapi",(req,res,next)=>{
//     // '/' means default route(or) directory path
//     res.send("FSD AN Batch")
// });
// backend:/backendapi
// http://localhost:8000/backendapi
// app.use("/testing",(req,res,next)=>{
//     // '/' means default route(or) directory path
//     res.send("Testing Page")
// });
// app.listen(8000);
// http://localhost:8000/testing
// Everytime we change this file, we need to execute "npm start" command!
mongoose.connect(
    "mongodb+srv://admin:admin@cluster0.1zxtgjb.mongodb.net/?retryWrites=true&w=majority"
).then(() => app.listen(8000)).then(() => console.log("Securely connected to MongoDB and listening to port 8000")).catch((err) => console.log(err));