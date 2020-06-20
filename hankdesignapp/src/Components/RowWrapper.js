import React from 'react'
import { withStyles } from "@material-ui/styles"

const styles = {
  root: {
    width: "100%",
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
  }
}

function RowWrapper(props) {

  const { classes } = props;

  return (
    <div className={classes.root}>
      {/* Put items here */}

    </div>
  )
}

export default withStyles(styles)(RowWrapper)