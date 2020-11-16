import React from 'react'
import { withStyles } from "@material-ui/styles";
//
import Chip from "./Chips";


const styles = {
  root: {
    width: "100%",
    boxSizing: "border-box",
    display: "flex",
    flexWrap:"wrap",
    alignItems: "center",
    paddingTop: "16px"
  },
  chipContainer:{
    paddingBottom:"8px",
  }
}

function ChipsRow(props) {
  const { classes, projectMetrics } = props;
  return (
    <div className={classes.root}>
      {projectMetrics.map(metric => <div className={classes.chipContainer}><Chip content={metric} key={metric}/></div>)}
    </div>
  )
}

export default withStyles(styles)(ChipsRow);