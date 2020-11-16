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
  },

  '@media (max-width: 820px)': {
    root: {
      padding: "16px",
      flexDirection:"column"
    },
    leftWrapper: {
      width: "100%",
    },
    rightWrapper: {
      width: "100%",
      marginTop:"16px"
    },
  },

};

function ProjectIntro(props) {

  const { classes, projectIntro,projectMetrics,contributers,duration} = props;
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
        <Duration duration={duration}/>
      </div>

    

    </div>
  )
};

export default withStyles(styles)(ProjectIntro);

