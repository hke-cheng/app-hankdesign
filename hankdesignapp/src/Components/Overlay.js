import React from 'react';
import {withStyles} from "@material-ui/styles";

const styles ={
  root:{
    position:"absolute",
    top:"0",
    width:"100vw",
    height:"100vh",
    background:"black",
    opacity:"1",
  }
}

function Overlay (props) {
  const {classes} =props;
  return (
    <div className={classes.root}>

    </div>
  )
}


export default withStyles(styles)(Overlay);