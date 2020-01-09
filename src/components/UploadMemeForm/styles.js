import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  form: {
    display: "flex",
    flexDirection: "column"
  },
  input: {
    margin: "5px"
  },
  btn: {
    width: "200px",
    marginRight: "auto",
    marginLeft: "auto"
  },
  content: {
    textAlign: "center"
  },

  link: {
    textDecoration: "underline"
  },
  image: {
    maxHeight: "60vh"
  }
}));

export default useStyles;
