import React from 'react'
import { withStyles } from "@material-ui/styles";

import ExpandableImage from "./ExpandableImage";
import styles from "../Styles/ProjectContentStyles";

function ProjectContent(props) {
  const { classes, subTitle, copy, url, isImage } = props;
  return (
    <div className={classes.root}>

      <div className={classes.wrapper}>
        <h2 className={classes.subTitle}>{subTitle}</h2>
        <p className={classes.p1}>{copy}</p>
      </div>

      {isImage === "true" && <ExpandableImage image={url} />}
      {isImage === "false" && <div className={classes.overflowContainer}>
        <p className={classes.overflowP1}>Try zoom in/out, or click on the flow (Full Screen Allowed) </p>
        <iframe
          className={classes.overFlow}
          src={url}
          scrolling="no"
          allowfullscreen="true"
        />
      </div>}


    </div>
  )
}


export default withStyles(styles)(ProjectContent)