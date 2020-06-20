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
    width: "1080px",
    height: "320px",
    margin: "0px auto",
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
  }
}