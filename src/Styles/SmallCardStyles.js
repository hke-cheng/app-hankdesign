import Fonts from "../Constant/Fonts";
import Colors from "../Constant/Colors";


export default {
  link: {
    textDecoration: "none",
    color: props => props.textColor,
  },
  root: {
    position: "relative",
    width: "100%",
    height: "460px",
    background: props => props.backgroundColor,
    borderRadius: "8px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    overflow: "hidden",
    '&:hover': {
      transform: "translateY(-10px)",
      transition: "0.3s ease-in-out",
      boxShadow: `0px 6px 29px 8px ${Colors.black1}`,
      cursor: "pointer",
    }
  },

  content: {
    boxSizing: "border-box",
    padding: "32px",
    margin: "0px",
    position: "relative",
    zIndex: "20",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  },

  h2: {
    ...Fonts.h2,
    textAlign: "center"
  },
  p2: {
    paddingTop: "8px",
    ...Fonts.p2,
    textAlign: "center",
    opacity: "0.6"
  },

  imageContainer: {
    width: "300px",
    position: "absolute",
    bottom: "-76px",
    alignItems: "center",
    justifyContent: "center",
  },
  imgBlur: {
    width: "100%",
    height:"10px",
    position:"absolute",
    backgroundColor:Colors.greybg,
    boxShadow:`0px -13px 25px 87px ${Colors.greybg}`,
    bottom:"20px",
  },
  frontImage: {
    width: "100%",
  },
}