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

export const sortBy = {
  terbaru: 1,
  terlama: 2,
  az: 3,
  za: 4,
  belumSelesai: 5,
};

export default function SortCard({ value, onChange }) {
  const classes = useStyles();

  return (
    <div data-cy="sort-parent" className={classes.root}>
      <div
        data-cy="sort-selection"
        className={classes.sortItem}
        onClick={() => onChange && onChange(sortBy.terbaru)}
      >
        <TerbaruIcon />
        <div className={classes.itemText}>Terbaru</div>
        {value === sortBy.terbaru && <SelectedIcon />}
      </div>
      <div
        data-cy="sort-selection"
        className={classes.sortItem}
        onClick={() => onChange && onChange(sortBy.terlama)}
      >
        <TerlamaIcon />
        <div className={classes.itemText}>Terlama</div>
        {value === sortBy.terlama && <SelectedIcon />}
      </div>
      <div
        data-cy="sort-selection"
        className={classes.sortItem}
        onClick={() => onChange && onChange(sortBy.az)}
      >
        <AZIcon />
        <div className={classes.itemText}>A-Z</div>
        {value === sortBy.az && <SelectedIcon />}
      </div>
      <div
        data-cy="sort-selection"
        className={classes.sortItem}
        onClick={() => onChange && onChange(sortBy.za)}
      >
        <ZAIcon />
        <div className={classes.itemText}>Z-A</div>
        {value === sortBy.za && <SelectedIcon />}
      </div>
      <div
        data-cy="sort-selection"
        className={classes.sortItem}
        onClick={() => onChange && onChange(sortBy.belumSelesai)}
      >
        <BelumSelesaiIcon />
        <div className={classes.itemText}>Belum Selesai</div>
        {value === sortBy.belumSelesai && <SelectedIcon />}
      </div>
    </div>
  );
}
