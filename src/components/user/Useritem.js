import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const UserItem = (props) => {

    const {avatar_url, login, html_url} = props.user;

    return (
        <div className="card">
            <img src={avatar_url} alt="" className="round-img"/>
            <h3>{login}</h3>
            <Link to={`/user/${login}`} className="cta">More</Link>
        </div>
    )
}

UserItem.propTypes = {
    user : PropTypes.object.isRequired
}

export default UserItem;