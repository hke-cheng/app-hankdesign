//
import Colors from "../Constant/Colors";
import Fonts from "../Constant/Fonts";

export default {
  link: {
    textDecoration: "none",
    color: Colors.black1,
  },
  root: {
    boxSizing: "border-box",
    width:"100%",
    padding: "8px 8px",
    display: "flex",
    alignItems: "center",
    borderRadius: "8px",
    marginTop: "8px",
    "&:hover": {
      background: Colors.grey3,
      transition: "0.2s ease-in-out"
    }
  },
  avatarContainer: {
    boxSizing:"border-box",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    background: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    "& img": {
      width: "40px",
    }
  },
  info: {
    paddingLeft: "8px",
  },
  name: {
    ...Fonts.p2
  },
  role: {
    ...Fonts.p3
  }

}