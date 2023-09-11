import React,{ useEffect,useState } from "react";
function UseEffect(){
    // 1st way of usage
    useEffect(()=>{
        console.log("Testing");
    },[]);
    // Here, square brackets are known as dependencies.
    // Based on dependencies, the callback function will be called!
    // useEffect(()=>{callback function},[dependencies(optional)]);
    // One time execution based on the dependencies
    // 2nd way of usage:
    // useEffect(()=>{});// Without dependencies multiple times
    // 3rd way of usage:
    // useEffect(()=>{},[count]);
    // Based on the count value, the function call gets executed/called
    return(
        <div>
            <h1>This is a Use Effect</h1>
        </div>
    );
};
export default UseEffect;