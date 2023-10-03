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

    return (

        <div className="row"  style={backgroundStyle}>

            <div className="col-lg-3 mt-4 mb-4" style={formStyle}>

                <form className=" ml-5">
                    <div class="form-outline mb-4" >
                        <input class="form-control" required />
                        <label class="form-label" for="form2Example1">
                            Train Name
                        </label>
                    </div>
                    <div class="form-outline mb-4">


                        <select class="form-select" aria-label="Default select example" className="form-control" name="From" style={{ fontSize: "20px" }} required >
                            <option selected>Select</option>
                            <option value="Abanpola">Abanpola</option>
                            <option value="Akurala">Akurala</option>
                            <option value="Ambalangoda">Ambalangoda</option>
                            <option value="Avissawella">Avissawella</option>
                            <option value="Balana">Balana</option>
                            <option value="Beruwala">Beruwala</option>
                            <option value="chilaw">chilaw</option>
                            <option value="ColomboFort">Colombo Fort</option>
                            <option value="Demodara">Demodara</option>
                            <option value="Elle">Elle</option>
                            <option value="Gampaha">Gampaha</option>
                            <option value="Haliela">Haliela</option>

                        </select>
                        <label for="class">From</label><br />
                    </div>
                    <div class="form-outline mb-4">


                        <select class="form-select" aria-label="Default select example" className="form-control" name="From" style={{ fontSize: "20px" }} required >
                            <option selected>Select</option>
                            <option value="Abanpola">Abanpola</option>
                            <option value="Akurala">Akurala</option>
                            <option value="Ambalangoda">Ambalangoda</option>
                            <option value="Avissawella">Avissawella</option>
                            <option value="Balana">Balana</option>
                            <option value="Beruwala">Beruwala</option>
                            <option value="chilaw">chilaw</option>
                            <option value="ColomboFort">Colombo Fort</option>
                            <option value="Demodara">Demodara</option>
                            <option value="Elle">Elle</option>
                            <option value="Gampaha">Gampaha</option>
                            <option value="Haliela">Haliela</option>

                        </select>
                        <label for="class">To</label><br />
                    </div>
                    <div class="form-outline mb-4">
                        <input class="form-control" required />
                        <label class="form-label" for="form2Example1">
                            Distance
                        </label>
                    </div>

                    <div class="form-outline mb-4">
                        <input class="form-control" required />
                        <label class="form-label" for="form2Example1">
                            Ticket Fee
                        </label>
                    </div>

                    <div class="form-outline mb-4">

                        <input type='Time' name='btime' id='btime' className='form-control' style={{ fontSize: "20px" }} />
                        <label for="class">Begging Time:</label><br />
                    </div>

                    <div class="form-outline mb-4">

                        <input type='Time' name='btime' id='btime' className='form-control' style={{ fontSize: "20px" }} />
                        <label for="class">Arrival Time:</label><br />
                    </div>

                    <div class="form-outline mb-4">

                        <input type='Date' name='date' id='date' className='form-control' style={{ fontSize: "20px" }} />
                        <label for="Date">Date:</label><br />

                    </div>
                    <button type="button" class="btn btn-primary btn-block mb-4 form-control" style={{ width: '200px' }} >
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
                    <thead class="bg-dark text-light">
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



                    </tbody>
                </table>

            </div>

        </div>
    );

}