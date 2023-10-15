import React from 'react';
import './App.css';
import Login from './components/User_management/Login';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Register from './components/User_management/Register';

import TravelerProfile from './components/User_management/TravelerProfile';
import BackOffice from './components/User_management/BackOfficeUser';

import TrainPage from './components/Train_Management/Train';
import UpdateTrainPage from './components/Train_Management/UpdateTrain';
import UpdateProfile from './components/User_management/UpdateProfile';
import Home from './components/User_management/Home';

function App() {

  const userId = sessionStorage.getItem('userId');

  return (
    <div className="App">

      <Router>
        {/* <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/backoffice' element={<BackOffice />}></Route>
          <Route path='/travelerprofile' element={<TravelerProfile />}></Route>
          <Route path='/train' element={<TrainPage />}></Route>
          <Route path='/updatetrain' element={<UpdateTrainPage />}></Route>
          <Route path='/updatetravelerprofile' element={<UpdateProfile />}></Route>
        </Routes> */}

        <Routes>
          <Route path="/" element={userId ? <Home/> : <Navigate to="/login"/>} />
          <Route path="/login" element={userId ? <Navigate to="/" /> : <Login />} />
          <Route path="/register" element={userId ? <Navigate to="/" /> : <Register />} />
          <Route path="/backoffice" element={userId ? <BackOffice /> : <Navigate to="/login" />} />
          <Route path="/travelerprofile" element={userId ? <TravelerProfile /> : <Navigate to="/login" />} />
          <Route path="/train" element={userId ? <TrainPage /> : <Navigate to="/login" />} />
          <Route path="/updatetrain" element={userId ? <UpdateTrainPage /> : <Navigate to="/login" />} />
          <Route path="/updatetravelerprofile" element={userId ? <UpdateProfile /> : <Navigate to="/login" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
