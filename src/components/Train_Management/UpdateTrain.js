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
    marginLeft: '16cm',
    

};


export default function UpdateTrainPage() {

    return (

        <div className="row" style={backgroundStyle}>
            <h1 className="text-black mt-5  b">UPDATE TRAIN</h1>
            <div className="col-lg-3  mb-4" style={formStyle}>

            <form className=" ml-5 mb-5">
                    <div class="form-outline mb-4" >
                        <input class="form-control" required id='trainName'  />
                        <label class="form-label" for="form2Example1">
                            Train Name
                        </label>
                    </div>
                    <div class="form-outline mb-4">
                        <input class="form-control" required id='capacity'  />
                        <label for="class">Capacity</label><br />
                    </div>
                    <div class="form-outline mb-4">


                        <input class="form-control" required id='description'  />
                        <label for="class">Description</label><br />
                    </div>

                    <select class="form-select" aria-label="Default select example" className="form-control" name="trainTypeId" style={{ fontSize: "15px" }} required >
                        <option selected>Select Train Type</option>
                        <option value={1}>Express</option>
                        <option value={2}>Intercity</option>
                    </select>

                    <button type="button" class="btn btn-primary btn-block mb-4 form-control"  style={{ width: '200px',marginTop:'20px' }} >
                        UPDATE NOW
                    </button>
                    <button type="button" class="btn btn-danger btn-block mb-4 form-control" style={{ width: '200px' }} >
                        CANCEL
                    </button>
                </form>





            </div>



        </div>


    );

}