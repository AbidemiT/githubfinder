import React from "react";
import PropTypes from "prop-types";

const Foot = (props) =>  {

    return (
        <footer>
            <div className="footer-container">
                <div className="logo">
                    <h3>{props.title}</h3>
                </div>
                <p>Copyright &copy; Tiamiyu Sikiru Abidemi 2019.</p>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </footer>
    )
}

Foot.propTypes = {
    title : PropTypes.string.isRequired
}

export default Foot;
