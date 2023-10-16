import React from "react";
import Header from "./Header";
import BackOfficeNavBar from "./BackOfficeNavBar";

const backgroundStyle = {
  backgroundImage: `url('https://resources.tallysolutions.com/us/wp-content/uploads/2021/12/what-are-back-office-services-2.jpg')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh', // Ensures the background covers the entire viewport height
};

const imageStyle = {
  marginright: '200cm', // Add 2cm margin to the left of the image
};

export default function BackOffice() {
  return (
    <div style={backgroundStyle}>
      <div className="row "><Header></Header>
        <div><BackOfficeNavBar /></div>
        <h3 className="text-black  mt-3 b">BACK OFFICE USER PANNEL</h3>
        <div className="col-3"></div>
      </div>

    </div>
  );
}