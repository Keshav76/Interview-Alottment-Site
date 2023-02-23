import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Timings.css";

function TimeSelect(props) {
  const navigate = useNavigate();
  const loc = useLocation();
  var interviews = props.interviews;
  var setter = props.setInterviews;
  function clickHandler() {
    var timeStart = document.getElementById("start").value;
    var timeEnd = document.getElementById("end").value;
    var newData = {
      students: loc.state.stu,
      start: timeStart,
      end: timeEnd,
    };
    interviews.push(newData);
    setter(interviews);
  }
  return (
    <div className="container-time">
      <div className="time">
        Select Interview Start Time:{" "}
        <input type="time" name="start" id="start" />
      </div>
      <div className="time">
        Select Interview End Time: <input type="time" name="end" id="end" />
      </div>
      <button
        onClick={() => {
          clickHandler();
          navigate("/interviews");
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default TimeSelect;
