import Student from "./student";
function Trainees(){
    return(
        <div>
            <h2>Trainees List</h2>
            {/* display child components here! */}
            <Student name="Harsha" rollno="21A91A05G6" branch="CSE" clg="AEC"/>
            <Student name="Phani" rollno="21A91A05D8" branch="CSE" clg="AEC"/>
            <Student name="Manoj" rollno="21A91A05G0" branch="CSE" clg="AEC"/>
            <Student name="Varun" rollno="21A91A05D9" branch="CSE" clg="AEC"/>
        </div>
    )
};
export default Trainees;