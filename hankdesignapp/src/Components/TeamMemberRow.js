import React from 'react'
import { withStyles } from "@material-ui/styles";
//
import TeamMember from "./TeamMember";
//
import Colors from "../Constant/Colors";

const styles = {
  h2:{
    margin:"0px",
    fontSize:"16px",
    color:Colors.grey2,
  },
  root: {
    width: "100%",
    boxSizing: "border-box",
    display: "flex",
    flexDirection:"column"
  },
};

function TeamMemberRow(props) {
  const { classes, contributers } = props;
  return (
    <div className={classes.container}>
      <h2 className={classes.h2}>Other Contributers</h2>
      <div className={classes.root}>
        {contributers.map(c => <TeamMember 
          key={c.name}
          name={c.name}
          title={c.title}
          image={c.image}
          url={c.url}
        /> )}
      </div>
    </div>
  )

};

export default withStyles(styles)(TeamMemberRow);