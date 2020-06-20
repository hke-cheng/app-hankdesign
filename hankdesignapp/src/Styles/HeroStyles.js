import Colors from "../Constant/Colors";
import Fonts from "../Constant/Fonts";

export default {
  root: {
    background: Colors.black2,
    boxSizing: "border-box"
  },
  container: {
    width: "1080px",
    height: "46vh",
    margin: "0px auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box"
  },
  h1: {
    ...Fonts.s1,
    padding: "0px 24px",
    color: "white",
    textAlign: "center"
  },
  p1: {
    color: Colors.ongrey,
    fontSize:"20px",
    fontWeight:"500",
    paddingTop: "24px",
    textAlign: "center"
  },
  socialMedias: {
    paddingTop: "24px",
    display: "flex",
    alignItems: "center",
  },
  link: {
    opacity: "0.5",
    "&:hover": {
      opacity: "1",
      transition: "0.3s ease-in-out"
    }
  },
}
