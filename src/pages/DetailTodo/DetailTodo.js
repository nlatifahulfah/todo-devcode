import { Grid, IconButton, makeStyles, TextField } from "@material-ui/core";
import Header from "components/Header";
import TodoEmptyImage from "assets/png/todo-empty-state.png";
import Title from "components/Title";
import { ReactComponent as PlusIcon } from "assets/icon/tabler_plus.svg";
import { ReactComponent as EditIcon } from "assets/icon/edit-button.svg";
import { ReactComponent as BackIcon } from "assets/icon/back-button.svg";
import { ReactComponent as SortButton } from "assets/icon/todo-sort-button.svg";
import Button from "components/Button";
import { useState } from "react";
import TitleTextField from "components/TitleTextField";

const useStyles = makeStyles(() => ({
  container: {
    width: "100%",
    maxWidth: 1000,
    margin: "auto",
  },
  mb26: { marginBottom: 26 },
  mb42: { marginBottom: 42 },
  mb48: { marginBottom: 48 },
  mr18: { marginRight: 18 },
  addImg: {
    maxWidth: "100%",
    height: "auto",
    display: "flex",
    margin: "auto",
  },
  iconBtn: {
    cursor: "pointer",
    margin: "0px 12px",
  },
}));

export default function DetailTodo() {
  const classes = useStyles();
  const [list, setList] = useState([]);

  return (
    <>
      <Header className={classes.mb42} />
      <div className={classes.container}>
        <Grid container alignItems="center" className={classes.mb48}>
          <Grid item xs={12} sm container alignItems="center">
            {/* <IconButton> */}
            <BackIcon className={classes.iconBtn} />
            {/* </IconButton> */}
            {/* <Title>New Activity</Title> */}
            <TitleTextField value="New Activity" />
            {/* <IconButton> */}
            <EditIcon className={classes.iconBtn} />
            {/* </IconButton> */}
          </Grid>
          <Grid container justifyContent="flex-end" item xs={12} sm={4}>
            <SortButton className={classes.iconBtn} />
            <Button color="primary" startIcon={<PlusIcon />}>
              Tambah
            </Button>
          </Grid>
        </Grid>

        {(!list || list.length === 0) && (
          <img src={TodoEmptyImage} alt="add-todo" className={classes.addImg} />
        )}
      </div>
    </>
  );
}
