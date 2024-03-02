import React from 'react';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';

function Contact() {
  return (
    <Container maxWidth="md" padding="6px">
      <Typography variant="h4" align="center" gutterBottom sx={{margin:"20px"}}>
        Contact Us
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        Have questions? Fill out the form below and we'll get back to you as soon as possible.
      </Typography>
      <form>
        <Grid container spacing={2} padding="5px">
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
            >
              Send
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default Contact;
