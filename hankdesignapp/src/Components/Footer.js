import React from 'react';
import { withStyles } from "@material-ui/styles";
import Icon from "@material-ui/core/Icon";
import styles from "../Styles/FooterStyles";


function Footer(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>

      <div className={classes.copyRight}>
        <div className={classes.p2}>Copyright © hankkedesign 2020 </div>
        <div className={classes.p2}>Self-coded WebSite by 💚 React </div>
      </div>

    </div>
  )
}

export default withStyles(styles)(Footer);