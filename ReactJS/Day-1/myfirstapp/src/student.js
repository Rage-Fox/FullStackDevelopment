function Student(props){
    return(
        <div style={{marginTop:"30px"}}>
            {/* Use curly braces to use a variable name */}
            <h3>Student name is {props.name} of bearing rollno {props.rollno} of branch {props.branch} in college {props.clg}</h3>
        </div>
    )
};
export default Student;