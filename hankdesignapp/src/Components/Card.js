import React from 'react';
import { withStyles } from "@material-ui/styles";
import { Icon } from '@material-ui/core';
import styles from "../Styles/CardStyles";

function Card(props) {
  const { classes, title, intro } = props;
  return (
    <a className={classes.link} href="https://uxdesign.cc/cheat-sheets-ui-terms-cadf9dc49689" target="_blank">
      <div className={classes.root}>

        <div className={classes.container}>
          
          <img className={classes.bgImage} src="https://miro.medium.com/max/2000/1*tXAVkpZZw4sMeyLVpvCZbg.png" />
          <div className={classes.blurBox}></div>

          <div className={classes.content}>
            <h1 className={classes.h1}>{title}</h1>

            <div className={classes.iconContainer}>
              <p className={classes.p1}>{intro}</p>
              <Icon
                className="fas fa-external-link-alt"
                style={{ color: "black", fontSize: "14px", paddingLeft:"24px",opacity:"0.6" }}
              />
            </div>
          </div>

        </div>

      </div>
    </a>
  );
}

export default withStyles(styles)(Card);