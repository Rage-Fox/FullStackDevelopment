function Student(props){
    return(
        <>
            {/* Use curly braces to use a variable name */}
            <tr><td>{props.name}</td><td>{props.rollno}</td><td>{props.branch}</td><td>{props.clg}</td></tr>
        </>
    )
};
export default Student;