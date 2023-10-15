import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NaveBar from './NaveBar';
import Header from './Header';
import Footer from './Footer';

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
    
    <div style={backgroundStyle} >
     
     
      
      <div className="row "><Header></Header>
      <div className='mt-4'><NaveBar /></div>
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

                  <button style={{ 'border': 'none' }}><a href={`/updatetravelerprofile`}><img src="https://img.icons8.com/ios/40/000000/visible--v1.png" /></a></button>

<button style={{ 'border': 'none' }} ><img src="https://img.icons8.com/metro/25/ff0000/trash.png" /></button>
</td>

</tr>
               
            ))}
          </tbody>
        </table>
      </div>
      <Footer/>
    </div>
    
  );

}