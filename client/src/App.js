/*jshint esversion: 6 */
import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';

import Jobs from './components/Jobs';
import Buttons from './components/Buttons';

const JOB_API_URL = 'http://localhost:3001/jobs';

const mockJobs = [
  { title: 'SWE 1', company: 'Google' }
]

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const fetchJobs = async (updateCb) => {
  const res = await fetch(JOB_API_URL);
  const json = await res.json();

  updateCb(json);
}

const App = () => {

  const classes = useStyles();
  const [jobList, updateJobs] = useState([]);

  useEffect(() => {
    fetchJobs(updateJobs);
  }, [])

  return (

    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={9}>
          <Buttons />
          <Jobs jobs={jobList} />
        </Grid>
        <Grid item xs={3}>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
