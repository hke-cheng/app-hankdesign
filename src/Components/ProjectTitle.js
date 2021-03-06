import React from 'react';
import { withStyles } from "@material-ui/styles";
//
import Fonts from "../Constant/Fonts";

const styles = {
  titleWrapper: {

    padding: "0px 64px",
    paddingTop: "64px",
    background: "none",
    "& h1": {
      ...Fonts.h1
    }
  },

  '@media (max-width: 820px)': {
    titleWrapper: {
      padding: "0px 16px",
      paddingTop: "16px",
    }
  },
};

function ProjectTitle(props) {
  const { classes, projectId } = props;
  return (
    <div className={classes.titleWrapper}>
      <h1>{projectId}</h1>
    </div>
  )
}

export default withStyles(styles)(ProjectTitle);