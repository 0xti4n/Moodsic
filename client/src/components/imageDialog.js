import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Card, CardMedia } from '@material-ui/core'

export default function ImageDialog(props) {
  const handleSave = (option) => {
    console.log(option)
    if (option) {
      props.setSave(true)
    }
    props.setOpen(false)
  };

  return (
    <React.Fragment>
      <Dialog maxWidth='sm' open={props.open} onClose={() => props.setOpen(false)} aria-labelledby="image-dialog">
        <DialogContent>
          <DialogTitle id="image-dialog">Your picture</DialogTitle>
          <DialogContentText>Do you want this to be the picture we will evaluate?.</DialogContentText>
          <Card>
            <CardMedia height="380px" component='img' alt="picture of user" image={props.imgSrc} />
          </Card>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleSave(true)} color="secondary">Yes</Button>
          <Button onClick={() => handleSave(false)} color="secondary">No</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}
