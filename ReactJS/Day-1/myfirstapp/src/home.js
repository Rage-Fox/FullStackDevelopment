function Home(){
    // Internal Styles
    let ss={
        background: "red",
        color: "green",
        marginTop: "100px",//Donot use the word as margin-top
    };
    // <></> are called as React Fragments
    return(
        <div style={ss}>
            <h1>This is my home page</h1>
        </div>
    )
};
export default Home;