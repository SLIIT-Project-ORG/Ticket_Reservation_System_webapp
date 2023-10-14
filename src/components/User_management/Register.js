import React,{ useState, useEffect } from 'react';
import axios from 'axios';

const backgroundStyle = {
  backgroundImage: `url('https://t4.ftcdn.net/jpg/05/41/28/83/360_F_541288365_m9ZqOVrT5YAohdBhJH5bxVT2CkvfdfVR.jpg')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh', // Ensures the background covers the entire viewport height
};

const formStyle = {
  marginLeft: '1cm', // Move the form to the right by 1cm
};

const columnStyle = {
  flex: 1,
  marginRight: '1cm'
};

export default function Register() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [mobileNo, setMobileNumber] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  function registerUser() {
    if (password !== confirmPass) {
      alert("Passwords do not match");
      return;
    }

    const registerReqData = { firstName, lastName, userName, mobileNo, age, email, password };
    console.log(registerReqData);

    axios.post("https://ead-rest-api.onrender.com/user/register", registerReqData)
    .then((res) => {
      if (res.data.success) {
        alert("Registration Successfull");
      } else {
        alert("Registration Failed");
      }
    })
    .catch((err) => {
      alert(err);
    });
  }

  return (
    <div style={backgroundStyle}>
      <div className="row"></div>
      <div className="row">
        <h1 className="text-black mt-5 b">SIGN UP</h1>
        <div className="col-3"></div>


        <div className="card col-6 mt-2" style={formStyle}>
          <form className="mt-3 ml-5">
            <div className="d-flex">
              <div className="form-outline mb-4" style={columnStyle}>
                <input className="form-control" id="firstName" required onChange={
                  (e) => {
                    setFirstName(e.target.value);
                  }
                } />
                <label className="form-label" htmlFor="form2Example1">
                  First Name
                </label>
              </div>
              <div className="form-outline mb-4" style={columnStyle}>
                <input className="form-control" id="lastName" onChange={
                  (e) => {
                    setLastName(e.target.value);
                  }
                }/>
                <label className="form-label" htmlFor="form2Example2">
                  Last Name
                </label>
              </div>
            </div>

            <div className="d-flex">
              <div className="form-outline mb-4" style={columnStyle} id="username" onChange={
                (e) => {
                  setUserName(e.target.value);
                }
              }>
                <input className="form-control" />
                <label className="form-label" htmlFor="form2Example2">
                  User Name
                </label>
              </div>
              <div className="form-outline mb-4" style={columnStyle}>
                <input className="form-control" id="mobileNo" onChange={
                  (e) => {
                    setMobileNumber(e.target.value);
                  }
                }/>
                <label className="form-label" htmlFor="form2Example2">
                  Mobile Number
                </label>
              </div>
            </div>

            <div className="d-flex">
              <div className="form-outline mb-4" style={columnStyle}>
                <input className="form-control" id="age" onChange={
                  (e) => {
                    setAge(e.target.value);
                  }
                }/>
                <label className="form-label" htmlFor="form2Example2">
                  Age
                </label>
              </div>
              <div className="form-outline mb-4" style={columnStyle}>
                <input className="form-control" id="email" onChange={
                  (e) => {
                    setEmail(e.target.value);
                  }
                }/>
                <label className="form-label" htmlFor="form2Example2">
                  Email
                </label>
              </div>
            </div>
            <div className="d-flex">
              <div className="form-outline mb-4" style={columnStyle}>
                <input className="form-control" id="password" onChange={
                  (e) => {
                    setPassword(e.target.value);
                  }
                } type="password"/>
                <label className="form-label" htmlFor="form2Example2">
                  Password
                </label>
              </div>
              <div className="form-outline mb-4" style={columnStyle}>
                <input className="form-control" id="confirmPassword" onChange={
                  (e) => {
                    setConfirmPass(e.target.value);
                  }
                } type="password"/>
                <label className="form-label" htmlFor="form2Example2">
                  Confirm Password
                </label>
              </div>
            </div>
            <button
              type="button"
              className="btn btn-danger btn-block mb-4 form-control"
              style={{ width: '200px', marginRight: "30px" }}
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-primary btn-block mb-4 form-control"
              style={{ width: '200px' }}
              onAbort={
                () => {
                  registerUser();
                }
              }
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
