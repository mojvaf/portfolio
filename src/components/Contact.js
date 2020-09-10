import React, { useState} from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


 const Contact= () => {

    const [open, SetOpen] = useState(false)
 
    const handelToggle = () =>{
        SetOpen(!open)
    }

    const handleClose = () => {
        SetOpen(false);
      };


    return (
        <div>
             <Button variant="outlined" color="primary" onClick={handelToggle}>
        contact me
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"My contact information"}</DialogTitle>
        <DialogContent>
        <DialogContentText id="alert-dialog-description">
            Email : mvafa44@gmail.com
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
            LinkedIn: Mojgan Vafa
          </DialogContentText>
        </DialogContent>
      </Dialog>
        </div>
    )
}
export default Contact