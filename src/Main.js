import React from "react";
import "./Main.css";
import { useNavigate } from "react-router-dom";

const BoxGrid = () => {
  const navigate = useNavigate();
  return (
    <div className="box-grid">
      <button className="box" onClick={() => navigate('/alot')}>Book Interview</button>
      <button className="box" onClick={() => navigate('/interviews')}>View Interview</button>
      <button className="box" onClick={() => navigate('/interviews/done')}>Show Completed Interviews</button>
      <button className="box">Logout</button>
    </div>
  );
};

export default BoxGrid;
