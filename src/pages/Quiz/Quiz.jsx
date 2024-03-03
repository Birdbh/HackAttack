import React from 'react';
import { Typography, FormControl, RadioGroup, Radio, Checkbox, FormControlLabel, FormGroup, Button, Container } from '@mui/material';

const ComputerNetworksQuiz = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom sx={{margin: "5px"}}>
        Computer Networks Quiz
      </Typography>
      <FormControl component="fieldset" sx={{ m: 2 }}>
        <Typography variant="h6" gutterBottom>
          Question 1: What is the purpose of an IP address?
        </Typography>
        <RadioGroup name="question1" defaultValue="" sx={{ mb: 2 }}>
          <FormControlLabel value="a" control={<Radio />} label="To uniquely identify a device on a network" />
          <FormControlLabel value="b" control={<Radio />} label="To connect to the internet" />
          <FormControlLabel value="c" control={<Radio />} label="To secure a network" />
        </RadioGroup>
      </FormControl>

      <FormControl component="fieldset" sx={{ m: 2 }}>
        <Typography variant="h6" gutterBottom>
          Question 2: Which protocol is used for secure communication over a computer network?
        </Typography>
        <RadioGroup name="question2" defaultValue="" sx={{ mb: 2 }}>
          <FormControlLabel value="a" control={<Radio />} label="HTTP" />
          <FormControlLabel value="b" control={<Radio />} label="FTP" />
          <FormControlLabel value="c" control={<Radio />} label="HTTPS" />
        </RadioGroup>
      </FormControl>

      <FormControl component="fieldset" sx={{ m: 2 }}>
        <Typography variant="h6" gutterBottom>
          Question 3: Which of the following devices operates at the Network Layer of the OSI Model?
        </Typography>
        <FormGroup sx={{ mb: 2 }}>
          <FormControlLabel control={<Checkbox />} label="Router" />
          <FormControlLabel control={<Checkbox />} label="Switch" />
          <FormControlLabel control={<Checkbox />} label="Hub" />
        </FormGroup>
      </FormControl>
      <br/>
      <Button variant="contained" sx={{ m: 2 }}>Submit</Button>

    </Container>
  );
};

export default ComputerNetworksQuiz;
