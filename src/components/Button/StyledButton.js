import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { forwardRef } from "react";

const useStyles = makeStyles((theme) => ({
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
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,

    "&:disabled": {
      opacity: 0.2,
    },
  },
  secondary: {
    background: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
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
