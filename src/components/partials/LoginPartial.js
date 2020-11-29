import React, { Component } from "react";

export default class LoginPartial extends Component {
  render() {
    return (
      <form className="flex  pt-4 space-x-10">
        <input
          placeholder="email..."
          className="rounded border-b-2 focus:outline-none focus:border-blue-900 bg-blue-100"
        ></input>
        <input
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
