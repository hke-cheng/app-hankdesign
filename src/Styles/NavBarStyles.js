import Colors from "../Constant/Colors";
import Fonts from "../Constant/Fonts";

// Define Styles here ↓
export default {
  root: {
    position: "sticky",
    top: "0",
    boxSizing: "border-box",
    background: Colors.black2,
    width: "100vw",
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderBottom: "1px solid rgba(255,255,255,0.05)",
    zIndex: "20"
  },
  container: {
    width: "1080px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  '@media (max-width: 1128px)':{
    container: {
      width:"800px",
    }
  },

  '@media (max-width: 820px)':{
    container: {
      width:"700px",
    }
  },

  '@media (max-width: 720px)':{
    container: {
      width:"425px",
    }
  },
  '@media (max-width: 425px)':{
    container: {
      width:"100%",
      paddingLeft:"16px",
      paddingRight:"16px"
    }
  },
  

  logoContainer: {
    position:"relative",
    height: "100%",
    display: "flex",
    alignItems: "center",
    "& p": {
      position:"absolute",
      left:"24px",
      top:"-15px",
      ...Fonts.h2,
      color:"white"
    }

  },
  logo: {
    position:"absolute",
    width: "16px",
    top:"-10px"
  },

  routeContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },

  link: {
    color: "white",
    textDecoration: "none",
    opacity: "0.6",
    ...Fonts.p2,
    paddingLeft: "32px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",

    '&:hover': {
      opacity: "1",
      transition: "0.2s ease-in-out",
      transform: "scales(1.05)",
      cursor: "pointer"
    }
  }
};