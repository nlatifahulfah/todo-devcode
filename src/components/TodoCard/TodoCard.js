import PropTypes from "prop-types";
import { Checkbox } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { ReactComponent as DeleteIcon } from "assets/icon/delete-button.svg";
import { ReactComponent as EditIcon } from "assets/icon/edit-button.svg";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    borderRadius: "12px",
    padding: "12px",
    background: "#FFFFFF",
    boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.1)",
    marginBottom: 10,
  },
  todo: {
    display: "flex",
    alignItems: "center",
    flexGrow: 1,
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

export const todoPriority = {
  "very-high": {
    label: "Very High",
    color: "#ED4C5C",
  },
  high: { label: "High", color: "#F8A541" },
  normal: { label: "Medium", color: "#00A790" },
  low: { label: "Low", color: "#428BC1" },
  "very-low": { label: "Very Low", color: "#8942C1" },
};

export default function TodoCard({
  isDone,
  priority,
  title,
  onClickEdit,
  onClickDelete,
  onClickCheckbox,
  className,
}) {
  const classes = useStyles();

  return (
    <div data-cy="todo-item" className={clsx(classes.root, className)}>
      <div className={classes.todo}>
        <Checkbox
          data-cy="todo-item-checkbox"
          color="primary"
          checked={isDone}
          onChange={(e) => {
            console.log("checkbox");
            e.stopPropagation();
            onClickCheckbox && onClickCheckbox(e);
          }}
        />
        <div
          data-cy="todo-item-priority-indicator"
          className={classes.priorityIndicator}
          style={{ background: todoPriority[priority]?.color }}
        />
        <div data-cy="todo-item-title" className={classes.title}>
          {title}
        </div>
        <EditIcon
          data-cy="todo-item-edit-button"
          onClick={(e) => {
            console.log("edit");
            e.stopPropagation();
            onClickEdit && onClickEdit(e);
          }}
        />
      </div>
      <DeleteIcon
        data-cy="todo-item-delete-button"
        onClick={(e) => {
          e.stopPropagation();
          onClickDelete && onClickDelete(e);
        }}
      />
    </div>
  );
}

TodoCard.propTypes = {
  isDone: PropTypes.bool,
  priority: PropTypes.oneOf(Object.keys(todoPriority)),
  title: PropTypes.string,
  onClickEdit: PropTypes.func,
  onClickDelete: PropTypes.func,
  onClickCheckbox: PropTypes.func,
};
