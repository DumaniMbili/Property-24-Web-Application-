import React from 'react';
import {Link} from "react-router-dom"

const Navbar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <Link className="navbar-brand" to="/"><h1 className="font-weight-bold text-dark">Property<span className="text-danger">24</span></h1></Link>

            <div className="collapse navbar-collapse " id="navbarTogglerDemo03">
                <ul className="navbar-nav mr-auto mt-2 mt-md-0">
                <li className="nav-item">
                    <Link className="nav-link text-dark" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-dark" to="/profile">Profile</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-danger" to="/auth">Logout</Link>
                </li>

                </ul>
            </div>
        </nav>
     );
}
 
export default Navbar;