import React from "react";
import Header from "./Header";
import NaveBar from "./NaveBar";

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

export default function UpdateProfile() {
  return (
    <div style={backgroundStyle}>
      <div className="row "><Header></Header>
      <div className='mt-4'><NaveBar /></div>
        <h3 className="text-black  mt-5 b">UPDATE PROFILE</h3>
        <div className="col-3"></div>

        <div className="card col-6 mt-2" style={formStyle}>
          <form className="mt-3 ml-5">
            <div className="d-flex">
              <div className="form-outline mb-4" style={columnStyle}>
                <input className="form-control" required />
                <label className="form-label" htmlFor="form2Example1">
                  First Name
                </label>
              </div>
              <div className="form-outline mb-4" style={columnStyle}>
                <input className="form-control" />
                <label className="form-label" htmlFor="form2Example2">
                  Last Name
                </label>
              </div>
            </div>

            <div className="d-flex">
              <div className="form-outline mb-4" style={columnStyle}>
                <input className="form-control" />
                <label className="form-label" htmlFor="form2Example2">
                  User Name
                </label>
              </div>
              <div className="form-outline mb-4" style={columnStyle}>
                <input className="form-control" />
                <label className="form-label" htmlFor="form2Example2">
                  Mobile Number
                </label>
              </div>
            </div>

            <div className="d-flex">
              <div className="form-outline mb-4" style={columnStyle}>
                <input className="form-control" />
                <label className="form-label" htmlFor="form2Example2">
                  Age
                </label>
              </div>
              <div className="form-outline mb-4" style={columnStyle}>
                <input className="form-control" />
                <label className="form-label" htmlFor="form2Example2">
                  Email
                </label>
              </div>
            </div>
            <div className="d-flex">
              <div className="form-outline mb-4" style={columnStyle}>
                <input className="form-control" />
                <label className="form-label" htmlFor="form2Example2">
                  Password
                </label>
              </div>
              <div className="form-outline mb-4" style={columnStyle}>
                <input className="form-control" />
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
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
