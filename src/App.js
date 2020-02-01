import React, {Fragment} from 'react';
import Navbar from "./components/layout/Navbar";
import about from "./components/pages/About";
import home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import Alert from "./components/layout/Alert";
import User from "./components/user/User";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";
import './App.css';

const App = () => {

    // const {users,user,loading,alert,repos} = this.state;
    let title = "GitHub Finder";

    return (
      <GithubState>
        <AlertState>
        <Router>
          <Fragment>
            <Navbar title={title}/>
            <Alert/>
            <Switch>
              <Route exact path="/" component={home}/>
              <Route exact path="/about" component={about}/>
              <Route exact path="/user/:login" render={props => (
                <Fragment>
                  <User {...props}/>
                </Fragment>
              )}/>
              <Route exact component={NotFound}/>
            </Switch>
          </Fragment>
        </Router>
        </AlertState>
      </GithubState>
        );

}

export default App;
