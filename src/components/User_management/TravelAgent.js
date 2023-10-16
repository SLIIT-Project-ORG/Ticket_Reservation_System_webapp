import React from "react";
import Header from "./Header";
import TravelAgentNavBar from "./TravelAgentNavBar";

const backgroundStyle = {
  backgroundImage: `url('https://img.freepik.com/free-vector/travel-concept-with-landmarks_1057-4873.jpg')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh', // Ensures the background covers the entire viewport height
};

// const imageStyle = {
//   marginright: '200cm', // Add 2cm margin to the left of the image
// };

export default function TravelAgent() {
  return (
    <div style={backgroundStyle}>
      <div className="row "><Header></Header>
        <div><TravelAgentNavBar /></div>
        <h3 className="text-black  mt-3 b">TRAVEL AGENT USER PANNEL</h3>
        <div className="col-3"></div>
      </div>
    </div>
  );
}