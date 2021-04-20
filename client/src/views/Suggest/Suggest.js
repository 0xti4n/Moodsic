import React, { useState, useEffect } from 'react';
import { Button, Grid, Card, CircularProgress } from '@material-ui/core';
import Ratings from '../../components/rate';
import Cookies from 'universal-cookie';

import './suggest.css'

/* This is the Suggest page, where we will be suggesting
a song to the user according to his/her/their current emotion
and ask for a rate of the song suggested*/

let Home = () => {
  const cookies = new Cookies();
  const [showVideo, setShowVideo] = useState(false)
  const [rate, setRate] = useState(0)
  const [rated, setRated] = useState(false)
  const [userName, setUsername] = useState('')
  const [emotion, setEmotion] = useState('')
  
  useEffect(() => {
    let user = cookies.get('user')
    let emotion = cookies.get('emotion')
    setUsername(user)
    setEmotion(emotion)
    console.log(emotion)
  }, [])

  const handleRate = (e) => {
    e.preventDefault()
    setRate(e.target.value)
  }

  const handleSubmit = () => {
    //acá se hace la petición a la api para hacer el rating
  }

  return (
    <Grid container className="suggest" justify='center' direction="column" alignItems='center' spacing={3} >
      <Grid item>
        <h2>Our suggestion for {emotion} {userName}</h2>
        <p>We hope you enjoy it</p>
      </Grid>
      <Grid item xs={12}>
          {/* {showVideo ?  */}
            <Card>
              <iframe src="https://www.youtube.com/embed/3yT5jJZplsk" width="640" height="380" allowFullScreen frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;picture-in-picture"/>
            </Card>
           {/*  : <CircularProgress color="secondary" size={80}/>
          } */}
      </Grid>
      <Grid item container xs={6}>
        <Grid item xs={12}>
          <h4>Please rate the song</h4>
        </Grid>
        <Grid item xs={6}>
          <Ratings handleInputChange={handleRate}/>
        </Grid>
        <Grid item xs={6}>
          <Button onClick={handleSubmit} variant='contained' color='secondary'>
            Submit my rating
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Home;
