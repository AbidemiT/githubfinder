import React, {Fragment, useEffect, useContext} from 'react';
import Repos from "../../components/Repo/Repos";
import {Link} from "react-router-dom";
import GithubContext from "../../context/github/githubContext";

const User = ({match}) =>  {
    const githubContext = useContext(GithubContext);
    const {user, getUser,getUserRepos,repos,} = githubContext;
    useEffect(() => {
        getUser(match.params.login);
        getUserRepos(match.params.login);
        // eslint-disable-next-line
    }, []);

        const {avatar_url,bio,company,blog,email,followers,following,hireable,html_url,location,login,name,public_repos} = user;
        return (
            <Fragment>
                <Link to="/"> Back to Search</Link>
                <div className="user-container">
                    <img src={avatar_url} alt={`${name} github avatar`}/>
                    <div className="user-content">
                        <h1>{name}</h1>
                        {email && <p><strong>Email:</strong> {email}</p>}
                        <p><strong>Bio:</strong> <br/> {bio}</p>
                        <p><strong>Hireable:</strong>{" "}{hireable? "Yes ✔" : " No ❌"}</p>
                        <p>Location: {location}</p>
                        <span> Followers <span role="img" aria-label="gender-emoji">👬</span>: {followers}</span>
                        <span> Following <span role="img" aria-label="gender-emoji">👬</span>: {following}</span>
                        <Repos repos={repos}/>
                    </div>
                </div>
            </Fragment>
        )

}

export default User;
