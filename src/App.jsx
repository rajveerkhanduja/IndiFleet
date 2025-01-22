import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import MyFooter from './components/MyFooter';
import Navbar from './components/Navbar';
import Services from './components/Services';
import RealTime from './components/RealTime';
import Testimonial from './components/Testimonial';
import Demo from './components/Demo';
import HowItWorks from './components/HowItWorks';
import SignInTD from './components/auth/truckerDrivers/SignInTD';
import SignUpTD from './components/auth/truckerDrivers/SignUpTD';
import OtpPageTD from './components/auth/truckerDrivers/OtpPageTD';
import SignUpDetailsTD from './components/auth/truckerDrivers/SignUpDetailsTD';
import SignUpDetailsP from './components/auth/postal/SignUpDetailsP';
import SignUpP from './components/auth/postal/SignUpP';
import SignInP from './components/auth/postal/SignInP';
import SignUpDetailsB from './components/auth/business/SignUpDetailsB';
import SignUpB from './components/auth/business/SignUpB';
import SignInB from './components/auth/business/SignInB';
import SignInCard from './components/auth/SignCard/SignInCard';
import SignUpCard from './components/auth/SignCard/SignUpCard';
import MISReport from './components/misReport/misReports';
import 'leaflet/dist/leaflet.css';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Navbar />
              <Home />
              <Services />
              <HowItWorks />
              <RealTime />
              <Testimonial />
              <Demo />
              <MyFooter />
            </>
          } 
        />
        <Route path="/signincard" element={<SignInCard />} />
        <Route path="/signupcard" element={<SignUpCard />} />
        <Route path="/signintd" element={<SignInTD />} />
        <Route path="/signuptd" element={<SignUpTD />} />
        <Route path="/otppagetd" element={<OtpPageTD />} />
        <Route path="/signupdetailstd" element={<SignUpDetailsTD />} />
        <Route path="/signupp" element={<SignUpP/>} />
        <Route path="/signinp" element={<SignInP />} />
        <Route path="/signupdetailsp" element={<SignUpDetailsP />} />
        <Route path="/signupb" element={<SignUpB />} />
        <Route path="/signinb" element={<SignInB />} />
        <Route path="/signupdetailsb" element={<SignUpDetailsB />} />
        <Route path="/misreports" element={<MISReport />} />
      </Routes>
    </Router>
  );
}

export default App;