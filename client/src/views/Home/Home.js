import React, { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import WebCam from '../../components/webcam';
import ImageDialog from '../../components/imageDialog';
import {Button, Grid} from '@material-ui/core';

import './home.css'

/* This is the Home page, where the users will allow us
get a short video to evaluate their current emotion*/

let Home = () => {
  const cookies = new Cookies();
  const [showCam, setShowCam] = useState(false)
  const [username, setUsername] = useState('')
  const [takePic, setTakePic] = useState(false)
  const [imgSrc, setImgSrc] = useState(null)
  const [openD, setOpenD] = useState(false);
  const [save, setSave] = useState(false);

  useEffect(() => {
    let user = cookies.get('user')
    setUsername(user)
  }, [])

  useEffect(() => {
    if (save) {
      //se llama a la api que guarda
    } else {
      setTakePic(false)
    }
  }, [openD, save])

  const takePicture = () => {
    setTakePic(true)
  }

  const videoConstraints = {
    facingMode: 'user'
  }

  return (
    <Grid container justify='center' alignItems='center' spacing={3} >
      {showCam && <Grid item xs={1}>
        <h2>Hi {username}</h2>
      </Grid>}
      {showCam ? 
        <Grid item><WebCam takePic={takePic} setImage={setImgSrc} videoConstraints={videoConstraints} setOpen={setOpenD}/></Grid> : 
        <Grid item><div className="canvas">
          <h2>Hi {username}</h2>
          <h2>Welcome to MoodSic</h2>
          <p>Show us your <strong>mood</strong> and we will suggest a song to go with it</p>
        </div>
        </Grid>
      }
      <Grid container item xs={12} direction='row' justify='center' alignItems='center' spacing={3}>
        <Grid item>
          <Button onClick={() => setShowCam(!showCam)} variant='contained' color='secondary'>
            {showCam ? 'Hide' : 'Show'} my mood
          </Button>
        </Grid>
        {showCam ? 
          <Grid item>
            <Button onClick={takePicture} variant='contained' color='secondary'>
              Take Picture
            </Button>
          </Grid>
        : null
        }
      </Grid>
      {/* {imgSrc && (
        <img
          src={imgSrc}
        />
      )} */}
      <ImageDialog open={openD} setOpen={setOpenD} imgSrc={imgSrc} setSave={setSave}/>
    </Grid>
  )
}

export default Home;
