function Events(){
    // function getdata(){
    //     alert("Clicked using normal functions!");
    // };
    const withoutdata=()=>{
        alert("Clicked using arrow functions!");
    };
    const withdata=(name)=>{
        alert("Clicked using arrow functions! "+name);
    };
    let trainees=[{
        name:"Harsha",
        rollno:"21A91A05G6"
    },{
        name:"Phani",
        rollno:"21A91A05D8"
    }];
    const objectdata=(res)=>{
        res.map((ele,i)=>{
            document.write((i+1)+") "+ele.name+" "+ele.rollno+"<br>");
        });
    };
    return(
        <div>
            <h1>Events in React JS</h1>
            {/* Don't use () when calling a function without arguments */}
            <button onClick={withoutdata}>onClick without arguments</button>
            <br></br>
            {/* While passing arguments, remember to use anonymous functions to call normal functions */}
            <button onClick={()=>withdata("Harsha")}>onClick with arguments</button>
            <br></br>
            {/* Passing an object into an arrow function */}
            <button onClick={()=>objectdata(trainees)}>onClick Object</button>
        </div>
    );
};
export default Events;