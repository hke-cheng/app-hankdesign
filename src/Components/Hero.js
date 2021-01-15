import React from 'react'
import { withStyles } from "@material-ui/styles"
import styles from "../Styles/HeroStyles";


function Hero(props) {
  const { classes, slogan, content } = props
  return (
    <div className={classes.root}>
    
      <div className={classes.container}>
        <h1 className={classes.h1}>{slogan}</h1>
        <p className={classes.h2}>{content}</p>
      </div>

    </div>
  )
}

export default withStyles(styles)(Hero);