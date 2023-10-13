import React from "react";

const backgroundStyle = {
  backgroundImage: `url('https://t4.ftcdn.net/jpg/05/41/28/83/360_F_541288365_m9ZqOVrT5YAohdBhJH5bxVT2CkvfdfVR.jpg')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh', // Ensures the background covers the entire viewport height
};

const imageStyle = {
  marginright: '500cm', // Add 2cm margin to the left of the image
};

export default function BackOffice() {
  return (
    <div style={backgroundStyle}>
      <div className="row"></div>
      <div className="row">
        <h1 className="text-black mt-5 b">BACK OFFICE USER PANEL</h1>
        <div className="col-3"></div>
        <div className="col-lg-3 d-none d-lg-flex mt-5">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/online-dating-4738893-3938075.png?f=webp"
            alt="Login Background"
            style={imageStyle}
          />
          <div className="col-12 mt-5 text-center">
            <div className="mb-3">
              <button type="button" class="btn btn-primary form-control" style={{ width: '400px', height: "50px", marginLeft: '100px', marginBottom: "70px", marginTop: '50px' }}>
                TRAVELER ACCOUNT MANAGEMENT
              </button>
            </div>
            <div className="mb-3">
              <button type="button" class="btn btn-danger form-control" style={{ width: '400px', height: "50px", marginLeft: '100px' }}>
                TRAIN MANAGEMENT
              </button>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}
