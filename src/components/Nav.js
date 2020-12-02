import React from "react";
import MenuItems from "./MenuItems";
import logo from "../assets/logo_transparent3.png";

import { Link } from "react-router-dom";

const API = "http://localhost:3001/api/v1/logout";

const Nav = (props) => {
  const handleLogout = () => {
    fetch(API, { method: "DELETE", credentials: "include" })
      .then((resp) => resp.json())
      .then((resObj) => {
        props.handleLogout(resObj);
        props.history.push("/");
      });
  };
  return (
    <nav className="nav-bar flex bg-white  border-black border justify-center items-center sticky top-0 ">
      <Link to="/home">
        <img
          className="justify-self-start cursor-pointer"
          alt=""
          src={logo}
          height={20}
          width={250}
        />
      </Link>
      <ul className="nav-menu">
        {MenuItems.map((item, i) => {
          return (
            <li key={i}>
              <button className="transition ease-out delay-75 font-bold nav-link hover:text-white px-4 py-2 text-sm ">
                <Link to={item.url}>{item.name}</Link>
              </button>
            </li>
          );
        })}
      </ul>
      <button
        onClick={() => handleLogout()}
        className="bg-blue-400 px-2 py-2 text-white rounded text-xs"
      >
        Log off
      </button>
    </nav>
  );
};

export default Nav;
