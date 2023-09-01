import Student from "./student";
function Trainees(){
    let trainees=[{
        "name":"Harsha",
        "rollno":"21A91A05G6",
        "branch":"CSE",
        "clg":"AEC"
    },{
        "name":"Phani",
        "rollno":"21A91A05D8",
        "branch":"CSE",
        "clg":"AEC"
    },{
        "name":"Manoj",
        "rollno":"21A91A05G0",
        "branch":"CSE",
        "clg":"AEC"
    },{
        "name":"Varun",
        "rollno":"21A91A05D9",
        "branch":"CSE",
        "clg":"AEC"
    }];
    return(
        <>
            <h2>Trainees List</h2>
            {/* display child components here! */}
            {/* <Student name="Harsha" rollno="21A91A05G6" branch="CSE" clg="AEC"/>
            <Student name="Phani" rollno="21A91A05D8" branch="CSE" clg="AEC"/>
            <Student name="Manoj" rollno="21A91A05G0" branch="CSE" clg="AEC"/>
            <Student name="Varun" rollno="21A91A05D9" branch="CSE" clg="AEC"/> */}
            <table border={1} cellSpacing={0} align="center" width="300px">
                <tr><th>Name</th><th>Roll Number</th><th>Branch</th><th>College</th></tr>
            {
                trainees.map((ele,i)=>{
                    return(<Student name={ele.name} rollno={ele.rollno} branch={ele.rollno} clg={ele.clg} />)
                })
            }
            </table>
        </>
    )
};
export default Trainees;