import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "none",
    fontWeight: "bold",
    fontSize: 36,
    color: "#111111",
    outline: "none",
    border: "none",

    "&:focus": {
      borderBottom: `2px solid "#16ABF8"`,
    },
  },
}));
const TitleTextField = ({ ...props }) => {
  const classes = useStyles();

  return <input className={classes.root} type="text" {...props} />;
};

export default TitleTextField;
