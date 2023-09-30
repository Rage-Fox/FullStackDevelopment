// console.log("App Running!");
import express from "express";
// const express=require("express");
const app=express();
app.use("/backendapi",(req,res,next)=>{
    // '/' means default route(or) directory path
    res.send("FSD AN Batch")
});
// backend:/backendapi
// http://localhost:8000/backendapi
app.use("/testing",(req,res,next)=>{
    // '/' means default route(or) directory path
    res.send("Testing Page")
});
app.listen(8000);
// http://localhost:8000/testing
// Everytime we change this file, we need to execute "npm start" command!