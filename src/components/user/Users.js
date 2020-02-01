import React, { useContext } from "react";
import Useritem from "./Useritem";
import PropTypes from "prop-types";
import Spinner from "../layout/Spinner";
import GithubContext from "../../context/github/githubContext";

const Users = (props) => {
    const githubContext = useContext(GithubContext);

    if(githubContext.loading === "loading") {
        return <Spinner/>
    } else {
        return (        
            <div style={userStyle} className="cards-container"> 
                {githubContext.users.map(user => {
                return <Useritem key={user.id} user={user}/>
                })}
            </div> 
        ) 
    }      
}

const userStyle = {
    padding: '50px',
    display: "grid",
    gridTemplateColumns: 'repeat(auto-fit,minmax(200px, 1fr))',
    gridGap: '10px'
}

Users.propTypes = {
    // users: PropTypes.array.isRequired,
    // loading: PropTypes.string.isRequired
}

export default Users;