import React, { useState } from "react";

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

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function loginUser() {
    console.log("Login User")

    const loginReqData = { username, password };
    console.log(data);

    axios.post("https://ead-rest-api.onrender.com/user/login", loginReqData).then((res) => {
      if (res.data.success) {
        alert("Login Successfull");

        localStorage.setItem("userType", res.data.user.userType);
        localStorage.setItem("userId", res.data.user._id);
        localStorage.setItem("username", res.data.user.username);

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
        <div class="col-lg-3 d-none d-lg-flex mt-5">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/girl-login-in-online-account-8628867-6873896.png?f=webp"
            alt="Login Background"
          />
        </div>

        <div className="card col-3 mt-5" style={formStyle}>
          <form className="mt-5 ml-5">
            <div class="form-outline mb-4">
              <input type="username" id="username" class="form-control" required onChange={
                (e) => {
                  setUsername(e.target.value);
                }
              } />
              <label class="form-label" for="form2Example1">
                User Name
              </label>
            </div>
            <div class="form-outline mb-4">
              <input type="password" id="password" class="form-control" required onChange={
                (e) => {
                  setPassword(e.target.value);
                }
              } />
              <label class="form-label" for="form2Example2">
                Password
              </label>
            </div>
            <button type="button" class="btn btn-primary btn-block mb-4 form-control" style={{ width: '200px' }} onClick={
              () => {
                loginUser();
              }
            }>
              Sign in
            </button>
            <button type="button" class="btn btn-danger btn-block mb-4 form-control" style={{ width: '200px' }} >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
