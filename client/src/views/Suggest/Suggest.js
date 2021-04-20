import React, { useState, useEffect } from 'react';
import { Button, Grid, Card, CircularProgress } from '@material-ui/core';
import Ratings from '../../components/rate';
import RateDialog from '../../components/rateDialog';
import Cookies from 'universal-cookie';

import './suggest.css'

/* This is the Suggest page, where we will be suggesting
a song to the user according to his/her/their current emotion
and ask for a rate of the song suggested*/

let Home = () => {
  const cookies = new Cookies();
  const [showVideo, setShowVideo] = useState(false)
  const [srcVideo, setSrcVideo] = useState('')
  const [nameVideo, setNameVideo] = useState('')
  const [artistVideo, setArtistVideo] = useState('')
  const [rate, setRate] = useState(3)
  const [rated, setRated] = useState(false)
  const [again, setAgain] = useState(false)
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState({title: '', text: ''})
  const [userName, setUsername] = useState('')
  const [emotion, setEmotion] = useState('')
  
  useEffect(() => {
    let user = cookies.get('user')
    let emotion = cookies.get('emotion')
    setUsername(user)
    setEmotion(emotion)

    let conf = {
      'method': 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
      }
    };

    fetch(`http://localhost:8000/recommender/${user}?emotion=${emotion}`, conf)
      .then(res => {
        if (res.status === 400) {
          setMessage({title: 'Error', text: 'Something went wrong try again later'})
          setOpen(true)
        }
        return (res.json())
      })
      .then(res => {
        if (res.music_r) {
          setShowVideo(true)
          setSrcVideo(res.music_r.Link)
          setNameVideo(res.music_r.Name)
          setArtistVideo(res.music_r.Artist)
        }
      })
  }, [again])

  const handleRate = (e) => {
    e.preventDefault()
    setRate(e.target.value)
  }

  const handleSubmit = () => {
    let body = {
      'song_name': nameVideo,
      'emotion' : emotion,
      'rating': rate,
    };

    let conf = {
      'method': 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify(body)
    };

    fetch(`http://localhost:8000/recommender/update_rating/${userName}`, conf)
      .then(res => {
        if (res.status === 400) {
          setMessage({ title: 'Error', text: 'Something went wrong try again later' })
          setOpen(true)
        } else if (res.status === 200) {
          setMessage({ title: 'Success', text: 'Thanks for rating our suggestion!' })
          setOpen(true)
          setRated(true)
        }
      })
  }

  const handleClick = (option) => {
    setRated(false)
    setShowVideo(false)
    setSrcVideo('')
    setNameVideo('')
    setArtistVideo('')
    setRate(3)
    if (option) {
      window.location.href= '/Home'
    } else {
      setAgain(!again)
    }
  }

  return (
    <Grid container className="suggest" justify='center' direction="column" alignItems='center' spacing={3} >
      <Grid item>
        <h2>Our suggestion for {emotion} {userName}</h2>
        <p>We hope you enjoy it</p>
      </Grid>
      <Grid item xs={12}>
          {showVideo ?
            <Card>
              <iframe src={srcVideo} width="640" height="380" allowFullScreen frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;picture-in-picture"/>
            </Card>
            : <CircularProgress color="secondary" size={80}/>
          }
      </Grid>
      <Grid item container xs={6}>
        <Grid item xs={12}>
          <h4>Please rate the song</h4>
        </Grid>
        <Grid item xs={6}>
          <Ratings handleInputChange={handleRate} rate={rate}/>
        </Grid>
        <Grid item xs={6}>
          <Button onClick={handleSubmit} variant='contained' color='secondary'>
            Submit my rating
          </Button>
        </Grid>
        {rated ? 
          <Grid item container xs={12}>
            <Grid item xs={6}>
              <Button onClick={() => handleClick(false)} variant='contained' color='secondary'>
                I want another song
            </Button>
            </Grid>
            <Grid item xs={6}>
              <Button onClick={() => handleClick(true)} variant='contained' color='secondary'>
                Change my mood
            </Button>
            </Grid>
          </Grid>
          : null
        }
      </Grid>
      {open && <RateDialog open={open} setOpen={setOpen} message={message} />}
    </Grid>
  )
}

export default Home;
