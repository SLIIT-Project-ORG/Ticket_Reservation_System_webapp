import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const backgroundStyle = {
  backgroundImage: `url('https://t4.ftcdn.net/jpg/05/41/28/83/360_F_541288365_m9ZqOVrT5YAohdBhJH5bxVT2CkvfdfVR.jpg')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh', // Ensures the background covers the entire viewport height
};

const formStyle = {
  marginLeft: '2cm', // Move the form to the right by 1cm
};

export default function Login() {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function loginUser() {
    console.log("Login User");

    const loginReqData = { userName, password };
    console.log(loginReqData);

    axios.post("https://ead-rest-api.onrender.com/authenticate/login", loginReqData).then((res) => {
      if (res.data.success) {
        // alert("Login Successful");
        console.log(res.data);
        sessionStorage.setItem("email", res.data.email);
        sessionStorage.setItem("userId", res.data.userId);

        window.location.href = "/";
      } else {
        alert("Invalid login credentials");
      }
    }).catch((err) => {
      alert(err);
    });
  }

  return (
    <div style={backgroundStyle}>
      <div className="row"></div>
      <div className="row">
        <h1 className="text-black mt-5 b">SIGN IN</h1>
        <div className="col-3"></div>
        <div className="col-lg-3 d-none d-lg-flex mt-5">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/girl-login-in-online-account-8628867-6873896.png?f=webp"
            alt="Login Background"
          />
        </div>

        <div className="card col-3 mt-5" style={formStyle}>
          <form className="mt-5 ml-5">
            <div className="form-outline mb-4">
              <input type="username" id="username" className="form-control" required onChange={(e) => setUsername(e.target.value)} />
              <label className="form-label" for="form2Example1">
                User Name
              </label>
            </div>
            <div className="form-outline mb-4">
              <input type="password" id="password" className="form-control" required onChange={(e) => setPassword(e.target.value)} />
              <label className="form-label" for="form2Example2">
                Password
              </label>
            </div>
            <button type="button" className="btn btn-primary btn-block mb-4 form-control" style={{ width: '200px' }} onClick={() => loginUser()}>
              Sign in
            </button>
            <button type="button" className="btn btn-danger btn-block mb-4 form-control" style={{ width: '200px' } }>
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
