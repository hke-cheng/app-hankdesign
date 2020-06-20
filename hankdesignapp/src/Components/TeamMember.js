import React from 'react'
import { withStyles } from "@material-ui/styles";
import styles from "../Styles/TeamMemberStyles";

function TeamMember(props) {
  const { classes, name, title, image, url } = props;

  return (
    <a className={classes.link} href={url} target="_blank">

      <div className={classes.root}>

        <div className={classes.avatarContainer}>
          <img src={image} />
        </div>

        <div className={classes.info}>
          <p className={classes.name}>{name}</p>
          <p className={classes.role}>{title}</p>
        </div>
      </div>

    </a>


  )
}

export default withStyles(styles)(TeamMember);