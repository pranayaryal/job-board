/*jshint esversion: 6 */
import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { log } from 'util';

export default function FormControlLabelPosition() {
  const [value, setValue] = useState('female');

  const handleChange = event => {
    setValue(event.target.value);
    console.log(event.target.value)
  };

  return (
    <FormControl component="fieldset">
      <RadioGroup aria-label="position" name="position" value={value} onChange={handleChange} row>
        <FormControlLabel
          value="All"
          control={<Radio color="primary" />}
          label="All"
          labelPlacement="end"
        />
        <FormControlLabel
          value="US"
          control={<Radio color="primary" />}
          label="US"
          labelPlacement="end"
        />
        <FormControlLabel
          value="International"
          control={<Radio color="primary" />}
          label="International"
          labelPlacement="end"
        />
        <FormControlLabel
          value="Remote"
          control={<Radio color="primary" />}
          label="Remote"
          labelPlacement="end"
        />
      </RadioGroup>
    </FormControl>
  );
}
