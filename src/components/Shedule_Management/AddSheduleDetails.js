//it2204648 Nethu nipuna m
import React, { useState } from "react"
import axios from "axios";

import { useParams } from 'react-router-dom';
export default function AddSheduledetails() {
  const { id } = useParams();
  const { name } = useParams();

  const [train_id, setTrain_id] = useState(id);
  const [trainName, setTrainName] = useState(name);
  const [departureStation, setDepartureStation] = useState("");
  const [arrivalStation, setArrivalStation] = useState("");

  const [departureTime, setDepartureTime] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");

// Create an object with the form data
  function sendData(e) {
    e.preventDefault();
    const newfueldetail = {
      id,
      train_id,
      trainName,
      departureStation,
      arrivalStation,

      departureTime,
      arrivalTime
    }
     // Send a POST request with the form data
    axios.post("https://eadbackend.onrender.com/api/TrainSchedule", newfueldetail).then(() => {
      alert(" Detais added")
    }).catch((err) => {
      alert(err)
    })
  }
  
  return (






    <div>
      <div className=" display-table mt-5 ">
        <div className="row display-table-row mt-5">

          <div >

            <div className="row mb-4">
              <header>
                <div className="col-md-7">
                  <nav className="navbar-default pull-left">
                    <div className="navbar-header">
                      <div className="header">

                        {/*---- Include the above in your HEAD tag --------*/}

                        {/* Navigation */}
                        <div className="fixed-top">

                          <nav className="navbar navbar-expand-lg navbar-dark mx-background-top-linear w-100 p-4">
                            <div className="container">
                              <a className="navbar-brand" rel="nofollow" target="_blank" href="#" style={{ textTransform: 'uppercase' }}>Admin Panel
                              </a>
                              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" />
                              </button>
                              <div className="collapse navbar-collapse" id="navbarResponsive">
                                <ul className="navbar-nav ml-auto">
                                  <li className="nav-item active" style={{ marginLeft: "900px" }}>
                                    <a className="nav-link" href="/">Home</a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="/login">Signin</a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link" href="/register">About Us</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </nav>

                </div>
            
              </header>


            </div>


            {/* our code */}<div >
              <div class="p-5 mb-4 bg-dark rounded-3">
                <div class="container-fluid py-5">
                  <h1 class="display-5 text-white fw-bold"> Admin: Add Shedule Details</h1>
                  <p class="col-md-8 text-white fs-4"></p>

                </div>
              </div>
              <br>
              
              </br>

              
              <h2>{name}</h2> 
              
              <div >
                <form className="row g-3 needs-validation" novalidate onSubmit={sendData}>

           




                  <div className="col-md-4">
                    <label for="type_ID" className="form-label">Departure station</label>
                    <input type="text" className="form-control " id="validationServer02" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required
                      onChange={(e) => {
                        setDepartureStation(e.target.value)

                      }} />


                    <div className="valid-feedback">

                    </div>

                  </div>
                  <div className="col-md-4">
                    <label for="type_ID" className="form-label">Arrival Station</label>
                    <input type="text" className="form-control " id="validationServer02" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required
                      onChange={(e) => {
                        setArrivalStation(e.target.value)

                      }} />

                    <div className="valid-feedback">

                    </div>

                  </div>

                  <div className="col-md-4">
                    <label for="DepartureTime" className="form-label">Departure Time</label>
                    <input type="time" className="form-control " id="validationServer02" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required
                      onChange={(e) => {
                        setDepartureTime(e.target.value)
                      }} />
                    <div id="validationServerUsernameFeedback" className="invalid-feedback">

                    </div>
                  </div>



                  <div className="col-md-3">
                    <label for="ArrivalTime" className="form-label">ArrivalTime</label>
                    <input type="time" className="form-control " id="validationServer02" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required
                      onChange={(e) => {
                        setArrivalTime(e.target.value)

                      }} />

                    <div id="validationServer05Feedback" className="invalid-feedback">

                    </div>

                  </div>

                  <br />
                  <div className="col-12">
                    <button className="btn btn-primary" type="submit">Submit form</button>
                  </div>
                </form>
              </div>
            </div>



          </div>
        </div>

      </div>




    </div>










  )
}