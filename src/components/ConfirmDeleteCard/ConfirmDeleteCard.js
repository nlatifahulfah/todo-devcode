import { makeStyles } from "@material-ui/styles";
import Button from "components/Button";
import { ReactComponent as DeleteIcon } from "assets/icon/modal-delete-icon.svg";
import clsx from "clsx";
import { forwardRef } from "react";

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
    // margin: "20px auto",
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

const ConfirmDeleteCard = forwardRef(
  (
    { item, itemTitle, onClickBatal, onClickHapus, className, ...props },
    ref
  ) => {
    const classes = useStyles();

    return (
      <div
        data-cy="modal-delete"
        ref={ref}
        className={clsx(classes.root, className)}
        {...props}
      >
        <DeleteIcon data-cy="modal-delete-icon" className={classes.mb50} />
        <div data-cy="modal-delete-title" className={classes.text}>
          Apakah anda yakin menghapus {item}
        </div>
        <div className={clsx(classes.text, classes.bold)}>"{itemTitle}"?</div>
        <div className={classes.buttonGroup}>
          <Button
            data-cy="modal-delete-cancel-button"
            className={classes.mx10}
            onClick={onClickBatal}
          >
            Batal
          </Button>
          <Button
            data-cy="modal-delete-confirm-button"
            color="secondary"
            className={classes.mx10}
            onClick={onClickHapus}
          >
            Hapus
          </Button>
        </div>
      </div>
    );
  }
);

export default ConfirmDeleteCard;
