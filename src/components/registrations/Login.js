import React from "react";
import logo from "../../assets/logo_transparent3.png";
import LoginPartial from "../partials/LoginPartial";
import "../../styles/tailwind.css";

const Login = () => {
  return (
    <div className="flex">
      <div className="flex flex-col items-center w-1/2 h-screen">
        <div className="flex pt-48">
          <img alt="" src={logo} />
        </div>
        <div className="flex flex-col text-2xl space-y-6">
          <p>√ Take Notes.</p>
          <p>√ Save Dates.</p>
          <p>√ Never Forget.</p>
        </div>
      </div>
      <div className="flex flex-col logo-color w-1/2 h-screen space-y-56 items-center">
        <div className="flex">
          <LoginPartial />
        </div>
        <div className="flex flex-col space-y-10">
          <div className="text-white text-2xl font-bold">
            <p>Keep up with what's happening in your life.</p>
            <p>Join FlatNote today.</p>
          </div>
          <div className="flex">
            <button className="bg-blue-400 text-white px-32 rounded-full font-bold focus:outline-none">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
