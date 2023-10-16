import React from "react";
import Header from "../User_management/Header";
import NaveBar from "../User_management/NaveBar";
import BackOfficeNavBar from "../User_management/BackOfficeNavBar";


const backgroundStyle = {
  backgroundImage: `url('https://png.pngtree.com/thumb_back/fh260/background/20210206/pngtree-blue-green-glow-light-effect-blur-background-image_556767.jpg')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh', // Ensures the background covers the entire viewport height
};

const formStyle = {
  marginLeft: '1cm', // Move the form to the right by 1cm
  
};

const columnStyle = {
  flex: 1,
  marginRight: '1cm'
};

export default function UpdateTrainPage() {
  return (
    <div style={backgroundStyle}>
      <div className="row "><Header></Header>
      <div><BackOfficeNavBar /></div>
        <h3 className="text-black  mt-5 b">UPDATE TRAIN DETAILS</h3>
        <div className="col-3"></div>

        <div className="card col-6 mt-2" style={formStyle}>
          <form className="mt-5 mb-5 ml-5">
            <div className="d-flex">
              <div className="form-outline mb-4" style={columnStyle}>
                <input className="form-control" required />
                <label className="form-label" htmlFor="form2Example1">
                  Train Name
                </label>
              </div>
              <div className="form-outline mb-4" style={columnStyle}>
                <input className="form-control" />
                <label className="form-label" htmlFor="form2Example2">
                  Capacity
                </label>
              </div>
            </div>

            <div className="d-flex">
              <div className="form-outline mb-4" style={columnStyle}>
                <input className="form-control" />
                <label className="form-label" htmlFor="form2Example2">
                  Description
                </label>
              </div>

              
             
            </div>

            <div className="d-flex">
              <div className="form-outline mb-4" style={columnStyle}>
                
              <select class="form-select" aria-label="Default select example" className="form-control" name="trainTypeId" style={{ fontSize: "15px" }} required
                    >
                        <option selected>Select Train Type</option>
                        <option value={1}>Express</option>
                        <option value={2}>Intercity</option>
                    </select>
                <label className="form-label" htmlFor="form2Example1">
                  Train Type
                </label>
              </div>
              
              <div className="form-outline mb-4" style={columnStyle}>
                <input className="form-control" />
                <label className="form-label" htmlFor="form2Example2">
                  Comments
                </label>
                
              </div>
            </div>



          
        


            <button
              type="button"
              className="btn btn-danger btn-block mb-4 form-control"
              style={{ width: '200px', marginRight: "30px" }}
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-primary btn-block mb-4 form-control"
              style={{ width: '200px' }}
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
