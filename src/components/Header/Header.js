import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";

const useStyles = makeStyles(() => ({
  headerBackground: {
    background: "#16ABF8",
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
    color: "#FFFFFF",
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
        TO DO LIST APP
      </div>
    </div>
  );
}

export default Header;
