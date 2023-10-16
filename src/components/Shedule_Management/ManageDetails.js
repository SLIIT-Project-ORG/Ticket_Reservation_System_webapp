////it2204648 Nethu nipuna m
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Popup from 'reactjs-popup';

function SheduleDetailsManagement() {

    const [sheduledetails, setsheduledetails] = useState([]);
    // Fetch train schedule data from the API on component mount
    useEffect(() => {
        axios.get(`https://eadbackend.onrender.com/api/TrainSchedule`)
            .then((sheduledetails) => {
                setsheduledetails(sheduledetails.data);
                console.log(sheduledetails.data);
            })
            .catch((err) => {
                console.error(err.message);
            });
    }, []);

 // Function to delete a train schedule item
    function deleteMovie(id) {
        axios.delete(`https://eadbackend.onrender.com/api/TrainSchedule/${id}`)
            .then(() => {
                alert("Deleted Successfully");
            }).catch((err) => {
                alert("error : " + err);
            });
        window.location.reload();
    }

    return (



        <div>
            <div className=" display-table mt-5 ">
                <div>                  
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

                        <div >

                            <header class="bg-dark py-5">
                                <div class="container px-4 px-lg-5 my-5">
                                    <div class="text-center text-white">
                                        <h1 class="display-4 fw-bolder">Admin: Manage Details</h1>
                                        <p class="lead fw-normal text-white-50 mb-0"></p>
                                    </div>
                                </div>
                            </header>
                            <br></br>
                            <br></br>
                            <a href="/postdetails" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Add Shedules</a>
                            <br></br>
                            <br></br>

                            <div class="row">
                                <div class="col-md-12">
                                    <div class="table-wrap">
                                        <table class="table">
                                            <thead class="thead-dark">
                                                <tr>
                                                    <th scope="col">train name</th>
                                                    <th scope="col">departureStation</th>
                                                    <th scope="col">arrivalStation</th>
                                                    
                                                    <th scope="col">departureStation</th>
                                                    <th scope="col">ArrivalTime</th>
                                                    <th scope="col">Options</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    sheduledetails.map((val, key) => {
                                                        return (
                                                            <tr>
                                                                <td style={{ width: "100px" }}>{val.trainName}</td>
                                                                <td style={{ width: "100px" }}>{val.departureStation}</td>
                                                                <td style={{ width: "100px" }}>{val.arrivalStation}</td>
                                                               
                                                                <td style={{ width: "100px" }}>{val.departureTime}</td>
                                                                <td style={{ width: "100px" }}>{val.arrivalTime}</td>
                                                                <td style={{ width: "100px" }}><a href={`/updatesheduledetails/` + val.id} className='btn btn-warning'>Update</a>
                                                                    <Popup
                                                                        trigger={<button className="btn btn-danger"> Delete </button>}
                                                                        modal
                                                                        nested
                                                                    >
                                                                        {close => (
                                                                            <div className="container-fluid" style={{ padding: 5 }}>



                                                                                <div className="h-100 p-5 bg-light border rounded-3">
                                                                                    <h1 className="card-title">Delete This Field ?</h1>
                                                                                    <div className>
                                                                                        <br></br>
                                                                                        <button
                                                                                            className="btn btn-success"
                                                                                            onClick={() => {
                                                                                                console.log('modal closed ');
                                                                                                close();
                                                                                            }}
                                                                                        >
                                                                                            Cancle
                                                                                        </button> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                                                                        <button className='btn btn-danger' onClick={() => deleteMovie(val.id)}>Delete</button>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        )}
                                                                    </Popup>
                                                                    <Popup
                                                                        trigger={<button className="btn btn-info"> View Detail </button>}
                                                                        modal
                                                                        nested
                                                                    >
                                                                        {close => (
                                                                            <div className="container-fluid" style={{ padding: 5 }}>



                                                                                <div className="h-100 p-5 bg-light border rounded-3">
                                                                                    <h1 className="card-title">trainName: {val.trainName}</h1>
                                                                                    <p className="card-text">departureStation: {val.departureStation}</p>
                                                                                    <p className="card-text">arrival station: {val.arrivalStation}</p>
                                                                                  
                                                                                    <span className="card-text">departureTime: {val.departureTime}</span><br />
                                                                                    <span className="card-text">ArrivalTime: {val.arrivalTime}</span>

                                                                                    <div className>
                                                                                        <br></br>
                                                                                        <button
                                                                                            className="btn btn-outline-danger"
                                                                                            onClick={() => {
                                                                                                console.log('modal closed ');
                                                                                                close();
                                                                                            }}
                                                                                        >
                                                                                            Close
                                                                                        </button>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        )}
                                                                    </Popup>


                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div >
                                </div >
                            </div >
                        </div >

                        {/* our code */}



                    </div>
                </div>

            </div>




        </div>












    );
}

export default SheduleDetailsManagement;