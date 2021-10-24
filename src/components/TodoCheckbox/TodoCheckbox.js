import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "block",
    position: "relative",
    paddingLeft: "20px",
    marginBottom: "20px",
    cursor: "pointer",
    fontSize: "22px",
    userSelect: "none",
    "& input": {
      position: "absolute",
      opacity: 0,
      cursor: "pointer",
      height: 0,
      width: 0,
      "&:checked": {
        "& ~ $checkmark": {
          backgroundColor: "#16ABF8",
          border: "none",
          "&:after": {
            display: "block",
          },
        },
      },
    },

    "& $checkmark": {
      "&:after": {
        left: "7px",
        top: "3px",
        width: "6px",
        height: "11px",
        border: "solid white",
        borderWidth: "0 2px 2px 0",
        transform: "rotate(45deg)",
      },
    },
  },

  checkmark: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "20px",
    width: "20px",
    border: "1px solid #C7C7C7",
    "&:after": {
      content: '""',
      position: "absolute",
      display: "none",
    },
  },
}));

export default function TodoCheckbox({ ...props }) {
  const classes = useStyles();

  return (
    <label className={classes.container} data-cy={props["data-cy"]}>
      <input type="checkbox" {...props} />
      <span className={classes.checkmark} data-cy={props["data-cy"]} />
    </label>
  );
}
