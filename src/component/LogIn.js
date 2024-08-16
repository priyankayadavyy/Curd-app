import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loader from "../assets/ZZ5H.gif";

const LogIn = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState("");

  let navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    setLoading(true);

    axios
      .post("http://www.localhost:3000/user/login", {
        userName: userName,
        password: password,
      })
      .then((res) => {
        console.log(res.data.token);
        localStorage.setItem("token", res.data.token);
        setLoading(false);
        navigate("/category");
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
        setHasError(true);
        setError(err.message);
      });
  };
  return (
    <>
      <div className="container">
        {isLoading && (
          <div>
            <img style={{ width: "100px" }} src={loader} />
          </div>
        )}
        <h1 className="text-center">LogIn</h1>
        {!isLoading && (
          <form onSubmit={submitHandler}>
            <div className="mb-3">
              <label className="form-label">UserName</label>
              <input
                onChange={(e) => setUserName(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <br />
            <br />
          </form>
        )}
        {hasError && (
          <div>
            <p style={{ color: "red" }}>Error:- {error}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default LogIn;
