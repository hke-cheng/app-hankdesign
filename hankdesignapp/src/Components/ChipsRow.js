import React from 'react'
import { withStyles } from "@material-ui/styles";
//
import Chip from "./Chips";


const styles = {
  root: {
    width: "100%",
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    paddingTop: "48px"
  }
}

function ChipsRow(props) {
  const { classes, projectMetrics } = props;
  return (
    <div className={classes.root}>
      {projectMetrics.map(metric => <Chip content={metric} key={metric}/>)}
    </div>
  )
}

export default withStyles(styles)(ChipsRow);