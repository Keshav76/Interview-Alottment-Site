import React from "react";
import { useNavigate } from "react-router-dom";
import './Alot.css'

const people = ["Keshav", "Deepak", "Nitish", "KK", "Anshuman"];
function Alottment() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <h2>Choose Students: </h2>
      <ul>
        {people.map((ele, index) => {
          return (
            <li>{ele}<input type="checkbox" name={index} id={index}/></li>
          );
        })}
      </ul>
      <button onClick={() => {
        var chosen = [];
        for (var i = 0; i < people.length; i ++) {
          if (document.getElementById(i).checked)
            chosen.push(people[i]);
        }
        if (chosen.length < 2) {
          alert('Choose at least 2 students.');
          return;
        }
        navigate('/timings', { state: { stu: chosen } });
      }}>Select Interview timing</button>
    </div>
  );
}

export default Alottment;
