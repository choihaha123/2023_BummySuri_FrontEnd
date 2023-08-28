import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Lending from "./pages/Lending";
import Login from "./pages/Login";
import Minting from "./pages/Minting";
import Rps from "./pages/Game/Rps";
import RpsResult from "./pages/Game/RpsResult";
import Betting from "./pages/BettingGame/Betting";
import Predicting from "./pages/BettingGame/Predicting";


function DefaultRouter () {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Lending />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Minting" element={<Minting />} />
          <Route path="/rock-paper-scissors" element={<Rps />} />
          <Route path="/rock-paper-scissors/result" element={<RpsResult />} />

          <Route path="/betting" element={<Betting/>} />
          <Route path="/betting/predict" element={<Predicting/>}/>
        </Routes>
    </Router>
    );
  };

export default DefaultRouter;