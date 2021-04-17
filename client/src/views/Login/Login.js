import React, { useState } from 'react';
import { Grid, TextField, FormControl, Button, Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';


function Alert(props) {
  return <MuiAlert elevation={6} color="primary" {...props} />;
}

/* This is the login page, where we expect the users to
put their username along with their password and we will
verify if the user is on our database*/

let Login = () => {
  const [username, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    if (username !== '' && password !== '') {
      window.location.href = '/home'
    } else {
      setOpen(true)
    }
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  
  return (
    <Grid container justify='center' direction="column" alignItems='center' spacing={3}>
      <Grid item>
        <h1>MoodSic</h1>
      </Grid>
      <Grid item>
        <FormControl>
          <TextField required={true} variant='outlined' color='secondary' label='User Name' type='email' value={username} onChange={e => setUser(e.target.value)}/>
        </FormControl>
      </Grid>
      <Grid item>
        <FormControl>
          <TextField required={true} variant='outlined' color='secondary' label='Password' type='password' value={password} onChange={e => setPassword(e.target.value)}/>
        </FormControl>
      </Grid>
      <Grid item xs={10}>
        <Button onClick={handleClick} variant='contained' color='secondary'>Login</Button>
      </Grid>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="warning">
          Please fill username and password
        </Alert>
      </Snackbar>
    </Grid>
  )
}

export default Login;
