import {Link} from "react-router-dom";
function Menu(){
    return(
        <div>
            <Link to="home">Home</Link>&nbsp;|&nbsp;
            <Link to="about">About</Link>&nbsp;|&nbsp;
            <Link to="services">Services</Link>&nbsp;|&nbsp;
            <Link to="contact">Contact</Link>
        </div>
    )
};
export default Menu;