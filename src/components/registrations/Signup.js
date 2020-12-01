import React, { Component } from "react";

const API = "http://localhost:3001/api/v1/users";

export default class Signup extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      errors: "",
    };
  }

  close = () => {
    this.props.close();
    this.setState({
      username: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      errors: "",
    });
  };

  raiseErrors = () => {
    return (
      <ul className="space-y-2">
        {this.state.errors.map((error, i) => {
          return (
            <li
              className="text-xs text-red-600 px-2 border-gray-300 shadow "
              key={i}
            >
              {error}
            </li>
          );
        })}
      </ul>
    );
  };

  redirect = () => {
    this.props.history.push("/home");
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
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        password_confirmation: this.state.passwordConfirmation,
      },
    };

    const payload = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
      crendentials: "include",
    };

    fetch(API, payload)
      .then((resp) => resp.json())
      .then((resObj) => {
        if (resObj.status === "SUCCESS") {
          this.props.handleLogin(resObj);
          this.redirect();
        } else {
          this.setState({
            username: "",
            email: "",
            password: "",
            passwordConfirmation: "",
            errors: resObj.errors,
          });
        }
      });
  };

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="inset-0 bg-black bg-opacity-75 absolute flex justify-center items-center">
        <div className="bg-white w-1/2 rounded shadow">
          <div className="flex justify-center pt-4">
            <p className="text-gray-500">Join Flatnote</p>
          </div>
          <div className="flex items-center justify-center pt-4 lg:text-5xl font-mono">
            <h1>Create Your Account</h1>
          </div>
          <div className="flex mt-10 ml-10">
            {this.state.errors ? this.raiseErrors() : null}
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className="flex flex-col p-10 space-y-4">
              <div className="flex flex-col">
                <label className="font-sans text-sm" htmlFor="username">
                  Username <span className="text-red-600">*</span>
                </label>
                <input
                  onChange={this.handleChange}
                  name="username"
                  value={this.state.username}
                  className="hover:bg-gray-300 bg-gray-200 rounded px-2"
                  id="username"
                ></input>
              </div>
              <div className="flex flex-col">
                <label className="font-sans text-sm" htmlFor="email">
                  Email Address <span className="text-red-600">*</span>
                </label>
                <input
                  onChange={this.handleChange}
                  name="email"
                  value={this.state.email}
                  className="hover:bg-gray-300 bg-gray-200 rounded px-2"
                  id="email"
                ></input>
              </div>
              <div className="flex flex-col">
                <label className="font-sans text-sm" htmlFor="password">
                  Password <span className="text-red-600">*</span>
                </label>
                <input
                  onChange={this.handleChange}
                  name="password"
                  value={this.state.password}
                  type="password"
                  className="hover:bg-gray-300 bg-gray-200 rounded px-2"
                  id="password"
                ></input>
                <p className="text-gray-600 text-xs">
                  Make sure it's at least 4 characters.
                </p>
              </div>
              <div className="flex flex-col">
                <label
                  className="font-sans text-sm"
                  htmlFor="passwordConfirmation"
                >
                  Confirm Password <span className="text-red-600">*</span>
                </label>
                <input
                  onChange={this.handleChange}
                  name="passwordConfirmation"
                  value={this.state.passwordConfirmation}
                  type="password"
                  className="hover:bg-gray-300 bg-gray-200 rounded px-2"
                  id="passwordConfirmation"
                ></input>
              </div>
              <div className="flex flex-col ">
                <input
                  type="submit"
                  value="Create account"
                  className="bg-blue-300 text-white hover:bg-blue-500 rounded-full focus:outline-none"
                ></input>
              </div>
            </div>
          </form>
          <div className="flex flex-col justify-center text-lg">
            <button
              onClick={this.close}
              className="focus:outline-none text-gray-300 hover:bg-red-600 hover:text-white rounded-b text-xs p-2"
            >
              close
            </button>
          </div>
        </div>
      </div>
    );
  }
}
