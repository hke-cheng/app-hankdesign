import React from 'react';
import { withStyles } from "@material-ui/styles";
import ChipsRow from './ChipsRow';
import TeamMemberRow from "./TeamMemberRow";
//
import Fonts from "../Constant/Fonts";
import Duration from "../Components/Duration";

const styles = {
  root: {
    padding: "24px 64px",
    paddingBottom: "100px",
    width: "100%",
    boxSizing: "border-box",
  },

  subTitle: {
    ...Fonts.h2,
    width: "300px",
    paddingBottom: "24px"
  },
  p1: {
    ...Fonts.p1,
    paddingLeft:"16px"
  },

  rightWrapper: {
    width: "40%"
  },

  paragraphContainer:{
    display:"flex",
    flexDirection:"row",
    marginTop: "16px"
  },

  '@media (max-width: 820px)': {
    root: {
      padding: "16px",
      paddingBottom:"60px"
    }
  },


};

function ProjectConclusion(props) {

  const { classes, conclusion, } = props;
  return (
    <div className={classes.root}>

      <h2 className={classes.subTitle}>Key Takeaways</h2>
      {conclusion.map(con => <div className={classes.paragraphContainer}><div> ✓ </div><p className={classes.p1}>{con}</p></div>)}

    </div>
  )
};

export default withStyles(styles)(ProjectConclusion);
