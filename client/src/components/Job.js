import React from 'react'

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const Job = ({ job }) => {
  return (
    <Paper className="job">
      <div>
        <Typography variant="h5">{job.title}</Typography>
        <Typography variant="h6">{job.company.trim()}</Typography>
        <Typography variant="h7">{job.location.trim()}</Typography>
      </div>
      <div>
        <Typography>{job.created_at.split(' ').slice(0, 3).join(' ')}</Typography>
      </div>
    </Paper>
  )
};

export default Job;