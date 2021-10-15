import Button from "components/Button";
import Header from "components/Header";
import { ReactComponent as PlusIcon } from "assets/icon/tabler_plus.svg";
import Title from "components/Title";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import ActivityEmptyImage from "assets/png/activity-empty-state.png";

const useStyles = makeStyles(() => ({
  container: {
    width: "100%",
    maxWidth: 1000,
    margin: "auto",
  },
  mb42: { marginBottom: 42 },
  addActivityImg: {
    maxWidth: "100%",
    height: "auto",
    display: "flex",
    margin: "auto",
  },
}));

function Dashboard() {
  const classes = useStyles();

  return (
    <>
      <Header className={classes.mb42} />
      <div className={classes.container}>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          className={classes.mb42}
        >
          <Title>Activity</Title>
          <Button color="primary" startIcon={<PlusIcon />}>
            Tambah
          </Button>
        </Grid>
        {/* <div> */}
        <img
          src={ActivityEmptyImage}
          alt="add-activity"
          className={classes.addActivityImg}
        />
        {/* </div> */}
      </div>
    </>
  );
}

export default Dashboard;
