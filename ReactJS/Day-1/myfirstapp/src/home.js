import Logo from './logo.svg';
// We are importing an svg image file to this home.js file
function Home(){
    // <></> are called as React Fragment   s
    return(
        <>
            <h1>This is my home page</h1>
            <p>This is an Image</p>
            <img src={Logo} height="500px" width="800px"></img>
        </>
    )
};
export default Home;