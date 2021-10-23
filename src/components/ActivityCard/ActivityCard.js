import { Card, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import { ReactComponent as DeleteIcon } from "assets/icon/delete-button.svg";
import { formatDate } from "helper/format";
import clsx from "clsx";

const useStyles = makeStyles(() => ({
  card: {
    padding: "22px 27px",
    width: "235px",
    height: "234px",
    background: "#FFFFFF",
    boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "12px",
  },
  title: {
    fontWeight: "bold",
    fontSize: "18px",
    lineHeight: "27px",
    color: "#111111",
    height: "162px",
    overflow: "hidden",
  },
  date: {
    color: "#888888",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "21px",
  },
  pointer: { cursor: "pointer" },
}));

function ActivityCard({ title, date, onClick, onClickDelete, className }) {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.card, onClick && classes.pointer, className)}
      onClick={onClick}
    >
      <div className={classes.title}>{title}</div>
      <Grid container justifyContent="space-between" alignItems="center">
        <div className={classes.date}>{formatDate(date)}</div>
        <DeleteIcon
          onClick={(e) => {
            e.stopPropagation();
            onClickDelete && onClickDelete();
          }}
        />
      </Grid>
    </div>
  );
}

ActivityCard.propTypes = {
  /** card title */
  title: PropTypes.string,
  /** date string, eg. "2021-10-15T15:34:42.000Z" */
  date: PropTypes.string,
  /** onclick card */
  onClick: PropTypes.func,
  /** onclick delete icon */
  onClickDelete: PropTypes.func,
};

export default ActivityCard;
