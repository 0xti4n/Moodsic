import React, { useState } from 'react';
import { Grid, TextField, FormControl, Button } from '@material-ui/core';



let Login = () => {
  const [username, setUser] = useState('')
  const [password, setPassword] = useState('')

  const handleClick = () => {
    if (username !== '' && password !== '') {
      window.location.href = '/home'
    }
  }
  
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
    </Grid>
  )
}

export default Login;
