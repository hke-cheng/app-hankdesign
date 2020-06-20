import React, { useState } from 'react'
import { withStyles } from "@material-ui/styles";
//
import Colors from "../Constant/Colors";

import Dialog from '@material-ui/core/Dialog';


const styles = {
  root: {
    width: "100%",
    height: "80%",
    borderRadius: "8px",
    overflow: "hidden",
    background: "none",
    marginTop: "48px",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
      cursor: "zoom-in"
    }
  },
  image: {
    width: "100%",
  },

  showImageEnlarge: {
    opacity: "1",
  },
  overlayImage:{
    width:"100vw",
    "&:hover": {
      cursor: "zoom-out"
    }
  }

};


function ExpandableImage({ classes, image }) {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div className={classes.root}>


      <img
        className={classes.image}
        src={image}
        onClick={handleClickOpen}
      />

      <Dialog maxWidth="xl" onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
          <img
            className={classes.overlayImage}
            src={image}
            onClick={handleClose}
          />
      </Dialog>

    </div>

  )
}

export default withStyles(styles)(ExpandableImage);