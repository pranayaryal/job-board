import React from 'react';
import './App.css';

import Jobs from './components/Jobs';

const mockJobs = [
  {title: 'SWE 1', company: 'Google'}
]

const App = () => {
  console.log('hello')
  return (
    <div className="App">
      <Jobs jobs={mockJobs} />
    </div>
  );
}

export default App;
