import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/styles";

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
