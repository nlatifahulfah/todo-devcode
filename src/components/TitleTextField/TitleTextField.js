import { TextField, withStyles } from "@material-ui/core";

const TitleTextField = withStyles({
  root: {
    "& .MuiInputBase-root": {
      fontWeight: "bold",
      fontSize: 36,
      color: "#111111",
    },
  },
})(TextField);

export default TitleTextField;
