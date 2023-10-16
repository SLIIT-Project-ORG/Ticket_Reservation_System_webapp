import React from 'react';
import './App.css';
import Login from './components/User_management/Login';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Register from './components/User_management/Register';
import TravelerProfile from './components/User_management/TravelerProfile';
import TrainPage from './components/Train_Management/Train';
import UpdateTrainPage from './components/Train_Management/UpdateTrain';
import UpdateProfile from './components/User_management/UpdateProfile';
import Home from './components/User_management/Home';
import BackOffice from './components/User_management/BackOfficeUser';
import TravelerProfileEdit from './components/User_management/TravelerProfileEdit';
import TravelAgent from './components/User_management/TravelAgent';
import DefaultHeader from './components/User_management/Header-Default';
import Header from './components/User_management/Header';
import Footer from './components/User_management/Footer';

function App() {

  const userId = sessionStorage.getItem('userId');

  return (
    <div className="App">

      <Router>
        <header>
          {userId ? (
            <Header />
          ) : (
            <DefaultHeader />
          )}
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/backoffice' element={userId ? <BackOffice /> : <Navigate to="/login" />}></Route>
          <Route path='/travelerprofileedit' element={userId ? <TravelerProfileEdit /> : <Navigate to="/login" />}></Route>
          <Route path='/travelagent' element={userId ? <TravelAgent /> : <Navigate to="/login" />}></Route>
          <Route path="/travelerprofile" element={userId ? <TravelerProfile /> : <Navigate to="/login" />} />
          <Route path="/train" element={userId ? <TrainPage /> : <Navigate to="/login" />} />
          <Route path="/updatetrain/:id" element={userId ? <UpdateTrainPage /> : <Navigate to="/login" />} />
          <Route path="/updatetravelerprofile" element={userId ? <UpdateProfile /> : <Navigate to="/login" />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
