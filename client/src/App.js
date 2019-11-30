/*jshint esversion: 6 */
import React, { useEffect, useState } from 'react';
import './App.css';

import Jobs from './components/Jobs';

const JOB_API_URL = 'http://localhost:3001/jobs';

const mockJobs = [
  {title: 'SWE 1', company: 'Google'}
]

const fetchJobs = async(updateCb) => {
  const res = await fetch(JOB_API_URL);
  const json = await res.json();

  updateCb(json)
}

const App = () => {

  const [ jobList, updateJobs ] = useState([]);

  useEffect(() => {
    fetchJobs(updateJobs);
  }, [])

  return (
    <div className="App">
      <Jobs jobs={jobList} />
    </div>
  );
}

export default App;
