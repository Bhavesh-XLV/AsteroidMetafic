import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../home/Home";
import AsteroidData from "../asteroidData/AsteroidData";

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/asteroidData" element={<AsteroidData />} />
      </Routes>
    </div>
  );
};

export default Routers;
