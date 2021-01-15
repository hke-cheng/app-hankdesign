import React from 'react';
import { withStyles } from "@material-ui/styles";
import Colors from "../Constant/Colors";
import Fonts from "../Constant/Fonts";

const styles = {
  h2:{
    ...Fonts.p1,
    color:Colors.grey2,
  },
  p2:{
    ...Fonts.p2,
    color:Colors.grey2,
  },
  root: {
    width: "100%",
    boxSizing: "border-box",
    paddingTop:"16px"
  },
};

function Duration(props) {
  const {classes} = props
  return (
    <div className={classes.root}>
      <p className={classes.h2}>Duration</p>
      <p className={classes.p2}>{props.duration}</p>
    </div>
  )
};

export default withStyles(styles)(Duration);