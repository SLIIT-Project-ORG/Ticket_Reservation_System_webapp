import React, { useEffect, useState } from 'react';
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

    const [trains, setTrains] = useState([]);

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

    useEffect(() => {
        axios.get("https://ead-rest-api.onrender.com/api/v1/train")
            .then((res) => {
                setTrains(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="row" style={backgroundStyle}>
            <div className="row ">
                <div><BackOfficeNavBar /></div>
                <div className="col-3"></div></div>
            <div className="col-lg-3 mt-4 mb-4" style={formStyle}>
                <form className=" ml-5">
                    <div className="form-outline mb-4" >
                        <input className="form-control" required id='trainName' onClick={
                            (e) => {
                                setTrainName(e.target.value);
                            }
                        } />
                        <label className="form-label" htmlFor="form2Example1">
                            Train Name
                        </label>
                    </div>
                    <div className="form-outline mb-4">
                        <input className="form-control" required id='capacity' onClick={
                            (e) => {
                                setCapacity(e.target.value);
                            }
                        } />
                        <label htmlFor="className">Capacity</label><br />
                    </div>
                    <div className="form-outline mb-4">


                        <input className="form-control" required id='description' onClick={
                            (e) => {
                                setDescription(e.target.value);
                            }
                        } />
                        <label htmlFor="className">Description</label><br />
                    </div>

                    <select className="form-select form-control" aria-label="Default select example" name="trainTypeId" style={{ fontSize: "15px" }} defaultValue={1} required onChange={
                        (e) => {
                            setTrainTypeId(e.target.value);
                        }
                    }>
                        <option defaultValue={1}>Select Train Type</option>
                        <option value={1}>Express</option>
                        <option value={2}>Intercity</option>
                    </select>

                    <button type="button" className="btn btn-primary btn-block mb-4 form-control" style={{ width: '200px', marginTop: '20px' }} onClick={
                        () => {
                            createTrain();
                        }
                    }>
                        ADD NOW
                    </button>
                    <button type="button" className="btn btn-danger btn-block mb-4 form-control" style={{ width: '200px' }} >
                        CANCEL
                    </button>
                </form>
            </div>
            <div className="col-lg-9 " style={{ height: "700px", overflowY: "scroll", overflow: "auto" }}>
                <h3 className="text-dark fw-bold mt-3" style={{ marginLeft: "30px" }}>TRAIN DETAILS</h3>
                <table className="table table-striped table-bordered  table-hover " >
                    <thead className="bg-light fw-bold text-dark" style={{ fontSize: "20px" }}>
                        <tr>
                            <th scope="col">Train Name</th>
                            <th scope="col">Capacity</th>
                            <th scope="col">Description</th>
                            <th scope="col">Train Type</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-light text-dark" style={{ fontSize: "17px" }}>
                        {trains.map((train) => (
                            <tr key={train.trainId}>
                                <td>{train.trainName}</td>
                                <td>{train.capacity}</td>
                                <td>{train.description}</td>
                                <td>{train.trainTypeId === 1 ? "Express" :"Intercity"}</td>
                                <td>
                                    <button style={{ 'border': 'none' }}><a href={`/updatetrain`}><img src="https://img.icons8.com/ios/40/000000/visible--v1.png" alt='' /></a></button>

                                    <button style={{ 'border': 'none' }} ><img src="https://img.icons8.com/metro/25/ff0000/trash.png" alt='' /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>
    );

}