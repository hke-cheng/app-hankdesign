
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
    display: "colum",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },

  subTitle: {
    ...Fonts.h2,
    marginBottom:"20px"
  },

  p1: {
    ...Fonts.p1,
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
  },

  '@media (max-width: 820px)': {
    root: {
      padding: "16px",
      marginTop: "0px",
    }
  },

};