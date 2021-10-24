import { makeStyles } from "@material-ui/styles";
import { ReactComponent as SelectedIcon } from "assets/icon/sort-selection-selected.svg";
import { ReactComponent as ChevronDown } from "assets/icon/tabler_chevron-down.svg";
import clsx from "clsx";
import { todoPriority } from "components/TodoCard/TodoCard";
import { useState } from "react";

const useStyles = makeStyles(() => ({
  root: { width: 205, position: "relative" },
  selected: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "#FFFFFF",
    border: "1px solid #E5E5E5",
    borderRadius: "6px",
    padding: "14px 17px",
  },
  priorityIndicator: {
    width: "14px",
    height: "14px",
    background: "#16ABF8",
    borderRadius: "50%",
    marginRight: 19,
  },
  itemContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "14px 22px 14px 17px",
  },
  divider: {
    borderBottom: "1px solid #E5E5E5",
  },
  priorityItem: { display: "flex", alignItems: "center" },
  listItem: {
    width: 205,
    borderRadius: "6px",
    background: "#FFFFFF",
    border: "1px solid #E5E5E5",
    position: "absolute",
    top: 0,
  },
  text: {
    fontSize: "16px",
    color: "#111111",
  },
  selectOpen: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "14px 17px",
    background: "#F4F4F4",
    borderBottom: "1px solid #E5E5E5",
  },
}));

export default function SelectPriority({ selected, onSelect }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <div className={classes.root}>
      <div
        data-cy="modal-add-priority-dropdown"
        className={classes.selected}
        onClick={() => setOpen(true)}
      >
        <div className={classes.priorityItem}>
          <div
            className={classes.priorityIndicator}
            style={{ background: todoPriority[selected]?.color }}
          />
          <div className={classes.text}>{todoPriority[selected]?.label}</div>
        </div>
        <ChevronDown />
      </div>

      {open && (
        <div className={classes.listItem}>
          <div className={classes.selectOpen}>
            <div className={classes.text}>Pilih priority</div>
            <ChevronDown
              style={{ transform: "matrix(1, 0, 0, -1, 0, 0)" }}
              onClick={() => setOpen((c) => !c)}
            />
          </div>
          {Object.entries(todoPriority).map(([key, val], i, arr) => (
            <div
              data-cy="modal-add-priority-item"
              key={i}
              className={clsx(
                classes.itemContainer,
                i + 1 < arr.length && classes.divider
              )}
              onClick={() => {
                onSelect && onSelect(key);
                setOpen((c) => !c);
              }}
            >
              <div className={classes.priorityItem}>
                <div
                  className={classes.priorityIndicator}
                  style={{ background: val.color }}
                />
                <div className={classes.text}>{val.label}</div>
              </div>
              {selected === key && <SelectedIcon />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
