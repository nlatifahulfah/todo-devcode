import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";

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

function Header({ className }) {
  const classes = useStyles();

  return (
    <div
      data-cy="header-background"
      className={clsx(classes.headerBackground, className)}
    >
      <div data-cy="header-title" className={classes.headerTitle}>
        To Do List App
      </div>
    </div>
  );
}

export default Header;
