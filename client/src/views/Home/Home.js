import React, { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import WebCam from '../../components/webcam';
import ImageDialog from '../../components/imageDialog';
import LoadDialog from '../../components/loadDialog';
import {Button, Grid} from '@material-ui/core';

import './home.css'

/* This is the Home page, where the users will allow us
get a picture to evaluate their current emotion*/

let Home = () => {
  const cookies = new Cookies();
  const [showCam, setShowCam] = useState(false)
  const [username, setUsername] = useState('')
  const [takePic, setTakePic] = useState(false)
  const [imgSrc, setImgSrc] = useState(null)
  const [openD, setOpenD] = useState(false);
  const [openL, setOpenL] = useState(false);
  const [save, setSave] = useState(false);
  const [load, setLoad] = useState(false);
  const [emotion, setEmotion] = useState('');

  useEffect(() => {
    let user = cookies.get('user')
    setUsername(user)
  }, [])

  useEffect(() => {
    if (save) {
      setLoad(true)
      setOpenL(true)
      let body = {
        'Path': imgSrc.substr(23)
      };

      let conf = {
        'method': 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json',
        },
        body: JSON.stringify(body)
      };

      fetch('http://localhost:3002/emotions', conf)
        .then(res => {
          if (res.status === 400) {
            console.log('error')
            setLoad(false)
            alert('ups something went wrong')
          } else if (res.status === 200) {

          }
          return (res.json())
        })
        .then(res => {
          let emo = res.emotion
          cookies.set('emotion', JSON.stringify(emo), { path: '/', secure: true, sameSite: true, maxAge: 7200 });
          setEmotion(emo)
          setLoad(false)
        })
      
    } else {
      if(!openD) {
        setImgSrc('')
      }
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
      {showCam && <Grid item xs={2} zeroMinWidth>
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
      <ImageDialog open={openD} setOpen={setOpenD} imgSrc={imgSrc} setSave={setSave}/>
      <LoadDialog open={openL} setOpen={setOpenL} load={load} emotion={emotion}/>
    </Grid>
  )
}

export default Home;
