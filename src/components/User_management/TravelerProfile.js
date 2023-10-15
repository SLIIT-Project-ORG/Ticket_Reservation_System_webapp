import React, { useState, useEffect } from 'react';
import axios from 'axios';

const backgroundStyle = {
  backgroundImage: `url('https://t4.ftcdn.net/jpg/05/41/28/83/360_F_541288365_m9ZqOVrT5YAohdBhJH5bxVT2CkvfdfVR.jpg')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
};

export default function TravelerProfile() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://ead-rest-api.onrender.com/user/all")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div style={backgroundStyle}>
      <div className="row"></div>
      <div className="row">
        <h1 className="text-black mt-5 b">TRAVELER PROFILE DETAILS</h1>
        <div className="col-3"></div>

        <table
          className="table table-striped table-hover table-bordered"
          style={{
            overflow: 'scroll',
            width: '1300px',
            backgroundColor: 'white',
            marginLeft: "120px",
            marginTop: '30px'
          }}
        >
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>User Name</th>
              <th>Mobile Number</th>
              <th>Email</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.username}</td>
                <td>{user.mobileNo}</td>
                <td>{user.email}</td>
                <td>{user.isActive ? <button className="btn btn-primary">ACTIVE</button> : <button className="btn btn-danger">INACTIVE</button>}</td>
                
                <td>
                  <button className="btn btn-secondary" title="activate-btn" data-toggle="tooltip" >
                    {
                      user.isActive ? "Deactivate" : "Activate"
                    }
                  </button>
                  &nbsp;&nbsp;

                  <a className="edit" title="Edit" data-toggle="tooltip">
                    <i className="material-icons">Edit</i>
                  </a>
                  &nbsp;&nbsp;
                  <a className="delete" title="Delete" data-toggle="tooltip" style={{ color: "red" }}>
                    <i className="material-icons">Delete</i>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

}