import Modal from "@material-ui/core/Modal";
import Popper from "@material-ui/core/Popper";
import { makeStyles } from "@material-ui/styles";
import * as apiActivity from "api/activity";
import * as apiTodo from "api/todo";
import { ReactComponent as BackIcon } from "assets/icon/back-button.svg";
import { ReactComponent as EditIcon } from "assets/icon/edit-button.svg";
import { ReactComponent as PlusIcon } from "assets/icon/tabler_plus.svg";
import { ReactComponent as SortButton } from "assets/icon/todo-sort-button.svg";
import TodoEmptyImage from "assets/png/todo-empty-state.png";
import clsx from "clsx";
import AddTodoCard from "components/AddTodoCard";
import AlertActivityCard from "components/AlertActivityCard";
import Button from "components/Button";
import ConfirmDeleteCard from "components/ConfirmDeleteCard";
import Header from "components/Header";
import SortCard from "components/SortCard";
import { sortBy } from "components/SortCard/SortCard";
import Title from "components/Title";
import TitleTextField from "components/TitleTextField";
import TodoCard from "components/TodoCard";
import { useEffect, useState } from "react";

const useStyles = makeStyles(() => ({
  container: {
    width: "100%",
    maxWidth: 1000,
    margin: "auto",
  },
  mb42: { marginBottom: 42 },
  mb48: { marginBottom: 48 },
  pt24: { paddingTop: 24 },
  addImg: {
    maxWidth: "100%",
    height: "auto",
    display: "flex",
    margin: "auto",
  },
  iconBtn: {
    margin: "0px 12px",
  },
  modalConfirm: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  },
  flexContainer: {
    display: "flex",
    alignItems: "center",
  },
  spaceBetween: { justifyContent: "space-between" },
}));

const defaultFormValues = { title: "", priority: "very-high" };

