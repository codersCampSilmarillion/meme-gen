import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    marginTop: "80px",
    [theme.breakpoints.down(700)]: {
      flexDirection: "column",
      alignItems: "center"
    },
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid rgba(0, 0, 0, 0.12)",
    padding: "10px"
  },
  gridList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
    maxHeight: "200px"
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
  },
  tile: {
    cursor: "pointer"
  },
  selectedImage: {
    marginBottom: "30px",
    maxWidth: "80%",
    [theme.breakpoints.down(400)]: { maxWidth: "270px" },
    border: "1px solid rgba(0, 0, 0, 0.12)"
  },
  selectedTitle: {
    padding: "10px"
  },
  selected: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px",
    width: "50%",
    [theme.breakpoints.down(700)]: { width: "80%" }
  },
  formList: {
    display: "flex",
    flexDirection: "column",
    width: "50%",
    [theme.breakpoints.down(700)]: { width: "100%" }
  }
}));

export default useStyles;
