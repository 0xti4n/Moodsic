import React, { useState } from 'react';
import { Button, Grid, Card, CardContent, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Ratings from '../../components/rate'

import './suggest.css'

/* This is the Suggest page, where we will be suggesting
a song to the user according to his/her/their current emotion
and ask for a rate of the song suggested*/

let Home = () => {
  const [showVideo, setShowVideo] = useState(false)
  const [rate, setRate] = useState(0)
  const [rated, setRated] = useState(false)
  

  const handleRate = (e) => {
    e.preventDefault()
    setRate(e.target.value)
  }

  const handleSubmit = () => {

  }

  return (
    <Grid container className="suggest" justify='center' direction="column" alignItems='center' spacing={3} >
      <Grid item>
        <h2>Our suggestion for you</h2>
        <p>We hope you enjoy it</p>
      </Grid>
      {/* {showCam ?
        <Grid item><WebCam /></Grid> :
        <Grid item><div className="canvas">
          <h2>Welcome to MoodSic</h2>
          <p>Show us your <strong>mood</strong> and we will suggest a song to go with it</p>
        </div></Grid>
      } */}
      <Grid item xs={12}>
        <Card>
          <iframe src="https://www.youtube.com/embed/3yT5jJZplsk" width="640" height="380" allowFullScreen frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;picture-in-picture" allowfullscreen/>
        </Card>
      </Grid>
      <Grid item xs={10}>
        <Ratings handleInputChange={handleRate}/>
      </Grid>
      <Grid item xs={10}>
        <h4>Please rate the song</h4>
        <Button onClick={handleSubmit} variant='contained' color='secondary'>
          Submit my rating
        </Button>
      </Grid>
    </Grid>
  )
}

export default Home;
