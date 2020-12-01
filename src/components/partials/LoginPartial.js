import React, { Component } from "react";

const API = "http://localhost:3001/api/v1/login";

class LoginPartial extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: "",
    };
  }

  redirect = () => {
    this.props.history.push("/home");
  };

  raiseErrors = () => {
    return (
      <div className="flex pt-2">
        {this.state.errors.map((error) => {
          return (
            <p className="bg-white rounded px-4 text-red-600 shadow-lg text-xs border border-gray-300">
              {error}
            </p>
          );
        })}
      </div>
    );
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      user: {
        email: this.state.email,
        password: this.state.password,
      },
    };

    const payload = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
      credentials: "include",
    };

    fetch(API, payload)
      .then((resp) => resp.json())
      .then((resObj) => {
        if (resObj.logged_in) {
          this.props.handleLogin(resObj);
          this.redirect();
        } else {
          this.setState({
            email: "",
            password: "",
            errors: resObj.errors,
          });
          this.raiseErrors(resObj.errors);
        }
      });
  };

  render() {
    return (
      <div className="flex flex-col">
        <form onSubmit={this.handleSubmit} className="flex pt-4 space-x-10">
          <input
            onChange={this.handleChange}
            value={this.state.email}
            name="email"
            type="text"
            placeholder="email..."
            className="rounded border-b-2 focus:outline-none focus:border-blue-900 bg-blue-100 px-2 focus:shadow-lg hover:bg-blue-200"
          ></input>
          <input
            onChange={this.handleChange}
            value={this.state.password}
            name="password"
            type="password"
            placeholder="password..."
            className="rounded border-b-2 focus:outline-none focus:border-blue-900 bg-blue-100 px-2 focus:shadow-lg hover:bg-blue-200"
          ></input>
          <button className="font-bold text-white bg-blue-400 rounded-full px-4 focus:outline-none">
            Login
          </button>
        </form>
        <div>{this.state.errors ? this.raiseErrors() : null}</div>
      </div>
    );
  }
}

export default LoginPartial;
