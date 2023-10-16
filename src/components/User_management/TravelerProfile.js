import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import BackOfficeNavBar from './BackOfficeNavBar';

const backgroundStyle = {
  backgroundImage: `url('https://png.pngtree.com/thumb_back/fh260/background/20210206/pngtree-blue-green-glow-light-effect-blur-background-image_556767.jpg')`,
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
    
    <div style={backgroundStyle} >
     
     
      
      <div className="row "><Header></Header>
      <div><BackOfficeNavBar /></div>
        <h3 className="text-black  mt-3 b">TRAVELER PROFILE DETAILS</h3>
        <div className="col-3"></div>

        <table
          className="table table-striped table-bordered  table-hover "
          style={{
            overflow: 'scroll',
            width: '1300px',
            backgroundColor: 'white',
            marginLeft: "120px",
            marginTop: '15px'
          }}
        >
          <thead bg-light fw-bold text-dark>
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
          <tbody  class="bg-light text-dark b">
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

</td>

</tr>
               
            ))}
          </tbody>
        </table>
      </div>
      
    </div>
    
  );

}