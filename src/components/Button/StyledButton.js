import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/styles";

const StyledButton = withStyles((theme) => ({
  root: {
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
    background: "#F4F4F4",
    color: "#4A4A4A",
    "&:hover": {
      background: "#F4F4F4",
      color: "#4A4A4A",
    },
  },
  textPrimary: {
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    "&:hover": {
      background: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
    "&:disabled": {
      color: "#FFFFFF",
      background: "#16ABF8",
      opacity: 0.2,
    },
  },
  textSecondary: {
    background: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    "&:hover": {
      background: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
    },
  },
}))(Button);

export default StyledButton;
