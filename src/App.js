import React, { useState } from 'react';
import Main from './Main';
import Alot from './Alot'
import TimeSelect from './Timings'
import Interview from './ShowInterview'
import Completed from './Completed'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const interviewList = [
    {
      students: ["Keshav", "Deepak", "Aman"],
      start: "12:35",
      end: "12:50",
      completed: false
    },
    {
      students: ["Nitish", "Deepak"],
      start: "12:51",
      end: "13:05",
      completed: true
    },
  ];
  const [interviews, setInterviews] = useState(interviewList);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} exact />
        <Route path='/alot' element={<Alot />} />
        <Route path='/timings' element={<TimeSelect interviews={interviews} setInterviews={setInterviews}/>} />
        <Route path='/interviews' element={<Interview interviewList={interviews} setInterviews={setInterviews}/>} exact />
        <Route path='/interviews/done' element={<Completed interviewList={interviews} setInterviews={setInterviews}/>} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
