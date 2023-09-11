import {Link} from "react-router-dom";
function Menu(){
    return(
        <div>
            <Link to="home">Home</Link>&nbsp;|&nbsp;
            <Link to="about">About</Link>&nbsp;|&nbsp;
            <Link to="services">Services</Link>&nbsp;|&nbsp;
            <Link to="contact">Contact</Link>&nbsp;|&nbsp;
            <Link to="student">Student</Link>&nbsp;|&nbsp;
            <Link to="trainees">Trainees</Link>&nbsp;|&nbsp;
            <Link to="events">Events</Link>&nbsp;|&nbsp;
            <Link to="reacthooks">ReactHooks</Link>&nbsp;|&nbsp;
            <Link to="useeffect">UseEffect</Link>&nbsp;|&nbsp;
            <Link to="products">Products</Link>&nbsp;|&nbsp;
            <Link to="newproducts">New Products</Link>&nbsp;|&nbsp;
        </div>
    )
};
export default Menu;