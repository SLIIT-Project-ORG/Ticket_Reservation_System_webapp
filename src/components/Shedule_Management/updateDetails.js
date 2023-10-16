//it2204648 Nethu nipuna m
import React, { Component } from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

export const withRouter = (WrappedComponent) => (props) => {
  const params = useParams();
  const navigate = useNavigate();

  return <WrappedComponent {...props} params={params} navigate={navigate} />;
};


class EditDetails extends Component {

  
  constructor(props) {
    super(props);

    this.onChangedepartureStation = this.onChangedepartureStation.bind(this);
    this.onChangetrainid=this.onChangetrainid.bind(this);
    this.onChangetrainName = this.onChangetrainName.bind(this);
    this.onChangearrivalStation = this.onChangearrivalStation.bind(this);
  
    this.onChangedepartureTime = this.onChangedepartureTime.bind(this);


    this.onChangearrivalTime = this.onChangearrivalTime.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      departureStation: "",
      train_id:"",
      trainName: "",
      arrivalStation: "",
      departureTime: "",
      arrivalTime: "",
      records: [],
    };
  }

  componentDidMount() {

    axios
      .get("https://eadbackend.onrender.com/api/TrainSchedule/" + this.props.params.id)
      .then((response) => {
        this.setState({
          departureStation: response.data.departureStation,
          train_id:response.data.train_id,
          departureTime: response.data.departureTime,
          trainName: response.data.trainName,
          arrivalStation: response.data.arrivalStation,
          arrivalTime: response.data.arrivalTime,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  onChangedepartureStation(e) {
    this.setState({
      departureStation: e.target.value,
    });
  }
  onChangetrainid(e) {
    this.setState({
      train_id: e.target.value,
    });
  }



  
  onChangedepartureTime(e) {
    this.setState({
      departureTime: e.target.value,
    });
  }
  onChangetrainName(e) {
    this.setState({
      trainName: e.target.value,
    });
  }
  onChangearrivalStation(e) {
    this.setState({
      arrivalStation: e.target.value,
    });
  }
  onChangearrivalTime(e) {
    this.setState({
      arrivalTime: e.target.value,
    });
  }


  onSubmit(e) {
    e.preventDefault();
    const newEditedProduct = {
      id:this.props.params.id,
      train_id:this.state.train_id,
      trainName: this.state.trainName,
      departureStation: this.state.departureStation,
      departureTime: this.state.departureTime,
      arrivalStation: this.state.arrivalStation,
      arrivalTime: this.state.arrivalTime,
    };
    console.log(newEditedProduct);


    axios
      .put(
        "https://eadbackend.onrender.com/api/TrainSchedule/" + this.props.params.id,
        newEditedProduct
      )
      .then((res) => console.log(res.data));


    //this.props.history.push("");
  }
  render() {
    return (




      <div>
        <div className=" display-table mt-5 ">
          <div className="row display-table-row mt-5">
           
            <div>

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
                  <div className="col-md-5">
                    <div className="header-rightside">

                    </div>
                  </div>
                </header>


              </div>

              <div>

                <header class="bg-dark py-5">
                  <div class="container px-4 px-lg-5 my-5">
                    <div class="text-center text-white">
                      <h1 class="display-4 fw-bolder">Admin: Update  Details</h1>
                      <p class="lead fw-normal text-white-50 mb-0"></p>
                    </div>
                  </div>
                </header>
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                 

                </div>
                <div className="container">

                  <div className="row align-items-md-stretch">

                    <div className="col-md-6">
                      <div className="h-100 p-5 bg-light border rounded-3">
                        <form onSubmit={this.onSubmit}>
                          <div class="form-row">


                            <div className="form-group row">
                              <div class="form-group col-md-6">
                                <label for="inputEmail3" class="col-sm-2 col-form-label">departure Station </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="inputEmail4"
                                  value={this.state.departureStation}
                                  onChange={this.onChangedepartureStation}
                                />
                              </div>
                            </div>



                            <div className="form-group row">
                              <div class="form-group col-md-6">
                                <label for="inputEmail3" class="col-sm-2 col-form-label">trainName: </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="inputEmail4"
                                  value={this.state.trainName}
                                  onChange={this.onChangetrainName}
                                />
                              </div>
                            </div>
                            <div className="form-group row">
                              <div class="form-group col-md-6">
                                <label for="inputEmail3" class="col-sm-2 col-form-label">arrival Station: </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="inputEmail4"
                                  value={this.state.arrivalStation}
                                  onChange={this.onChangearrivalStation}
                                />
                              </div>
                            </div>
                            
                            <div className="form-group row">
                              <div class="form-group col-md-6">
                                <label for="inputEmail3" class="col-sm-2 col-form-label">departure Time: </label>
                                <input
                                  type="time"
                                  className="form-control"
                                  id="inputEmail4"
                                  value={this.state.departureTime}
                                  onChange={this.onChangedepartureTime}
                                />
                              </div>
                            </div>
                            <div className="form-group row">
                              <div class="form-group col-md-6">
                                <label for="inputEmail3" class="col-sm-2 col-form-label"> arrival Time: </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="inputEmail4"
                                  value={this.state.arrivalTime}
                                  onChange={this.onChangearrivalTime}
                                />
                              </div>
                            </div>

                            <br />

                            <div className="form-group row">
                              <input
                                type="submit"
                                value="Update Record"
                                className="btn btn-primary"

                              />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-md-6">
                      
                    </div>
                  </div>
                </div>
              </div>
              {/* our code */}



            </div>
          </div>

        </div>




      </div>











    );
  }


}
export default withRouter(EditDetails);