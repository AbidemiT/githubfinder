import React, {useReducer} from "react";
import Axios from "axios";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import {
    SEARCH_USERS,
    GET_REPOS,
    GET_USER,
    SET_LOADING,
    CLEAR_USERS
} from "../types";

let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== "production") {
    githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
    githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
    githubClientId = process.env.GITHUB_CLIENT_ID;
    githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}



const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: "!loading"
    }

    //Dispatching to reducer
    const [state, dispatch] = useReducer(GithubReducer,initialState);

    // Search users
    const searchUser = async(text) => {
        setLoading();
        let url = "https://api.github.com/search/users?q=";
        let res = await Axios.get(`${url}${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`);
        // setUsers(res.data.items);
        dispatch({type: SEARCH_USERS,
        payload: res.data.items})
      }

    // get repos
    const getUserRepos = async(username) => {
        setLoading("loading");
        let url = "https://api.github.com/users/";
        let res = await Axios.get(`${url}${username}/repos?per_page=5&sort=asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`);
        dispatch({type: GET_REPOS,
        payload: res.data})

      }
      // Repos endpoint
      // https://api.github.com/users/username/repos
      // per_page=5
      // sort=asc

    // get users
    const getUser = async(username) => {
        setLoading("loading");
        let url = "https://api.github.com/users/";
        let res = await Axios.get(`${url}${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`);
        dispatch({type: GET_USER,
        payload: res.data})
      }

    // clear users
    const clear = (status) => dispatch({type: CLEAR_USERS});

    // set loading
    const setLoading = () => dispatch({type: SET_LOADING});

    return <GithubContext.Provider 
    value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUser,
        clear,
        getUser,
        getUserRepos
    }}
    >
        {props.children}
    </GithubContext.Provider>

}
export default GithubState;