// If you pass any key values/arguments then we have to give "props" keyword inside brackets
function About(props){
    // <></> are called as React Fragment   s
    return(
        // For inline styling, we have to use two curly braces to mention the properties
        <div style={{background: "green", color:"white"}}>
            {/* Use the properties of props using the same name as we passed the argument in App.js */}
            <h1>This is my about page {props.name}</h1>
        </div>
    )
};
export default About;