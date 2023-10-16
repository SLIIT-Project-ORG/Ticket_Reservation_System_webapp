import React from "react";
import Header from "./Header";
import TravelAgentNavBar from "./TravelAgentNavBar";

const backgroundStyle = {
  backgroundImage: `url('https://png.pngtree.com/thumb_back/fh260/background/20210206/pngtree-blue-green-glow-light-effect-blur-background-image_556767.jpg')`,
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
      <div><TravelAgentNavBar /></div>
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
