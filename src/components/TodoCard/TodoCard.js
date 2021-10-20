import PropTypes from "prop-types";
import { Card, Checkbox, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { ReactComponent as DeleteIcon } from "assets/icon/delete-button.svg";
import { ReactComponent as EditIcon } from "assets/icon/edit-button.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    borderRadius: "12px",
    padding: "28px 24px",
  },
  priorityIndicator: {
    width: "9px",
    height: "9px",
    background: theme.palette.primary.main,
    borderRadius: "50%",
    margin: "0 16px 0 13px",
  },
  title: {
    fontWeight: 500,
    fontSize: "18px",
    lineHeight: "27px",
    color: "#111111",
    marginRight: 19,
  },
}));

export default function TodoCard({
  isDone,
  priority,
  title,
  onClickEdit,
  onClickDelete,
  onClickCheckbox,
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div style={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
        <Checkbox color="primary" />
        <div
          className={classes.priorityIndicator}
          style={{ background: priority }}
        />
        <div className={classes.title}>{title}</div>
        <EditIcon />
      </div>
      <DeleteIcon style={{}} />
    </Card>
  );
}

export const todoPriority = {
  "Very High": "#ED4C5C",
  High: "#F8A541",
  Medium: "#00A790",
  Low: "#428BC1",
  "Very Low": "#8942C1",
};

TodoCard.propTypes = {
  isDone: PropTypes.bool,
  priority: PropTypes.oneOf(Object.values(todoPriority)),
  title: PropTypes.string,
  onClickEdit: PropTypes.func,
  onClickDelete: PropTypes.func,
  onClickCheckbox: PropTypes.func,
};
