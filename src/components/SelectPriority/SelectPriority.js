import { makeStyles } from "@material-ui/styles";
import { ReactComponent as ChevronDown } from "assets/icon/tabler_chevron-down.svg";
import { todoPriority } from "components/TodoCard/TodoCard";
import { useState } from "react";
import { ReactComponent as SelectedIcon } from "assets/icon/sort-selection-selected.svg";
import clsx from "clsx";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
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
    background: theme.palette.primary.main,
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
      <div className={classes.selected}>
        <div className={classes.priorityItem}>
          <div
            className={classes.priorityIndicator}
            style={{ background: "#ED4C5C" }}
          />
          <div className={classes.text}>Very High</div>
        </div>
        <ChevronDown onClick={() => setOpen((c) => !c)} />
      </div>

      {/* list menu */}
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
              className={clsx(
                classes.itemContainer,
                i + 1 < arr.length && classes.divider
              )}
              onClick={() => {
                onSelect && onSelect(val);
                setOpen((c) => !c);
              }}
            >
              <div className={classes.priorityItem}>
                <div
                  className={classes.priorityIndicator}
                  style={{ background: val }}
                />
                <div className={classes.text}>{key}</div>
              </div>
              {selected === val && <SelectedIcon />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
SelectPriority.propTypes = {
  selected: PropTypes.oneOf(Object.values(todoPriority)),
};
