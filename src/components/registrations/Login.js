import React, { useState } from "react";

import logo from "../../assets/logo_transparent3.png";
import LoginPartial from "../partials/LoginPartial";
import Signup from "./Signup";

const Login = (props) => {
  const [show, setShow] = useState(false);

  const close = () => {
    setShow(!show);
  };

  return (
    <div className="flex">
      <div className="flex flex-col items-center w-1/2 h-screen">
        <div className="flex pt-48">
          <img alt="" src={logo} />
        </div>
        <div className="flex flex-col text-2xl space-y-6 font-bold text-blue-400">
          <p>√ Take Notes.</p>
          <p>√ Save Dates.</p>
          <p>√ Never Forget.</p>
        </div>
      </div>
      <div className="flex flex-col logo-color w-1/2 h-screen space-y-56 items-center">
        <div className="flex">
          <LoginPartial
            history={props.history}
            handleLogin={props.handleLogin}
          />
        </div>
        <div className="flex flex-col space-y-10">
          <div className="text-white text-2xl font-bold">
            <p>Keep up with what's happening in your life.</p>
            <p>Join FlatNote today.</p>
          </div>
          <div className="flex">
            <button
              onClick={() => setShow(!show)}
              className="bg-blue-400 text-white px-32 rounded-full font-bold focus:outline-none"
            >
              Sign up
            </button>
            <Signup
              handleLogin={props.handleLogin}
              history={props.history}
              show={show}
              close={close}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
