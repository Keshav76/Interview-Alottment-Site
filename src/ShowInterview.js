import React from "react";
import { useNavigate } from "react-router-dom";
import './ShowInterviews.css'



function Show(props) {
  const interviewList = props.interviewList;
  const setInterviews = props.setInterviews;
  const navigate = useNavigate();
  return (
    <div className="container c1">
      <h2>Scheduled Interview List: </h2>
      <ul>
        <li><h4>Student Names  <time>Mark as Done</time><time>Status</time><time>Timings</time></h4></li>
        {interviewList.map((ele, index) => {
          return <li>
            {ele.students.map((e) => e + " ")}
            <time style={{textAlign: "center", transform: "translateX(30px)"}}><button id={index} onClick={() => {
              interviewList[index].completed = true;
              setInterviews(interviewList);
              navigate('/interviews')
            }}></button></time>
            <time>{!ele.completed && 'Uncompleted'}{ele.completed && 'Completed'}</time>
            <time>{ele.start} -&gt;
              {ele.end}</time>
          </li>;
        })}
      </ul>
    </div>
  );
}

export default Show;
