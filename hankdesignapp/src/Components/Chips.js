import React from 'react'
import { withStyles } from "@material-ui/styles";
//
import styles from "../Styles/ChipsStyles";

function Chip(props) {
  const { classes, content } = props;
  return (
    <div className={classes.root}>
      <p className={classes.p2}>{content}</p>
    </div>
  )
}

export default withStyles(styles)(Chip);