import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "none",
    fontWeight: "bold",
    fontSize: 36,
    color: "#111111",
    border: "none",

    "&:focus": {
      border: "none",
      outline: "none",
      borderBottom: `2px solid ${theme.palette.primary.main}`,
    },
  },
}));
const TitleTextField = ({ ...props }) => {
  const classes = useStyles();

  return <input className={classes.root} type="text" {...props} />;
};

export default TitleTextField;
