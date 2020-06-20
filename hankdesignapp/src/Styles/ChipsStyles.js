import Colors from "../Constant/Colors";
import Fonts from "../Constant/Fonts";

export default{
  root: {
    height: "32px",
    padding: "0px 16px",
    marginRight: "8px",
    background: Colors.grey3,

    boxSizing: "border-box",
    borderRadius: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  p2: {
    ...Fonts.p2
  }
}