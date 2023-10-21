//import { useState } from "react";
import React from "react";
import Mynavigation from "../components/Mynavigation";
import Myimage from "../components/Myimage";
import Registration from "./Registration";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const add = (e) => {
    e.preventDefault();
    alert("Submited");
    navigate("/registration");
  };
  return (
    <>
      <div>
        <div className="row">
          <div className="col">
            <Myimage />
          </div>
          <div className="col">
            <Mynavigation />
            <form style={{marginTop:"80px"}}>
            <h3><b>Login</b></h3>
              <div>
                <div className="mb-3 row">
                  <label
                    htmlFor="staticEmail"
                    className="col-sm-2 col-form-label"
                  >
                    Email
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="email"
                      className="form-control"
                      id="inputPassword"
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label
                    htmlFor="inputPassword"
                    className="col-sm-2 col-form-label"
                  >
                    Password
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword"
                    />
                  </div>
                </div>
              </div>
              <label>Don't have account?</label>
              <Link to="/registration"  style={{color:"blue"}}>Create one</Link>
              {/* <button onClick={add}>Create one</button> */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
