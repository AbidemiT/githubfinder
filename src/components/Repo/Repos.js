import React from 'react';
import ReposItem from './RepoItems';


const Repos = ({repos}) => {
    return (
        <div>
            <h4>Repos</h4>
            {repos.map(repo => (
                <ReposItem repo={repo} key={repo.id}/>
            ))}
        </div>
    )
}

export default Repos;
