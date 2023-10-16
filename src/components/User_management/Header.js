import React,{useState} from "react";
import '../../styles/Header.css'

function Header() {

  const logout = () => {
    sessionStorage.clear();
    alert("Logout Successfull");
    window.location.href = '/';
  }

  return (
    <div className="header">

      <div className="fixed-top">
        <nav className="navbar navbar-expand-lg navbar-dark mx-background-top-linear w-100 p-2">
          <div className="container">
            <a className="navbar-brand" rel="nofollow" target="_blank" href="#" style={{ textTransform: 'uppercase' }}>TICKET BOOKING.COM
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active" style={{ marginLeft: "750px" }}>
                  <a className="nav-link" href="/">Home</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/login" onClick={() => logout()}> Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
export default Header; 