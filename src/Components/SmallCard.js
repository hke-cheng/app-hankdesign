import React from 'react';
import { withStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import styles from "../Styles/SmallCardStyles";

function SmallCard(props) {
  const { classes, title, intro, frontImage, program } = props;
  return (
    <Link to={`/projectDetail/${title}`} className={classes.link}>
      <div className={classes.root}>

        <div className={classes.content}>
        

          <h2 className={classes.h2}>{title}</h2>
          <p className={classes.p2}>{intro}</p>
        </div>

        <div className={classes.imageContainer}>
          <div className={classes.imgBlur}></div>
          <img className={classes.frontImage} src={frontImage} />
        </div>
      </div>
    </Link>
  )
};

export default withStyles(styles)(SmallCard);