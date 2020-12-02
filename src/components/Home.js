import React, { Component } from "react";

const API = "https://api.quotable.io/random ";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      QOTD: "",
      author: "",
    };
  }

  componentDidMount() {
    fetch(API)
      .then((resp) => resp.json())
      .then((resObj) => {
        this.setState({
          // qotd means Qoute of the Day
          qotd: resObj.content,
          author: resObj.author,
        });
      });
  }
  render() {
    return (
      <div className="flex flex-col justify-center items-center h-screen w-screen logo-color space-y-6">
        <div>
          <h1 className="DM text-5xl bg-white p-4 rounded shadow-lg border border-gray-300 ">
            Quotes of the Day
          </h1>
        </div>
        <div className="DM flex flex-col bg-white rounded shadow-lg text-lg p-2  border-gray-300 transition transform duration-700 ease-in-out hover:scale-110">
          <p>{this.state.qotd}</p>
          <h1 className="justify-self-end">- {this.state.author}</h1>
        </div>
      </div>
    );
  }
}

export default Home;
