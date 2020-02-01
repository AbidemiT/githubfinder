import React from 'react'

const RepoItems = ({repo}) => {
    return (
        <div>
            <a href={repo.html_url}>{repo.name}</a>
        </div>
    )
}


export default RepoItems;