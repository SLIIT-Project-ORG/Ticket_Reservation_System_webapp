import React from "react";

const backgroundStyle = {
  backgroundImage: `url('https://t4.ftcdn.net/jpg/05/41/28/83/360_F_541288365_m9ZqOVrT5YAohdBhJH5bxVT2CkvfdfVR.jpg')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
};

export default function TravelerProfile() {
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
              <th>Age</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John</td>
              <td>Doe</td>
              <td>johndoe123</td>
              <td>555-555-5555</td>
              <td>30</td>
              <td>johndoe@example.com</td>
              <td>
              <a className="edit" title="Edit" data-toggle="tooltip">
                  <i className="material-icons">Activate</i>
                </a>
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
          </tbody>
        </table>
      </div>
    </div>
  );
}
