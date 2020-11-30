import React, { Component } from "react";

const API = "http://localhost:3001/api/v1/login";

class LoginPartial extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

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
      .then((obj) => {
        if (obj.logged_in) {
          this.props.handleLogin(obj);
        }
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="flex pt-4 space-x-10">
        <input
          onChange={this.handleChange}
          name="email"
          type="text"
          placeholder="email..."
          className="rounded border-b-2 focus:outline-none focus:border-blue-900 bg-blue-100"
        ></input>
        <input
          onChange={this.handleChange}
          name="password"
          type="password"
          placeholder="password..."
          className="rounded border-b-2 focus:outline-none focus:border-blue-900 bg-blue-100"
        ></input>
        <button className="font-bold text-white bg-blue-400 rounded-full py-2 px-4 focus:outline-none">
          Login
        </button>
      </form>
    );
  }
}

export default LoginPartial;
