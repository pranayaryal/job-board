/*jshint esversion: 6 */
import React, { useState } from 'react';

import Typography from '@material-ui/core/Typography';
import Job from './Job';
import JobModal from './JobModal';

import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const Jobs = ({ jobs }) => {

    const numJobs = jobs.length;
    const numPages = Math.ceil(numJobs / 50);

    const [activeStep, setActiveStep] = useState(0);
    const [openModal, setOpenModal] = useState(false);
    
    const jobsOnPage = jobs.slice(activeStep * 50, (activeStep * 50) + 50);

    const handleNext = () => {
      setActiveStep(prevActiveStep => prevActiveStep + 1 );
    }

    const handleBack = () => {
      setActiveStep(prevActiveStep => prevActiveStep - 1 );
    }


    const handleClickOpen = () => {
      console.log('youarehere');
      setOpenModal(true);
    };

    const handleClose = () => {
      setOpenModal(false);
    };

    return (
    <div className="jobs">
      <Typography variant="h4" component="h1">
        Entry Level Software Jobs
      </Typography>
      <Typography variant="h6" component="h1">
        Found {numJobs} jobs.
      </Typography>
      { jobsOnPage.map((job, i) => 
        <Job job={job} key={i}/>)}

      <div>
        Page {activeStep+ 1 } of {numPages}
      </div>

      <MobileStepper
      variant="progress"
      steps={numPages}
      position="static"
      activeStep={activeStep}
      nextButton={
        <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
          Next
          <KeyboardArrowRight />
        </Button>
      }
      backButton={
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          <KeyboardArrowLeft />
          Back
        </Button>
      }
    />


    </div>
  )
};

export default Jobs;