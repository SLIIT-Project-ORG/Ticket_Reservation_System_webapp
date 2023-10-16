import React from "react";
import '../../styles/NavBar.css';




export default function BackOfficeNavBar() {

    return (

        <div className="navbar mt-5 ">
            <button><a href="/train" style={{ textDecoration: "none" }}>Train Management</a></button>
            <button><a href="/" style={{ textDecoration: "none" }}>Shedule Management</a></button>
            <button><a href="/travelerprofile" style={{ textDecoration: "none" }}>Traveler Account Management</a></button>
          
           
        </div>


    )

}