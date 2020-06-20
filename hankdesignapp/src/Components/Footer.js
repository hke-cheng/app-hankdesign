import React from 'react';
import { withStyles } from "@material-ui/styles";
import Icon from "@material-ui/core/Icon";
import styles from "../Styles/FooterStyles";


function Footer(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>

      <div className={classes.footer}>
        <div className={classes.section}>
          {/* <div className={classes.socialMedias}>
            <a className={classes.link} href="https://www.linkedin.com/in/chenghan-ke/" target="_blank"><Icon
              className="fab fa-linkedin-in"
              style={{ color: "white", paddingRight: "24px" }}
            /></a>
            <a className={classes.link} href="https://github.com/hke-cheng" target="_blank"><Icon
              className="fab fa-github"
              style={{ color: "white", paddingRight: "24px" }}
            /></a>
            <a className={classes.link} href="https://www.instagram.com/chenghanke/" target="_blank"><Icon
              className="fab fa-instagram"
              style={{ color: "white", paddingRight: "24px" }}
            /></a>
            <a className={classes.link} href="https://www.linkedin.com/in/chenghan-ke/" target="_blank"><Icon
              className="fab fa-dribbble"
              style={{ color: "white", paddingRight: "24px" }}
            /></a>
          </div> */}

          {/* <div className={classes.email}>
            <p className={classes.p1}>hankkedesign@gmail.com</p>
          </div> */}

        </div>

      </div>

      <div className={classes.copyRight}>
        <div className={classes.p2}>Copyright © hankkedesign 2020 </div>
        <div className={classes.p2}>Self-coded WebSite by 💚 React </div>
      </div>

    </div>
  )
}

export default withStyles(styles)(Footer);