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
            <Link to="reacthooks">ReactHooks</Link>
        </div>
    )
};
export default Menu;