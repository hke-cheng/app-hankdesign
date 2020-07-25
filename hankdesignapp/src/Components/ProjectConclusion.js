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
    ...Fonts.l2,
    width: "300px",
    paddingBottom: "24px"
  },
  p1: {
    ...Fonts.p1,
    marginTop: "16px"
  },

  rightWrapper: {
    width: "40%"
  },


};

function ProjectConclusion(props) {

  const { classes, conclusion, } = props;
  return (
    <div className={classes.root}>

      <h2 className={classes.subTitle}>Key Takeaways</h2>
      {conclusion.map(con => <p className={classes.p1}>▪︎ {con}</p>)}

    </div>
  )
};

export default withStyles(styles)(ProjectConclusion);
