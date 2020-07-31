import React from 'react';
import { withStyles } from "@material-ui/styles";
import { Icon } from '@material-ui/core';
import Colors from "../Constant/Colors";
import Fonts from "../Constant/Fonts";


const styles = {
  link: {
    marginTop: "60px",
    textDecoration: "none",
    color: Colors.black1,
  },

  container: {
    width: "100%",
    height: "160px",
    margin: "0px auto",
    position: "relative",
    borderRadius: "8px",
    boxSizing: "border-box",
    background: "white",
    overflow: "hidden",
    backgroundColor: props=>props.backgroundColor
  },
  content: {
    boxSizing: "border-box",
    height: "100%",
    paddingLeft: "10%",
    position: "absolute",
    // top:"90px",
    display: "flex",
    justifyContent:"center",
    flexDirection: "column",
  },
  h1: {
    ...Fonts.h3,
    color:"white"
  },
  p1: {
    ...Fonts.p1,
    color:"white"
  },

  bgImage: {
    position: "absolute",
    width: "100%",
    top: "0px",
    left: "100px",
  },
  iconContainer: {
    paddingTop: "8px",
    display: "flex",
    alignItems: "center"
  },
  iconRoundContainer: {
  
    marginLeft:"20px",
    padding:"6px",
    borderRadius:"50%",
    border: "1px solid white",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
  }
}

function Card2(props) {
  const { classes, title, intro, linkTo,frontIamge, backgroundColor } = props;
  return (
    <a className={classes.link} href={linkTo} target="_blank">

      <div className={classes.container}>

        <img className={classes.bgImage} src={frontIamge} />


        <div className={classes.content}>

          <div className={classes.iconContainer}>
            <h1 className={classes.h1}>{title}</h1>

            <div className={classes.iconRoundContainer}>
              <Icon
                className="fas fa-arrow-right"
                style={{ color: "white", fontSize: "9px", opacity: "1" }}
              />
            </div>

          </div>

          <div className={classes.iconContainer}>
            <Icon
              className="fab fa-medium-m"
              style={{ color: "white", fontSize: "16px", paddingRight: "8px", opacity: "1" }}
            />
            <p className={classes.p1}>{intro}</p>
          </div>
        </div>

      </div>


    </a>
  );
}

export default withStyles(styles)(Card2);