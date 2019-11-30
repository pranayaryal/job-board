/*jshint esversion: 6 */
import React, { useState } from 'react'

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import JobModal from './JobModal';



const Job = ({ job }) => {

  const [openModal, setOpenModal] = useState(false);

  const handleClickOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <div>
      <Paper className="job" onClick={handleClickOpen}>
        <div>
          <Typography variant="h4">{job.title}</Typography>
          <Typography variant="h5">{job.company.trim()}</Typography>
          <Typography variant="h6">{job.location.trim()}</Typography>
        </div>
        <div>
          <Typography>{job.created_at.split(' ').slice(0, 3).join(' ')}</Typography>
        </div>
      </Paper>
      <JobModal job={job} openModal={openModal} handleClose={handleClose} />
    </div>
  )
};

export default Job;