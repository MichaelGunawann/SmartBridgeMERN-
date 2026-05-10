import {NavLink} from 'react-router-dom';
function NavBar(){
    return(
        <nav>
            <ul>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </ul>
        </nav>
    );
}

export default NavBar; 