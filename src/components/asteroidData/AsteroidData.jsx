import "./asteroidData.css";
import React from "react";
import { useLocation } from "react-router-dom";

const ComponentFirst = () => {
  const { state } = useLocation();
  console.log(state);

  return (
    <div className="asteroid">
      <h2>Asteroid id: {state.id}</h2>
      <h3>Asteroid name: {state.name}</h3>
    </div>
  );
};

export default ComponentFirst;
