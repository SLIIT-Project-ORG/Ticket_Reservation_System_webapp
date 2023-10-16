import React, { useState } from 'react';
import axios from 'axios';
import BackOfficeNavBar from '../User_management/BackOfficeNavBar';

const backgroundStyle = {
    backgroundImage: `url('https://png.pngtree.com/thumb_back/fh260/background/20210206/pngtree-blue-green-glow-light-effect-blur-background-image_556767.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh', // Ensures the background covers the entire viewport height
};

const formStyle = {
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '20px',
    backgroundColor: 'white',
    width: '22%',
    height: 500

};

export default function TrainPage() {

    const [trainName, setTrainName] = useState("");
    const [capacity, setCapacity] = useState("");
    const [trainTypeId, setTrainTypeId] = useState("");
    const [desciption, setDescription] = useState("");

    function createTrain() {

        const trainReqData = { trainName, capacity, trainTypeId, desciption };
        console.log(trainReqData);

        axios.post("https://ead-rest-api.onrender.com/api/v1/train", trainReqData)
            .then((res) => {
                if (res.data) {
                    alert("Train Created Successfully");
                } else {
                    alert("Train Creation Failed");
                }
            })
            .catch((err) => {
                alert(err);
            });
    }
    return (
        <div className="row" style={backgroundStyle}>
            <div className="row ">
                <div><BackOfficeNavBar /></div>
                <div className="col-3"></div></div>
            <div className="col-lg-3 mt-4 mb-4" style={formStyle}>
                <form className=" ml-5">
                    <div class="form-outline mb-4" >
                        <input class="form-control" required id='trainName' onClick={
                            (e) => {
                                setTrainName(e.target.value);
                            }
                        } />
                        <label class="form-label" for="form2Example1">
                            Train Name
                        </label>
                    </div>
                    <div class="form-outline mb-4">
                        <input class="form-control" required id='capacity' onClick={
                            (e) => {
                                setCapacity(e.target.value);
                            }
                        } />
                        <label for="class">Capacity</label><br />
                    </div>
                    <div class="form-outline mb-4">


                        <input class="form-control" required id='description' onClick={
                            (e) => {
                                setDescription(e.target.value);
                            }
                        } />
                        <label for="class">Description</label><br />
                    </div>

                    <select class="form-select" aria-label="Default select example" className="form-control" name="trainTypeId" style={{ fontSize: "15px" }} required onChange={
                        (e) => {
                            setTrainTypeId(e.target.value);
                        }
                    }>
                        <option selected>Select Train Type</option>
                        <option value={1}>Express</option>
                        <option value={2}>Intercity</option>
                    </select>

                    <button type="button" class="btn btn-primary btn-block mb-4 form-control" style={{ width: '200px', marginTop: '20px' }} onClick={
                        () => {
                            createTrain();
                        }
                    }>
                        ADD NOW
                    </button>
                    <button type="button" class="btn btn-danger btn-block mb-4 form-control" style={{ width: '200px' }} >
                        CANCEL
                    </button>
                </form>
            </div>
            <div className="col-lg-9 " style={{ height: "700px", overflowY: "scroll", overflow: "auto" }}>
                <h3 className="text-dark fw-bold mt-3" style={{ marginLeft: "30px" }}>TRAIN DETAILS</h3>
                <table className="table table-striped table-bordered  table-hover " >
                    <thead class="bg-light fw-bold text-dark" style={{ fontSize: "20px" }}>
                        <tr>
                            <th scope="col">Train Name</th>
                            <th scope="col">Capacity</th>
                            <th scope="col">Description</th>
                            <th scope="col">Train Type</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody class="bg-light text-dark" style={{ fontSize: "17px" }}>
                        <tr>
                            <td>Ruhunu Kumari</td>
                            <td>Seat 1200</td>
                            <td>Beliaththa to colombo Fort</td>
                            <td>Express</td>
                            <td>
                                <td><button style={{ 'border': 'none' }}><a href={`/updatetrain`}><img src="https://img.icons8.com/ios/40/000000/visible--v1.png" /></a></button>

                                    <button style={{ 'border': 'none' }} ><img src="https://img.icons8.com/metro/25/ff0000/trash.png" /></button>
                                </td>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    );

}