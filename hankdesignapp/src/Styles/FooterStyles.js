
export default {
  root: {
    width:"1080px",
    margin:"0px auto"
  },
  footer: {
    width:"100%",
    padding: "120px 5%",
    width: "100%",
    boxSizing: "border-box",
  },
  section: {
    display: "flex",
  },
  socialMedias: {
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
  email: {
    background: "rgba(255,255,255,0.15)",
    padding: "0px 24px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "6px"
  },
  p1: {
    fontSize: "14px",
    fontWeight: "600",
    color: "white",
    opacity: "0.5"
  },
  copyRight: {
    borderTop: "1px solid rgba(255,255,255,0.2)",
    padding: "16px 5%",
    width: "100%",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  p2: {
    fontSize: "14px",
    fontWeight: "300",
    color: "white",
    opacity: "0.7"
  }
}