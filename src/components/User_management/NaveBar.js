import React from "react";
import '../../styles/NavBar.css';



export default function NaveBar() {

    return (

        <div className="navbar mt-4 ">
            <button><a href="/train" style={{ textDecoration: "none" }}>Train Management</a></button>
            <button><a href="/" style={{ textDecoration: "none" }}>Shedule Management</a></button>
            <button><a href="/" style={{ textDecoration: "none" }}>Travelar Profile</a></button>
            <button><a href="/" style={{ textDecoration: "none" }}>Booking Management</a></button>
           
        </div>


    )

}