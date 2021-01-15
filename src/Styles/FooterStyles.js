
export default {
  root: {
    width:"100%",
    height:"80px",
    margin:"0px auto",
    marginTop:"10vh",
    display: "flex",
    justifyContent: "center",
    borderTop: "1px solid rgba(255,255,255,0.2)",
  },
  copyRight: {
    width:"1080px",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },

  '@media (max-width: 1128px)':{
    copyRight: {
      width:"800px",
      // height: "320px",
    }
  },

  '@media (max-width: 820px)':{
    copyRight: {
      width:"700px",
      // height: "320px",
    }
  },

  '@media (max-width: 720px)':{
    copyRight: {
      width:"425px",
      flexDirection:"column",
      justifyContent: "center",
    }
  },
  '@media (max-width: 425px)':{
    copyRight: {
      width:"300px",
      justifyContent: "center",
    }
  },

  p2: {
    fontSize: "14px",
    fontWeight: "300",
    color: "white",
    opacity: "0.7"
  }
}