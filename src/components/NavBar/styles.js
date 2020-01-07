import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        marginBottom: "80px",
        flexWrap: "wrap",
        justifyContent: "space-around",
        overflow: "hidden",
        backgroundColor: theme.palette.background.paper,
        border: "1px solid rgba(0, 0, 0, 0.12)",
        padding: "10px"
    }
}));

export default useStyles;