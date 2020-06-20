import React from 'react';
import { withStyles } from "@material-ui/styles";
import ChipsRow from './ChipsRow';
import TeamMemberRow from "./TeamMemberRow";
//
import Fonts from "../Constant/Fonts";
import ViewSpacing from "../Constant/ViewSpacing";

const styles = {
  root: {
    padding: "24px 64px",
    width: "100%",
    boxSizing: "border-box",

    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },

  leftWrapper: {
    width: "56%"
  },

  p1: { ...Fonts.p1 },

  rightWrapper: {
    width: "40%"
  }

};

function ProjectIntro(props) {

  const { classes, projectIntro,projectMetrics,contributers } = props;
  return (
    <div className={classes.root}>

      <div className={classes.leftWrapper}>
        <p className={classes.p1}>
          {projectIntro}
        </p>

        <ChipsRow projectMetrics={projectMetrics}/>
      </div>

      <div className={classes.rightWrapper}>
        <TeamMemberRow contributers={contributers}/>
      </div>

    </div>
  )
};

export default withStyles(styles)(ProjectIntro);

