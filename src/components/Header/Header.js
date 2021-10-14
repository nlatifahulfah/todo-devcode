import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  headerBackground: {
    background: theme.palette.primary.main,
    height: "105px",
    display: "flex",
    alignItems: "center",
  },
  headerTitle: {
    maxWidth: 1000,
    width: "100%",
    margin: "auto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 24,
    textTransform: "uppercase",
    color: theme.palette.primary.contrastText,
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <div className={classes.headerBackground}>
      <div className={classes.headerTitle}>To Do List App</div>
    </div>
  );
}

export default Header;