export default function DetailTodo({ activityId, activityTitle, onClickBack }) {
  const classes = useStyles();
  const [list, setList] = useState([]);

  const reqGetDetail = (activityId) =>
    apiActivity.getDetail(activityId).then((result) => {
      setList(result.todo_items);
    });

  useEffect(() => {
    if (activityId) {
      reqGetDetail(activityId);
    }
  }, [activityId]);

  const [title, setTitle] = useState(activityTitle);
  const [editTitle, setEditTitle] = useState(false);

  const reqEditTitle = () => {
    apiActivity.update(activityId, { title }).then((result) => {
      setEditTitle((c) => !c);
    });
  };

  const [openModal, setOpenModal] = useState(false);
  const [formType, setFormType] = useState(1); // 1.add todo, 2.edit todo, 3.delete todo, 4. info
  const toggleModal = () => setOpenModal((c) => !c);

  const [formValues, setFormValues] = useState(defaultFormValues);

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
    const data = {
      activity_group_id: activityId,
      title: formValues?.title,
      priority: formValues?.priority,
    };

    apiTodo.add(data).then((result) => {
      setFormValues(defaultFormValues);
      toggleModal();
      setList((c) => [result, ...c]);
    });
  };

  const reqEditTodo = (data) => {
    apiTodo.update(data?.id, data).then((result) => {
      setList((c) => c.map((v) => (v.id === result?.id ? result : v)));
      setFormValues(defaultFormValues);
      setOpenModal(false);
    });
  };

  const [deleteTodo, setDeleteTodo] = useState(null);
  const confirmDelete = (v) => {
    setDeleteTodo(v);
    setOpenModal(true);
    setFormType(3);
  };

  const reqDeleteTodo = (id, onSuccess) => {
    apiTodo.remove(id).then((result) => {
      onSuccess && onSuccess();
      setList((c) => c.filter((v) => v.id !== id));
    });
  };

  const onSuccessDelete = () => {
    setDeleteTodo(null);
    setFormType(4);
  };

  const [sortState, setSortState] = useState(sortBy.terbaru);
  const [anchorEl, setAnchorEl] = useState(null);

  const onClickSort = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const openSortMenu = Boolean(anchorEl);
  const id = openSortMenu ? "simple-popper" : undefined;

  const sortListBy = (type) => {
    if (type === sortBy.terbaru) {
      setList((c) => c.sort(compareTerbaru));
      setSortState(sortBy.terbaru);
    } else if (type === sortBy.terlama) {
      setList((c) => c.sort(compareTerlama));
      setSortState(sortBy.terlama);
    } else if (type === sortBy.az) {
      setList((c) => c.sort(compareAZ));
      setSortState(sortBy.az);
    } else if (type === sortBy.za) {
      setList((c) => c.sort(compareZA));
      setSortState(sortBy.za);
    } else if (type === sortBy.belumSelesai) {
      setList((c) => c.sort(compareBelumSelesai));
      setSortState(sortBy.belumSelesai);
    }
  };

  return (
    <>
      <Header className={classes.mb42} />
      <div className={classes.container}>
        <div
          className={clsx(
            classes.flexContainer,
            classes.spaceBetween,
            classes.mb48,
            editTitle && classes.pt24
          )}
        >
          <div className={classes.flexContainer}>
            <BackIcon
              data-cy="todo-back-button"
              className={classes.iconBtn}
              onClick={onClickBack}
            />

            {!editTitle && (
              <Title
                data-cy="todo-title"
                onClick={() => setEditTitle((c) => !c)}
              >
                {title}
              </Title>
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
              data-cy="todo-title-edit-button"
              className={classes.iconBtn}
              onClick={() => setEditTitle((c) => !c)}
            />
          </div>
          <div className={classes.flexContainer}>
            <SortButton
              data-cy="todo-sort-button"
              className={classes.iconBtn}
              aria-describedby={id}
              type="button"
              onClick={onClickSort}
            />
            <Popper id={id} open={openSortMenu} anchorEl={anchorEl}>
              <SortCard
                value={sortState}
                onChange={(v) => {
                  sortListBy(v);
                  onClickSort();
                }}
              />
            </Popper>

            <Button
              data-cy="todo-add-button"
              color="primary"
              startIcon={<PlusIcon />}
              onClick={openAdd}
            >
              Tambah
            </Button>
          </div>
        </div>

        {(!list || list.length === 0) && (
          <img
            data-cy="todo-empty-state"
            src={TodoEmptyImage}
            alt="add-todo"
            className={classes.addImg}
            onClick={openAdd}
          />
        )}

        {list.length > 0 &&
          list.map((v, i) => (
            <TodoCard
              key={i}
              isDone={!v.is_active}
              priority={v.priority}
              title={v.title}
              onClickEdit={() => openEdit(v)}
              onClickDelete={() => confirmDelete(v)}
              onClickCheckbox={() =>
                reqEditTodo({
                  ...v,
                  is_active: !v?.is_active,
                })
              }
            />
          ))}
      </div>

      <div data-cy="modal-add" />
      <div data-cy="modal-delete" />
      <div data-cy="modal-information" />
      {/* modal add */}
      <Modal open={openModal} onClose={toggleModal}>
        <>
          {(formType === 1 || formType === 2) && (
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
                if (formType === 2) reqEditTodo(formValues);
              }}
            />
          )}

          {formType === 3 && (
            <ConfirmDeleteCard
              item="List Item"
              itemTitle={deleteTodo?.title}
              onClickBatal={() => setOpenModal(false)}
              onClickHapus={() =>
                reqDeleteTodo(deleteTodo?.id, onSuccessDelete)
              }
              className={classes.modalConfirm}
            />
          )}

          {formType === 4 && (
            <div style={{ maxWidth: 490 }} className={classes.modalConfirm}>
              <AlertActivityCard text="Item berhasil dihapus" />
            </div>
          )}
        </>
      </Modal>
    </>
  );
}

function compareTerbaru(a, b) {
  if (a.id > b.id) return -1; // lebih baru
  if (a.id < b.id) return 1;
  return 0;
}

function compareTerlama(a, b) {
  if (a.id < b.id) return -1; // lebih lama
  if (a.id > b.id) return 1;
  return 0;
}

function compareAZ(a, b) {
  const result = a.title.localeCompare(b.title);

  return result;
}

function compareZA(a, b) {
  const result = a.title.localeCompare(b.title);

  return result * -1;
}

function compareBelumSelesai(a, b) {
  if (!a.is_active && b.is_active) return 1;
  if (a.is_active && !b.is_active) return -1;
  return 0;
}
