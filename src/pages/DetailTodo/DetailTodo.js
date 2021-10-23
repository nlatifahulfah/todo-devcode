import {
  Grid,
  IconButton,
  makeStyles,
  Modal,
  TextField,
} from "@material-ui/core";
import Header from "components/Header";
import TodoEmptyImage from "assets/png/todo-empty-state.png";
import Title from "components/Title";
import { ReactComponent as PlusIcon } from "assets/icon/tabler_plus.svg";
import { ReactComponent as EditIcon } from "assets/icon/edit-button.svg";
import { ReactComponent as BackIcon } from "assets/icon/back-button.svg";
import { ReactComponent as SortButton } from "assets/icon/todo-sort-button.svg";
import Button from "components/Button";
import { useEffect, useState } from "react";
import TitleTextField from "components/TitleTextField";
import * as apiTodo from "api/todo";
import * as apiActivity from "api/activity";
import clsx from "clsx";
import TodoCard from "components/TodoCard";
import AddTodoCard from "components/AddTodoCard";
import { todoPriority } from "components/TodoCard/TodoCard";

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
  pt24: { paddingTop: 24 },
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
  modalConfirm: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  },
}));

const defaultFormValues = { title: "", priority: "very-high" };

export default function DetailTodo({ activityId, activityTitle, onClickBack }) {
  const classes = useStyles();
  const [list, setList] = useState([]);

  useEffect(() => {
    if (activityId) {
      apiTodo.getList(activityId).then((result) => {
        setList(result.data);
        console.log({ result });
      });
    }
  }, [activityId]);

  const [title, setTitle] = useState(activityTitle);
  const [editTitle, setEditTitle] = useState(false);

  const reqEditTitle = () => {
    apiActivity.update(activityId, { title }).then((result) => {
      setEditTitle((c) => !c);
      console.log("update title", { result });
    });
  };

  const [openModal, setOpenModal] = useState(false);
  const toggleModal = () => setOpenModal((c) => !c);

  const [formValues, setFormValues] = useState(defaultFormValues);
  const [formType, setFormType] = useState(1);

  const openAdd = () => {
    setFormValues(defaultFormValues);
    toggleModal();
    setFormType(1);
  };

  const openEdit = (item) => {
    setFormValues(item);
    toggleModal();
    setFormType(2);
  };

  const reqAddTodo = () => {
    // console.log({ formValues });

    const data = {
      activity_group_id: activityId,
      title: formValues?.title,
      priority: formValues?.priority,
    };

    console.log("data to send", { data });

    apiTodo
      .add(data)
      .then((result) => {
        setFormValues(defaultFormValues);
        toggleModal();
        console.log("add result", { result });
        setList((c) => c.concat(result));
      })
      .catch((error) => console.log(error));
  };

  const reqEditTodo = () => {
    const data = {
      title: formValues?.title,
      is_active: formValues?.is_active,
      priority: formValues?.priority,
    };

    console.log("data to send", { data });

    apiTodo
      .update(formValues?.id, data)
      .then((result) => {
        console.log("edit result", { result });
        setList((c) => c.map((v) => (v.id === formValues?.id ? result : v)));
        setFormValues(defaultFormValues);
        toggleModal();
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Header className={classes.mb42} />
      <div className={classes.container}>
        <Grid
          container
          alignItems="center"
          className={clsx(classes.mb48, editTitle && classes.pt24)}
        >
          <Grid item xs={12} sm container alignItems="center">
            <BackIcon className={classes.iconBtn} onClick={onClickBack} />

            {!editTitle && (
              <Title onClick={() => setEditTitle((c) => !c)}>{title}</Title>
            )}
            {editTitle && (
              <TitleTextField
                autoFocus
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onBlur={reqEditTitle}
              />
            )}

            <EditIcon
              className={classes.iconBtn}
              onClick={() => setEditTitle((c) => !c)}
            />
          </Grid>
          <Grid container justifyContent="flex-end" item xs={12} sm={4}>
            <SortButton className={classes.iconBtn} />
            <Button color="primary" startIcon={<PlusIcon />} onClick={openAdd}>
              Tambah
            </Button>
          </Grid>
        </Grid>

        {(!list || list.length === 0) && (
          <img src={TodoEmptyImage} alt="add-todo" className={classes.addImg} />
        )}

        {list.length > 0 &&
          list.map((v, i) => (
            <TodoCard
              key={i}
              isDone={!v.is_active}
              priority={v.priority}
              title={v.title}
              onClickEdit={() => openEdit(v)}
              // onClickDelete={() => deleteTodo(v)}
              // onClickCheckbox={() => setDoneTodo(v)}
            />
          ))}
      </div>

      {/* modal add */}
      <Modal open={openModal} onClose={toggleModal}>
        {/* <div className={classes.modalConfirm}>Tes</div> */}
        <AddTodoCard
          className={classes.modalConfirm}
          onClose={toggleModal}
          name={formValues.title}
          priority={formValues.priority}
          onChangeName={(title) => setFormValues((c) => ({ ...c, title }))}
          onChangePriority={(priority) =>
            setFormValues((c) => ({ ...c, priority }))
          }
          onSubmit={() => {
            if (formType === 1) reqAddTodo();
            if (formType === 2) reqEditTodo();
          }}
        />
      </Modal>
    </>
  );
}
