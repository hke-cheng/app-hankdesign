import Colors from "../Constant/Colors";
import Fonts from "../Constant/Fonts";

//Define Styles here↓
export default {
  link: {
    textDecoration: "none",
    color: Colors.black1
  },
  root: {
    width: "100%",
    background: Colors.black2,
    boxSizing: "border-box",
    padding: "23px 0px",
    margin: "0xp auto",
    "&:hover": {
      cursor: "pointer"
    }
  },
  container: {
    height: "320px",
    width:"1080px",
    margin:"0px auto",
    position: "relative",
    borderRadius: "8px",
    boxSizing: "border-box",
    background: "white",
    overflow: "hidden"
  },

  content: {
    boxSizing: "border-box",
    width: "50%",
    height: "100%",
    paddingLeft: "10%",
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  h1: {
    ...Fonts.h1
  },
  p1: {
    ...Fonts.p1
  },
  blurBox:{
   width:"30%",
   height:"100%",
   background:Colors.greybg,
   position: "absolute",
   boxShadow:`200px 0px 85px 87px ${Colors.greybg}`
  },
  bgImage: {
    position: "absolute",
    width: "100%",
    top: "0px",
    left: "500px",
  },
  iconContainer: {
    paddingTop: "8px",
    display:"flex",
    alignItems:"center"
  },

  '@media (max-width: 1128px)':{
    container: {
      width:"800px",
      height: "320px",
    }
  },

  '@media (max-width: 820px)':{
    container: {
      width:"700px",
      height: "320px",
    }
  },

  '@media (max-width: 720px)':{
    container: {
      width:"425px",
      height: "320px",
    },
    content: {
      width: "100%",
      height:"50%",
      padding: "16px",
      bottom:"0px"
    },

    h1: {
      ...Fonts.h2
    },

    blurBox:{
      width:"0%",
      height:"0%",
      background:Colors.greybg,
      position: "absolute",
      boxShadow:`0px 0px 0px 0px ${Colors.greybg}`
     },
     bgImage: {
       position: "absolute",
       width: "100%",
       top: "0px",
       left: "0px",
     },
  },

  '@media (max-width: 425px)':{
    container: {
      width:"300px",
    },

    content: {
      width: "100%",
      height:"50%",
      padding: "16px",
      bottom:"0px"
    },

    h1: {
      ...Fonts.h2
    },

    blurBox:{
      width:"0%",
      height:"0%",
      background:Colors.greybg,
      position: "absolute",
      boxShadow:`0px 0px 0px 0px ${Colors.greybg}`
     },
     bgImage: {
       position: "absolute",
       width: "100%",
       top: "0px",
       left: "0px",
     },
  },
}