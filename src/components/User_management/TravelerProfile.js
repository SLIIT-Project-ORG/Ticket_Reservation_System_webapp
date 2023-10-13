import React from "react";

const backgroundStyle = {
  backgroundImage: `url('https://t4.ftcdn.net/jpg/05/41/28/83/360_F_541288365_m9ZqOVrT5YAohdBhJH5bxVT2CkvfdfVR.jpg')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
};

export default function TravelerProfile(props) {

  const id = props.match.params.id;

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://ead-rest-api.onrender.com/user/all")
      .then((res) => {
        if (res.data.success) {
          setUsers(res.data.users);
        } else {
          alert("Failed to get users");
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div style={backgroundStyle}>
      <div className="row"></div>
      <div className="row">
        <h1 className="text-black mt-5 b">TRAVELER PROFILE DETAILS</h1>
        <div className="col-3"></div>

        <table
          className="table table-striped table-hover table-bordered"
          style={{
            overflow: 'scroll',
            width: '1300px',
            backgroundColor: 'white',
            marginLeft: "120px",
            marginTop: '30px'
          }}
        >
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>User Name</th>
              <th>Mobile Number</th>
              <th>Age</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((key, val) => {
              <tr>
                <td>{val.firstName}</td>
                <td>{val.lastName}</td>
                <td>{val.username}</td>
                <td>{val.mobileNo}</td>
                <td>{val.age}</td>
                <td>{val.email}</td>
                <td>
                  <a className="edit" title="Edit" data-toggle="tooltip">
                    <i className="material-icons">Activate</i>
                  </a>
                  &nbsp;&nbsp;

                  <a className="edit" title="Edit" data-toggle="tooltip">
                    <i className="material-icons">Edit</i>
                  </a>
                  &nbsp;&nbsp;
                  <a className="delete" title="Delete" data-toggle="tooltip" style={{ color: "red" }}>
                    <i className="material-icons">Delete</i>
                  </a>
                </td>
              </tr>
            }
            )}
          </tbody>
        </table>
      </div>
    </div>
  );

}