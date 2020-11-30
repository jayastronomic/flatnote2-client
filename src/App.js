import "./styles/main.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchAuthUserSuccess } from "./actions/userActions";
import { removeAuthUser } from "./actions/userActions";
import { loggedIn } from "./actions/userActions";

import Login from "./components/registrations/Login";

const API = "http://localhost:3001/api/v1/logged_in";

class App extends Component {
  handleLogout = (obj) => {
    this.props.removeAuthUser(obj.user);
    this.props.loggedIn(obj.logged_in);
  };

  handleLogin = (obj) => {
    this.props.fetchAuthUserSuccess(obj.user);
    this.props.loggedIn(obj.logged_in);
  };

  loginStatus = () => {
    fetch(API, { credentials: "include" })
      .then((resp) => resp.json())
      .then((obj) => {
        if (obj.logged_in) {
          this.handleLogin(obj);
        } else {
          this.handleLogout(obj);
        }
      });
  };

  componentDidMount() {
    this.loginStatus();
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Login handleLogin={this.handleLogin} />}
          />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authUser: state.authUser,
    loggedIn: state.loggedIn,
  };
};

const mapDispatchToProps = {
  fetchAuthUserSuccess,
  loggedIn,
  removeAuthUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
