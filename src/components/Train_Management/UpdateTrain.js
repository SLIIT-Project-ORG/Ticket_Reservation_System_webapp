import React, { useEffect, useState } from "react";
import Header from "../User_management/Header";
import BackOfficeNavBar from "../User_management/BackOfficeNavBar";
import { useParams } from "react-router";
import axios from "axios";

const backgroundStyle = {
  backgroundImage: `url('https://png.pngtree.com/thumb_back/fh260/background/20210206/pngtree-blue-green-glow-light-effect-blur-background-image_556767.jpg')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh', // Ensures the background covers the entire viewport height
};

const formStyle = {
  marginLeft: '1cm',

};

const columnStyle = {
  flex: 1,
  marginRight: '1cm'
};

export default function UpdateTrainPage() {

  const { id } = useParams();
  const [train, setTrain] = useState([]);

  useEffect(() => {
    axios.get(`https://ead-rest-api.onrender.com/api/v1/train/${id}`)
      .then((res) => {
        setTrain(res.data.value);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChange = event => {
    const { name, value } = event.target;
    setTrain({ ...train, [name]: value });
  };

  const updateTrain = (e) => {
    e.preventDefault();
    console.log(train);
    axios.put(`https://ead-rest-api.onrender.com/api/v1/train/${id}`, train)
      .then(() => {
        alert("update Successful");
      })
      .catch((err) => {
        console.log(err);
      })
  }

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
                <input className="form-control" required name="trainName" id="trainName" value={train.trainName} onChange={
                    handleChange
                } />
                <label className="form-label" htmlFor="form2Example1">
                  Train Name
                </label>
              </div>
              <div className="form-outline mb-4" style={columnStyle}>
                <input className="form-control" name="capacity" id="capacity" value={train.capacity} onChange={
                    handleChange
                } />
                <label className="form-label" htmlFor="form2Example2">
                  Capacity
                </label>
              </div>
            </div>

            <div className="d-flex">
              <div className="form-outline mb-4" style={columnStyle}>
                <input className="form-control" id="description" name="description" value={train.description} onChange={
                    handleChange
                } />
                <label className="form-label" htmlFor="form2Example2">
                  Description
                </label>
              </div>
              <div className="form-outline mb-4" style={columnStyle}>

                <select className="form-select form-control" aria-label="Default select example" name="trainTypeId" id="trainTypeId" value={train.trainTypeId} style={{ fontSize: "15px" }} required defaultValue={1}
                  onChange={
                      handleChange
                  }
                >
                  <option defaultValue={1}>Select Train Type</option>
                  <option value={1}>Express</option>
                  <option value={2}>Intercity</option>
                </select>
                <label className="form-label" htmlFor="form2Example1">
                  Train Type
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
              onClick={
                (e) => {
                  updateTrain(e);
                }
              }
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
