import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'

export default function RateDialog(props) {
  return (
    <React.Fragment>
      <Dialog maxWidth='sm' open={props.open} onClose={() => props.setOpen(false)} aria-labelledby="image-dialog" aria-describedby="image-dialog-description">
        <DialogContent>
          <DialogTitle id="rate-dialog">{props.message.title}</DialogTitle>
          <DialogContentText id='rate-dialog-description'>{props.message.text}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => props.setOpen(false)} color="secondary">Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}
