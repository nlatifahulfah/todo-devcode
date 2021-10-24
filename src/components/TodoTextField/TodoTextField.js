import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "14px",
    border: "2px solid #E5E5E5",
    borderRadius: "6px",
    outline: "none",
    fontSize: 16,
    color: "#111111",

    "&:focus": {
      borderColor: "#16ABF8",
    },
  },
}));

export default function TodoTextField({ className, ...props }) {
  const classes = useStyles();

  return <input className={clsx(classes.root, className)} {...props} />;
}
