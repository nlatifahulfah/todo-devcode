import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const StyledButton = withStyles((theme) => ({
  root: {
    // padding: "11px 51px",
    borderRadius: "45px",
    minWidth: "150px",
    height: "54px",
  },
  label: {
    fontWeight: 600,
    fontSize: "18px",
    textTransform: "capitalize",
    margin: "0px 6px",
  },
  text: {
    // default
    background: "#F4F4F4",
    color: "#4A4A4A",
    "&:hover": {
      background: "#F4F4F4",
      color: "#4A4A4A",
    },
  },
  textPrimary: {
    // color=primary
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    "&:hover": {
      background: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
  },
  textSecondary: {
    // color=secondary
    background: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    "&:hover": {
      background: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
    },
  },
}))(Button);

export default StyledButton;
