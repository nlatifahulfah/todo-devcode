import { makeStyles } from "@material-ui/styles";
import Button from "components/Button";
import { ReactComponent as DeleteIcon } from "assets/icon/modal-delete-icon.svg";
import clsx from "clsx";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "490px",
    // height: "355px",
    background: "#FFFFFF",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "12px",
    padding: "50px 58px 43px",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    marginTop: 46,
  },
  mx10: { margin: "0 10px" },
  mb50: { marginBottom: 50 },
  text: {
    fontSize: "18px",
    color: "#111111",
    fontWeight: 500,
    textAlign: "center",
    lineHeight: "150%",
  },
  bold: {
    fontWeight: 700,
  },
}));

export default function ConfirmDeleteCard({
  item,
  itemTitle,
  onClickBatal,
  onClickHapus,
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <DeleteIcon className={classes.mb50} />
      <div className={classes.text}>Apakah anda yakin menghapus {item}</div>
      <div className={clsx(classes.text, classes.bold)}>"{itemTitle}"?</div>
      <div className={classes.buttonGroup}>
        <Button className={classes.mx10} onClick={onClickBatal}>
          Batal
        </Button>
        <Button
          color="secondary"
          className={classes.mx10}
          onClick={onClickBatal}
        >
          Hapus
        </Button>
      </div>
    </div>
  );
}
