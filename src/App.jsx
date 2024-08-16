import Navbar from "./componetns/Navbar.jsx";
import Hero from "./componetns/Hero.jsx";
import FeatureInfo from "./componetns/FeatureInfo.jsx";
import { useState } from "react";

import Working from "./componetns/Working.jsx";
import Card from "./componetns/Card.jsx";
import Roadmap from "./componetns/Roadmap.jsx";
import UserReview from "./componetns/UserReview.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DarkMode from "./componetns/DarkMode.jsx";
import "./App.css";
import GAuth from "./componetns/GAuth.jsx";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={ <GAuth/>} />
        </Routes>

        <Hero />
        <FeatureInfo />
        <Working />
        <Card />
        <Roadmap />
        <UserReview />
      </Router>
    </>
  );
}

export default App;
