import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, CircularProgress } from '@material-ui/core'

export default function LoadDialog(props) {
  const handleContinue = () => {
    props.setOpen(false)
    window.location.href = '/Suggestion'
  };

  return (
    <React.Fragment>
      <Dialog maxWidth='sm' open={props.open} aria-labelledby="load-dialog" aria-describedby="alert-dialog-description">
        {props.load ?
          <DialogContent>
            <DialogTitle id="load-dialog">Processing</DialogTitle>
            <DialogContentText id='alert-dialog-description'>Please Wait while we process your emotion</DialogContentText>
            <CircularProgress color="secondary" />
          </DialogContent> : 
          <DialogContent>
            <DialogTitle id="load-dialog">Your emotion</DialogTitle>
            <DialogContentText id='alert-dialog-description'>{props.emotion.toUpperCase()}</DialogContentText>
          </DialogContent>
        }
        {!props.load && <DialogActions>
          <Button onClick={handleContinue} color="secondary">Continue</Button>
        </DialogActions>}
      </Dialog>
    </React.Fragment>
  )
}
