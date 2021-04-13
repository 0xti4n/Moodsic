import React, { useState } from 'react';
import WebCam from '../../components/webcam';
import {Button, Grid} from '@material-ui/core';

import './home.css'


let Home = () => {
  const [showCam, setshowCam] = useState(false)

  return (
    <Grid container justify='center' direction="column" alignItems='center' spacing={3} >
      {showCam ? 
        <Grid item><WebCam /></Grid> : 
        <Grid item><div className="canvas">
          <h2>Welcome to MoodSic</h2>
          <p>Show us your <strong>mood</strong> and we will suggest a song to go with it</p>
        </div></Grid>
      }
      <Grid item xs={10}>
        <Button onClick={() => setshowCam(!showCam)} variant='contained' color='secondary'>
          {showCam ? 'Hide' : 'Show'} my mood
        </Button>
      </Grid>
    </Grid>
  )
}

export default Home;
