import { makeStyles } from "@material-ui/styles";
import { ReactComponent as InfoIcon } from "assets/icon/modal-information-icon.svg";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    alignItems: "center",
    padding: "20px 30px",
    background: "#FFFFFF",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "12px",
  },
  text: {
    fontWeight: 500,
    fontSize: "14px",
    textAlign: "center",
    color: "#111111",
    marginLeft: 13,
  },
}));

export default function AlertActivityCard({ text }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <InfoIcon />
      <div className={classes.text}>{text}</div>
    </div>
  );
}
