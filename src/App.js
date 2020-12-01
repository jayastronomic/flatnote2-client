import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/tailwind.css";

import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchAuthUserSuccess } from "./actions/userActions";
import { removeAuthUser } from "./actions/userActions";
import { loggedIn } from "./actions/userActions";

import Login from "./components/registrations/Login";
import Nav from "./components/Nav";
import Home from "./components/Home";

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
    console.log(this.props);
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Login {...props} handleLogin={this.handleLogin} />
            )}
          />
          <Route
            exact
            path="/home"
            render={() => (
              <>
                <Nav />
                <Home />
              </>
            )}
          />
          <Route
            eaxct
            path="/new"
            render={() => {
              <>
                <Nav />
              </>;
            }}
          />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authUser: state.authUser,
    loggedInStatus: state.loggedIn,
  };
};

const mapDispatchToProps = {
  fetchAuthUserSuccess,
  loggedIn,
  removeAuthUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
