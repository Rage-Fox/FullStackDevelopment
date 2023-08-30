import Logo from './logo.svg';
// We are importing an svg image file to this home.js file
function Home(){
    // <></> are called as React Fragment   s
    return(
        <>
            <h1>This is my home page</h1>
            <img src={Logo}></img>
        </>
    )
};
export default Home;