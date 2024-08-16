import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loader from "../assets/ZZ5H.gif";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState("");

  let navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    setLoading(true);

    axios
      .post("http://www.localhost:3000/user/signup", {
        userName: userName,
        password: password,
        email: email,
        phone: phone,
      })
      .then((res) => {
        console.log(res);
        setLoading(false);
        navigate("/login");
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
        <h1 className="text-center">SignIn</h1>
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
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Number</label>
              <input
                onChange={(e) => setPhone(e.target.value)}
                type="number"
                className="form-control"
                id="exampleInputNumber"
                aria-describedby="numberHelp"
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">
              LogIn
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

export default SignUp;
