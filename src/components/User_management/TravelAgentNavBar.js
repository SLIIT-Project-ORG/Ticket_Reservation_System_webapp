import React from "react";
import '../../styles/NavBar.css';




export default function TravelAgentNavBar() {

    return (

        <div className="navbar mt-5 ">
           
            <button><a href="/travelerprofileedit" style={{ textDecoration: "none" }}>Traveler Account Management</a></button>
            <button><a href="/booking" style={{ textDecoration: "none" }}>Booking Management</a></button>
           
        </div>


    )

}