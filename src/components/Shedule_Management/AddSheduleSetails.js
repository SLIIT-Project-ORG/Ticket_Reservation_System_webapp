//it2204648 Nethu nipuna m
import React, { useState ,useEffect} from "react"
import axios from "axios";

import { useParams } from 'react-router-dom';
export default function AddSheduleSetails() {
  const { id } = useParams();
  const { name } = useParams();

  const [trainName, setTrainName] = useState("");
  const [departureStation, setDepartureStation] = useState("");
  const [arrivalStation, setArrivalStation] = useState("");

  const [departureTime, setDepartureTime] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");

// Create an object with the form data
  function sendData(e) {
    e.preventDefault();
    const newfueldetail = {

      trainName,
      departureStation,
      arrivalStation,

      departureTime,
      arrivalTime
    }
     // Send a POST request with the form data
    axios.post("https://eadbackend.onrender.com/api/TrainSchedule", newfueldetail).then(() => {
      alert("Detais added")
    }).catch((err) => {
      alert(err)
    })
  }
  const [train, settrains] = useState([]);

    useEffect(() => {
        axios.get(`https://ead-rest-api.onrender.com/api/v1/train`)
            .then((trains) => {
                settrains(trains.data);
                console.log(trains.data);
            })
            .catch((err) => {
                console.error(err.message);
            });
    }, []);
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
              
              <div className="row row-cols-4 row-cols-md-4 g-4">
                    {train.map((val, key) => {

                        return (
                            <div className="col  mb-5">
                                <div className="card text-start">

                                    <div className="card-body">
                                        <h5 className="card-title text-center">{val.trainName} </h5>

                                    </div>
                                    <a href={`/adddetails/${val.trainId}/${val.trainName}`}><button className='btn btn-warning w-100'><b>Select train</b></button></a>
                                </div>
                            </div>
                        )
                    })}
                </div>
              

              <br></br>
             
            </div>



          </div>
        </div>

      </div>




    </div>










  )
}