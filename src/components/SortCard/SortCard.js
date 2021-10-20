import { makeStyles } from "@material-ui/styles";
import { ReactComponent as AZIcon } from "assets/icon/sort-a-z.svg";
import { ReactComponent as BelumSelesaiIcon } from "assets/icon/sort-belum-selesai.svg";
import { ReactComponent as SelectedIcon } from "assets/icon/sort-selection-selected.svg";
import { ReactComponent as TerbaruIcon } from "assets/icon/sort-terbaru.svg";
import { ReactComponent as TerlamaIcon } from "assets/icon/sort-terlama.svg";
import { ReactComponent as ZAIcon } from "assets/icon/sort-z-a.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 235,
    borderRadius: 6,
    background: "#FFFFFF",
    border: "1px solid #E5E5E5",
    boxShadow: "0px 6px 15px 5px rgba(0, 0, 0, 0.1)",
  },
  sortItem: {
    display: "flex",
    alignItems: "center",
    padding: "14px 23px",
    borderBottom: "1px solid #E5E5E5",
  },
  itemText: {
    fontSize: "16px",
    color: "#4A4A4A",
    flexGrow: 1,
    marginLeft: 16,
  },
}));

export default function SortCard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.sortItem}>
        <TerbaruIcon />
        <div className={classes.itemText}>Terbaru</div>
        <SelectedIcon />
      </div>
      <div className={classes.sortItem}>
        <TerlamaIcon />
        <div className={classes.itemText}>Terlama</div>
      </div>
      <div className={classes.sortItem}>
        <AZIcon />
        <div className={classes.itemText}>A-Z</div>
      </div>
      <div className={classes.sortItem}>
        <ZAIcon />
        <div className={classes.itemText}>Z-A</div>
      </div>
      <div className={classes.sortItem}>
        <BelumSelesaiIcon />
        <div className={classes.itemText}>Belum Selesai</div>
      </div>
    </div>
  );
}
