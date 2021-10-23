import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  root: {
    fontWeight: "bold",
    fontSize: 36,
    color: "#111111",
  },
}));

const Title = ({ children, ...props }) => {
  const classes = useStyles();
  return (
    <h1 className={classes.root} {...props}>
      {children}
    </h1>
  );
};

export default Title;
