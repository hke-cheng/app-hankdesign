import Colors from "../Constant/Colors";
import Fonts from "../Constant/Fonts";

export default {
  root: {
    boxSizing: "border-box"
  },

  container: {
    width: "1080px",
    height: "40vh",
    margin: "0px auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box"
  },

  h1: {
    ...Fonts.s1,
    color: "white",
    textAlign: "center"
  },

  h2: {
    ...Fonts.h2,
    color: Colors.purple,
    paddingTop: "24px",
    textAlign: "center"
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
    },
    h1: {
      ...Fonts.h1,
      textAlign: "center"
    },
  
    h2: {
      ...Fonts.p1,
    },
  },

  '@media (max-width: 425px)':{
    container: {
      width:"300px",
    },
    h1: {
      ...Fonts.h1,
      textAlign: "center"
    },
  
    h2: {
      ...Fonts.p1,
    },
  },



}
