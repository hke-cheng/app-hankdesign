import React, { useState } from 'react'
import { withStyles } from "@material-ui/styles";
import Dialog from '@material-ui/core/Dialog';

const styles = {
  heroImageContainer: {
    width: "100%",
    height: "64vh",
    overflow: "hidden",
  },
  heroImage: {
    width: "100%",
  },
  overlayImage: {
    width: "100%"
  }
};

function ProjectHeroImage(props) {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const { classes, heroImage, isVideo } = props;
  return (
    <div className={classes.heroImageContainer}>
      {isVideo
        ? <iframe
          width="560" height="315"
          style={{ width: "100%", height: "65vh" }}
          src={heroImage}
          allowfullscreen
          autoplay={true}
          picture-in-picture
        />
        : <img
          className={classes.heroImage}
          src={heroImage}
          onClick={handleClickOpen} />
      }

      <Dialog maxWidth="xl" onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <img
          className={classes.overlayImage}
          src={heroImage}
          onClick={handleClose}
        />
      </Dialog>
    </div>
  )

}

export default withStyles(styles)(ProjectHeroImage);