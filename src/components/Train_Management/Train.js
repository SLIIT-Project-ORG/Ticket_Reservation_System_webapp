import React from 'react';


const backgroundStyle = {
    backgroundImage: `url('https://t4.ftcdn.net/jpg/05/41/28/83/360_F_541288365_m9ZqOVrT5YAohdBhJH5bxVT2CkvfdfVR.jpg')`,
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

                    <select class="form-select" aria-label="Default select example" className="form-control" name="trainTypeId" style={{ fontSize: "20px" }} required onChange={
                        (e) => {
                            setTrainTypeId(e.target.value);
                        }
                    }>
                        <option selected>Select Train Type</option>
                        <option value={1}>Express</option>
                        <option value={2}>Intercity</option>
                    </select>

                    <button type="button" class="btn btn-primary btn-block mb-4 form-control" style={{ width: '200px' }} onClick={
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

                <div className="col-lg-4  p-2 mt-2 mb-2">
                    <input type="search" placeholder="search" name="search" className="form-control" style={{ fontSize: "20px", marginTop: "50px" }}
                    />
                </div>

                <h3 className="text-dark fw-bold mt-3" style={{ marginLeft: "30px" }}>TRAIN DETAILS</h3>
                <table className="table table-striped table-bordered fw-bold table-hover " style={{ fontSize: "20px" }}>
                    <thead class="bg-light text-dark">
                        <tr>
                            <th scope="col">From</th>
                            <th scope="col">To</th>
                            <th scope="col">Distance</th>
                            <th scope="col">Ticket Fee(Rs)</th>
                            <th scope="col">Begging Time</th>
                            <th scope="col">Arrival TIme</th>

                            <th scope="col">Date</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Ambalangoda</td>
                            <td>Balana</td>
                            <td>180KM</td>
                            <td>RS: 310.00</td>
                            <td>10.30 AM</td>
                            <td>12.15 PM</td>
                            <td>12/11/2023</td>
                            <td>


                                <a className="edit" title="Edit" data-toggle="tooltip">
                                    <i className="material-icons">Edit</i>
                                </a>
                                &nbsp;&nbsp;
                                <a className="delete" title="Delete" data-toggle="tooltip" style={{ color: "red" }}>
                                    <i className="material-icons">Delete</i>
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>

        </div>
    );

}