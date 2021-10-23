import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/styles";
import * as api from "api/activity";
import { ReactComponent as PlusIcon } from "assets/icon/tabler_plus.svg";
import ActivityEmptyImage from "assets/png/activity-empty-state.png";
import ActivityCard from "components/ActivityCard";
import AlertActivityCard from "components/AlertActivityCard";
import Button from "components/Button";
import ConfirmDeleteCard from "components/ConfirmDeleteCard";
import Header from "components/Header";
import Title from "components/Title";
import { useEffect, useState } from "react";

const useStyles = makeStyles(() => ({
  container: {
    width: "100%",
    maxWidth: 1000,
    margin: "auto",
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 42,
  },
  mb42: { marginBottom: 42 },
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
  list: { display: "flex", flexWrap: "wrap" },
  listItem: { margin: "0 12px 26px 0" },
}));

function Dashboard({ onClickActivity }) {
  const classes = useStyles();
  const [list, setList] = useState([]);

  const reqGetList = () =>
    api
      .getList()
      .then((result) => {
        if (result?.data) {
          setList(result.data);
        }
        return result;
      })
      .catch((error) => console.log({ error }));

  useEffect(() => {
    reqGetList();
  }, []);

  const [openModal, setOpenModal] = useState(false);
  const [modalType, setModalType] = useState(1); // 1.confirm delete 2.info deleted
  const [activityItem, setActivityItem] = useState(null);

  const reqDeleteActivity = (id, onSuccess) =>
    api
      .remove(id)
      .then((result) => {
        onSuccess && onSuccess(id);
      })
      .catch((error) => console.log({ error }));

  const deleteActivity = (v) => {
    setActivityItem(v);
    setModalType(1);
    setOpenModal(true);
  };

  const onSuccessDelete = (id) => {
    setList((c) => c.filter((v) => v.id !== id));
    setModalType(2);
  };

  const reqAddActivity = () =>
    api
      .add("New Activity")
      .then((result) => {
        if (result) {
          setList((c) => [...c, result]);
          reqGetList();
        }
      })
      .catch((error) => console.log({ error }));

  return (
    <div style={{ position: "relative" }}>
      <Header className={classes.mb42} />
      <div className={classes.container}>
        <div className={classes.title}>
          <Title data-cy="activity-title">Activity</Title>
          <Button
            data-cy="activity-add-button"
            color="primary"
            startIcon={<PlusIcon />}
            onClick={reqAddActivity}
          >
            Tambah
          </Button>
        </div>
        {(!list || list.length === 0) && (
          <img
            data-cy="activity-empty-state"
            src={ActivityEmptyImage}
            alt="add-activity"
            className={classes.addActivityImg}
            onClick={reqAddActivity}
          />
        )}
        {list?.length > 0 && (
          <div className={classes.list}>
            {list?.length > 0 &&
              list.map((v) => (
                <ActivityCard
                  key={v.id}
                  className={classes.listItem}
                  title={v.title}
                  date={v.created_at}
                  onClick={() => onClickActivity && onClickActivity(v)}
                  onClickDelete={() => deleteActivity(v)}
                />
              ))}
          </div>
        )}
      </div>
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <>
          {modalType === 1 && (
            <ConfirmDeleteCard
              item="activity"
              itemTitle={activityItem?.title}
              onClickBatal={() => setOpenModal(false)}
              onClickHapus={() =>
                reqDeleteActivity(activityItem?.id, onSuccessDelete)
              }
              className={classes.modalConfirm}
            />
          )}
          {modalType === 2 && (
            <div style={{ maxWidth: 490 }} className={classes.modalConfirm}>
              <AlertActivityCard text="Activity berhasil dihapus" />
            </div>
          )}
        </>
      </Modal>
    </div>
  );
}

export default Dashboard;
