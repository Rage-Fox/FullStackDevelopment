import { useState } from "react";
function Form(){
    const [name,setname]=useState("");
    const [formdata,setformdata]=useState({
        roll:"",
        college:""
    });
    // Using an object inside above useState method
    function handleSubmit(event){
        event.preventDefault();
        // It'll keep the values in the input fields even after clicking submit button and it prevents giving the data value at the end of the url
        console.log(name);
        console.log(formdata);
    }
    return(
        <div>
            <h1>This is a form page</h1>
            <form onSubmit={handleSubmit}>
                <label>Name: </label>
                <input type="text" name="name" onChange={(e)=>setname(e.target.value)} />
                <br />
                <label>Roll Number: </label>
                <input type="text" name="rollnumber" value={formdata.roll} onChange={(e) => setformdata({...formdata, roll: e.target.value})} />
                {/* Replaces data to newly entered data */}
                <br />
                <label>College: </label>
                <input type="text" name="college" value={formdata.college} onChange={(e) => setformdata({...formdata, college: e.target.value})} />
                <br />
                <input type="submit" name="submit" value="submit" />
            </form>
        </div>
    );
}
export default Form;