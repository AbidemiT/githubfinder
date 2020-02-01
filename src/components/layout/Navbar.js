import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const Navbar = (props) => {
    
    return (
        <nav className="navbar">
            <h3>{props.title}</h3>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    )
}

Navbar.defaultProps = {
    title: "Hello"
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}

export default Navbar;