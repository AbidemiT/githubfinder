import React, {useState, useContext} from "react";
import PropTypes from 'prop-types'
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

const SearchUser = ({searchUser}) => {
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);

    const [text, setText] = useState("");
    const [clearUsers, setClear] = useState(false);

   const onSubmit = (e) => {
        e.preventDefault();
        if (!text) {
            alertContext.alertStatus("Field Can't be empty","error")
        } else {
            githubContext.searchUser(text);
            setText("")
        }
    }

   const onChange = (e) => {
        setText(e.target.value);
    }

    const onClick = () => {
        setClear(true);
        githubContext.clear(clearUsers);
    }

        return (
            <div className="search-container">
                <form className="form" onSubmit={onSubmit}>
                    <input className="search-input" name="text" type="text" placeholder="Search Github User..." value={text} onChange={onChange}/>
                    <input type="submit" className="submit" value="Search"/>
                </form>
                {githubContext.users.length > 0 && <button className="clear" onClick={onClick}>Clear</button>}
            </div>
        )
}

SearchUser.propTypes = {
    // clear: PropTypes.func.isRequired,
    // alertStatus: PropTypes.func.isRequired,
    // showClear: PropTypes.bool.isRequired
}

export default SearchUser;