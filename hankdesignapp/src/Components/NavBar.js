import React from 'react';
import logo from "../Constant/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { withStyles } from '@material-ui/styles';
import Icon from "@material-ui/core/Icon";
import styles from "../Styles/NavBarStyles";


function NavBar(props) {
  const { classes, isHome, isDetail, isTranslate } = props
  return (
    <nav className={classes.root}>
      <div className={classes.container}>
        <div className={classes.logoContainer}>
          <Link to="/">
            <img src={logo} className={classes.logo} />
            <p>Hank</p>
          </Link>
        </div>

        {isHome &&
          <div className={classes.routeContainer}>
            <a className={classes.link} href="https://www.linkedin.com/in/chenghan-ke/" target="_blank"><Icon
              className="fab fa-linkedin-in"
              style={{ color: "white", paddingLeft: "8px", fontSize: "16px" }}
            /></a>
            <a className={classes.link} href="https://github.com/hke-cheng" target="_blank"><Icon
              className="fab fa-github"
              style={{ color: "white", paddingLeft: "8px", fontSize: "16px" }}
            /></a>
            {/* <a className={classes.link} href="https://www.instagram.com/chenghanke/" target="_blank"><Icon
              className="fab fa-instagram"
              style={{ color: "white", paddingLeft: "8px", fontSize: "16px" }}
            /></a> */}
            <a className={classes.link} href="https://medium.com/@hankkechenghan" target="_blank"><Icon
              className="fab fa-medium-m"
              style={{ color: "white", paddingLeft: "8px", fontSize: "16px" }}
            /></a>
            <a className={classes.link} href="mailto:hankkedesign@gmail.com" target="_blank"><Icon
              className="fas fa-envelope"
              style={{ color: "white", paddingLeft: "8px", fontSize: "16px" }}
            /></a>
            {/* <NavLink className={classes.link} to="/about">About</NavLink>
            <NavLink className={classes.link} to="/projectDetail/:projectId">Contact</NavLink> */}
          </div>
        }

        {/* {isTranslate && <div>
          <a className={classes.link}>
            中文
          </a>
        </div>} */}

        {isDetail &&
          <div className={classes.routeContainer}>

            <NavLink className={classes.link} to="/">
              <Icon
                className="fas fa-chevron-left"
                style={{ color: "white", paddingRight: "6px", fontSize: "16px" }}
              />
              <span>Back</span>
            </NavLink>

          </div>
        }

      </div>
    </nav>
  );
};

export default withStyles(styles)(NavBar);