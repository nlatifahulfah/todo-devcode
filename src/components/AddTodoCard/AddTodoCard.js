import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { ReactComponent as CloseButton } from "assets/icon/modal-add-close-button.svg";
import clsx from "clsx";
import Button from "components/Button";
import SelectPriority from "components/SelectPriority";
import { forwardRef } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 830,
    background: "#FFFFFF",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "12px",
  },
  titleContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "24px 47px 24px 30px",
    borderBottom: "1px solid #E5E5E5",
  },
  titleText: {
    fontWeight: 600,
    fontSize: "18px",
    color: "#111111",
  },
  fieldContainer: {
    padding: "38px 41px 24px 30px",
    borderBottom: "1px solid #E5E5E5",
  },
  inputLabel: {
    fontWeight: 600,
    fontSize: "12px",
    color: "#111111",
    marginBottom: 9,
  },
  textField: {
    marginBottom: 26,
    "& .MuiInputBase-root": {
      height: 52,
      fontSize: 16,
      color: "#111111",
      borderRadius: "6px",
    },
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
    padding: "15px 40px 19px",
  },
}));

const AddTodoCard = forwardRef(
  (
    {
      name,
      onChangeName,
      priority,
      onChangePriority,
      onSubmit,
      onClose,
      className,
    },
    ref
  ) => {
    const classes = useStyles();

    return (
      <div ref={ref} className={clsx(classes.root, className)}>
        <div className={classes.titleContainer}>
          <div className={classes.titleText}>Tambah List Item</div>
          <CloseButton onClick={onClose} />
        </div>
        <div className={classes.fieldContainer}>
          <div className={classes.inputLabel}>NAMA LIST ITEM</div>
          <TextField
            autoFocus
            value={name}
            onChange={(e) => onChangeName && onChangeName(e.target.value)}
            variant="outlined"
            fullWidth
            className={classes.textField}
            placeholder="Tambahkan nama list item"
          />
          <div className={classes.inputLabel}>PRIORITY</div>
          <SelectPriority
            selected={priority}
            onSelect={(v) => onChangePriority && onChangePriority(v)}
          />
        </div>
        <div className={classes.buttonContainer}>
          <Button color="primary" disabled={!Boolean(name)} onClick={onSubmit}>
            Simpan
          </Button>
        </div>
      </div>
    );
  }
);

export default AddTodoCard;
