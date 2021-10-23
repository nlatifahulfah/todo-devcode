import { Grid, Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { ReactComponent as PlusIcon } from "assets/icon/tabler_plus.svg";
import ActivityEmptyImage from "assets/png/activity-empty-state.png";
import ActivityCard from "components/ActivityCard";
import Button from "components/Button";
import Header from "components/Header";
import Title from "components/Title";
import { useEffect, useState } from "react";
import * as api from "api/activity";
import ConfirmDeleteCard from "components/ConfirmDeleteCard";

const useStyles = makeStyles(() => ({
  container: {
    width: "100%",
    maxWidth: 1000,
    margin: "auto",
  },
  mb26: { marginBottom: 26 },
  mb42: { marginBottom: 42 },
  mb48: { marginBottom: 48 },
  addActivityImg: {
    maxWidth: "100%",
    height: "auto",
    display: "flex",
    margin: "auto",
  },
  modalConfirm: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  },
}));

function Dashboard() {
  const classes = useStyles();
  const [list, setList] = useState([]);

  useEffect(() => {
    api
      .getList()
      .then((result) => {
        console.log({ result });
        if (result?.data) {
          setList(result.data);
        }
        return result;
      })
      .catch((error) => console.log({ error }));
  }, []);

  // ---- delete
  const [openConfirm, setOpenConfirm] = useState(false);
  const [activityItem, setActivityItem] = useState(null);

  const reqDeleteActivity = (id, onSuccess) =>
    api
      .remove(id)
      .then((result) => {
        onSuccess && onSuccess(id);
        console.log("removed:", { result });
      })
      .catch((error) => console.log({ error }));

  const deleteActivity = (v) => {
    setActivityItem(v);
    console.log(v);
    setOpenConfirm(true);
  };

  const onSuccessDelete = (id) => {
    setList((c) => c.filter((v) => v.id !== id));
    setOpenConfirm(false);
  };

  // ---add
  const reqAddActivity = () =>
    api
      .add("New Activity")
      .then((result) => {
        console.log("add", { result });
        if (result) {
          setList((c) => [...c, result]);
        }
      })
      .catch((error) => console.log({ error }));

  return (
    <div style={{ position: "relative" }}>
      <Header className={classes.mb42} />
      <div className={classes.container}>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          className={classes.mb42}
        >
          <Title>Activity</Title>
          <Button
            color="primary"
            startIcon={<PlusIcon />}
            onClick={reqAddActivity}
          >
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
                    onClickDelete={() => deleteActivity(v)}
                  />
                </Grid>
              ))}
          </Grid>
        )}
      </div>
      <Modal open={openConfirm} onClose={() => setOpenConfirm(false)}>
        <ConfirmDeleteCard
          item="activity"
          itemTitle={activityItem?.title}
          onClickBatal={() => setOpenConfirm(false)}
          onClickHapus={() =>
            reqDeleteActivity(activityItem?.id, onSuccessDelete)
          }
          className={classes.modalConfirm}
        />
      </Modal>
    </div>
  );
}

export default Dashboard;
