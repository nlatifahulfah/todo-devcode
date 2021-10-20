import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { ReactComponent as PlusIcon } from "assets/icon/tabler_plus.svg";
import ActivityEmptyImage from "assets/png/activity-empty-state.png";
import ActivityCard from "components/ActivityCard";
import Button from "components/Button";
import Header from "components/Header";
import Title from "components/Title";
import { useState } from "react";

const useStyles = makeStyles(() => ({
  container: {
    width: "100%",
    maxWidth: 1000,
    margin: "auto",
  },
  mb26: { marginBottom: 26 },
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
  const [list, setList] = useState(generateList(21));

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
        {(!list || list.length === 0) && (
          <img
            src={ActivityEmptyImage}
            alt="add-activity"
            className={classes.addActivityImg}
          />
        )}
        {list?.length > 0 && (
          <Grid container>
            {list?.length > 0 &&
              list.map((v) => (
                <Grid item key={v.id} md={3}>
                  <ActivityCard
                    title={v.title}
                    date={v.created_at}
                    className={classes.mb26}
                  />
                </Grid>
              ))}
          </Grid>
        )}
      </div>
    </>
  );
}

export default Dashboard;

const generateList = (length) =>
  Array.from({ length }, (_, i) => ({
    id: i + 1,
    title: "New Activity" + i,
    created_at: new Date().toString(),
  }));
