import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import { forwardRef } from "react";

const useStyles = makeStyles(() => ({
  root: {
    borderRadius: "45px",
    minWidth: "150px",
    height: "54px",
    border: "none",
    fontWeight: 600,
    fontSize: "18px",
    textTransform: "capitalize",
    margin: "0px 6px",
  },
  primary: {
    background: "#16ABF8",
    color: "#FFFFFF",

    "&:disabled": {
      opacity: 0.2,
    },
  },
  secondary: {
    background: "#ED4C5C",
    color: "#FFFFFF",
  },
}));

const StyledButton = forwardRef(
  ({ color, children, startIcon, className, ...props }, ref) => {
    const classes = useStyles();

    return (
      <button
        className={clsx(
          classes.root,
          color === "primary" && classes.primary,
          color === "secondary" && classes.secondary,
          className
        )}
        ref={ref}
        {...props}
      >
        {startIcon}
        {children}
      </button>
    );
  }
);

export default StyledButton;
