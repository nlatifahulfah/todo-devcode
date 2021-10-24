import { makeStyles } from "@material-ui/styles";
import { ReactComponent as DeleteIcon } from "assets/icon/delete-button.svg";
import clsx from "clsx";
import { formatDate } from "helper/format";
import PropTypes from "prop-types";

const useStyles = makeStyles(() => ({
  card: {
    padding: "22px 27px",
    width: 180,
    height: 190,
    background: "#FFFFFF",
    boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "12px",
  },
  title: {
    fontWeight: "bold",
    fontSize: "18px",
    color: "#111111",
    height: "162px",
    overflow: "hidden",
  },
  date: {
    color: "#888888",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "14px",
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

function ActivityCard({ title, date, onClick, onClickDelete, className }) {
  const classes = useStyles();

  return (
    <div
      data-cy="activity-item"
      className={clsx(classes.card, className)}
      onClick={onClick}
    >
      <div data-cy="activity-item-title" className={classes.title}>
        {title}
      </div>
      <div className={classes.footer}>
        <div data-cy="activity-item-date" className={classes.date}>
          {formatDate(date)}
        </div>
        <DeleteIcon
          data-cy="activity-item-delete-button"
          onClick={(e) => {
            e.stopPropagation();
            onClickDelete && onClickDelete();
          }}
        />
      </div>
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
