
import Colors from "../Constant/Colors";
import Fonts from "../Constant/Fonts";

export default {
  root: {
    padding: "48px 64px",
    marginTop: "48px",
    boxSizing: "border-box",
    borderTop: `1px solid ${Colors.grey3}`,
  },
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  subTitle: {
    ...Fonts.l2,
    width: "300px",
  },
  p1: {
    ...Fonts.p1,
    width: "680px",
  },
  overFlow: {
    width: "100%",
    height: "680px",
    border: `1px solid ${Colors.grey3}`,
    borderRadius: "8px",
    overflow: "hidden"
  },
  overflowP1: {
    ...Fonts.p4,
    color: Colors.black2,
    textAlign: "center",
    backgroundColor: Colors.grey3,
    padding: "16px",
    borderRadius: "8px",
    opacity: "0.5"
  },
  overflowContainer: {
    marginTop: "48px"
  }
};